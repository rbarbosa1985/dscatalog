import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Card from "../Card";
import {ProductResponse} from "../../../../../core/types/Product";
import {makePrivateRequest, makeRequest} from "../../../../../core/utils/request";
import Pagination from "../../../../../core/components/Pagination";
import {toast} from "react-toastify";
import CardLoader from "../Loaders/ProductCardLoader";

const List = () => {

    const history = useHistory();
    const [productsResponse, setProductsResponse] = useState<ProductResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const getProducts = useCallback( () => {
        const params = {
            page : activePage,
            linesPerPage: 4,
            direction: 'ASC',
            orderBy: 'id'
        }
        setIsLoading(true);
        makeRequest({ url: '/products' ,  params}).then(response => setProductsResponse(response.data))
            .finally(() => setIsLoading(false));
    }, [activePage]);

    useEffect(()=> {
        getProducts();
    }, [getProducts])

     const handleCreate = () => {
          history.push('/admin/products/create');
     }

     const onRemove = (productId : number) => {
        const confirm = window.confirm('Deseja realmente excluir esse produto?');
        if (confirm) {
            makePrivateRequest({url: `/products/${productId}`, method: 'DELETE'})
                .then(() => {
                    toast.info('Produto deletado com sucesso!');
                    getProducts();
                })
                .catch(() => {
                    toast.error('Erro ao deletar o produto!');
                });
        }
     }

     return (
          <div className="admin-products-list">
               <button className="btn btn-primary btn-lg" onClick={handleCreate}>ADICIONAR</button>
               <div className="admin-list-container">
                   {isLoading ? <CardLoader/> : (
                       productsResponse?.content.map(product => (
                           <Card product={product} key={product.id} onRemove={onRemove}/>
                       ))
                   )}
               </div>
               {productsResponse && <Pagination totalPages={productsResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)}/>}
          </div>
     );
};
export default List;