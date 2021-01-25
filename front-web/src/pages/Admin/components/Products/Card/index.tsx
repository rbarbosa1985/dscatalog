import React from "react";
import './styles.scss';
import ProductPrice from "../../../../../core/components/ProductPrice";
import {Product} from "../../../../../core/types/Product";
import {Link} from "react-router-dom";

type Props ={
    product: Product;
}

const Card = ({ product } : Props) => {
    return (
        <div className="card-base product-card-admin">
            <div className="row">
                <div className="product-card-admin-img col-2 text-center border-right py-3">
                    <img className="product-card-image-admin" src={product.img_URL} alt={product.name}/>
                </div>
                <div className="col-7 py-3">
                    <h3 className="product-card-name-admin">{product.name}</h3>
                    <ProductPrice price={product.price}/>
                    {product.categories.map(category => (<span className="badge badge-pill badge-secondary mr-2">{category.name}</span>))}
                </div>
                <div className="col-3 pt-3 pr-5">
                    <Link to={`/admin/products/${product.id}`} key={product.id} className="btn btn-outline-secondary btn-edit btn-block border-radius-10 mb-3">
                        EDITAR
                    </Link>
                    <button className="btn btn-outline-danger btn-block border-radius-10">EXCLUIR</button>
                </div>
            </div>

        </div>
    )
}

export default Card;