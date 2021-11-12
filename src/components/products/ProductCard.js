import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title }) => {
	return (
		<div className="col-12 col-lg-6">
			<div className="card m-2" style={{ maxWidth: 540 }}>
				<div className="row">
					<div className="col-md-4">
						<img
							src={img}
							alt={title}
							className="card-img animate__animated animate__fadeIn"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h4 className="card-title">{title}</h4>

							<Link
								to={`./product/${id}`}
								className="btn btn-primary"
							>
								Mas info
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
