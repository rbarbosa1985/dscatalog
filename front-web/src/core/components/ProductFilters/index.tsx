import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ReactComponent as SearchIcon } from 'core/assets/images/serach-icon.svg';
import Select from 'react-select';
import { makeRequest } from 'core/utils/request';
import { Category } from 'core/types/Product';

const ProductFilters = () => {

     const [isLoadingCategories, setIsLoadingCategories] = useState(false);
     const [categories, setCategories] = useState<Category[]>([]);

     useEffect(() => {
          setIsLoadingCategories(true);
          makeRequest({ url: '/categories' })
               .then(response => {
                    setCategories(response.data.content);
               })
               .finally(() => { setIsLoadingCategories(false) });
     }, []);

     return (
          <div className="card-base product-filters-container">
               <div className="input-search">
                    <input type="text" className="form-control" placeholder="Pesquisar Produto" />
                    <SearchIcon />
               </div>
               <Select
                    name="categories"
                    isLoading={isLoadingCategories}
                    options={categories}
                    getOptionLabel={(option: Category) => option.name}
                    getOptionValue={(option: Category) => String(option.id)}
                    classNamePrefix="categories-select"
                    className="filter-select-container"
                    placeholder="Categorias"
                    inputId="categories"
               />
               <button className="btn btn-outline-secondary border-radius-10">LIMPAR FILTRO</button>
          </div>
     )
}

export default ProductFilters;