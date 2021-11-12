import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { ProductCard } from "../products/ProductCard";
import { useForm } from "../hooks/useForm";
import { getProductsByName } from "../../selectors/getProductsByName";
import { useSelector } from "react-redux";

export const SearchScreen = ({ history }) => {
	const location = useLocation();

	const { query = "" } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		searchText: query,
	});

	const { searchText } = formValues;

	const { products } = useSelector((state) => state.products);

	const productsFiltered = useMemo(
		() => getProductsByName(products, query),
		[products, query]
	);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?query=${searchText}`);
	};

	return (
		<div>
			<h1>Buscar productos</h1>
			<hr />

			<div className="row">
				<div className="col-4">
					<form onSubmit={handleSearch} className="form-inline">
						<input
							type="text"
							value={searchText}
							className="form-control"
							placeholder="Por ejemplo: Velas de miel"
							name="searchText"
							onChange={handleInputChange}
							autoComplete="off"
						/>
						<button
							type="submit"
							className="btn d-block m-1 btn-info"
						>
							Buscar
						</button>
					</form>
				</div>
				<div className="col-8">
					{(query === "" && (
						<div className="alert alert-info">Busca algo!</div>
					)) ||
						(query !== "" && productsFiltered.length === 0 && (
							<div className="alert alert-danger">
								No encontramos nada con ese nombre
							</div>
						))}

					{productsFiltered.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
		</div>
	);
};
