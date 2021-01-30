import { makePrivateRequest, makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Select from "react-select";
import BaseForm from '../../BaseForm';
import './styles.scss';
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Category } from "../../../../../core/types/Product";

type FormState = {
     name: string;
     price: string;
     categories: Category[];
     description: string;
     img_URL: string;
}

type ParamsType = {
     productId: string;
}

const Form = () => {

     const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();
     const history = useHistory();
     const { productId } = useParams<ParamsType>();
     const [isLoadingCategories, setIsLoadingCategories] = useState(false);
     const [categories, setCategories] = useState<Category[]>([]);
     const isEditing = productId !== 'create';


     useEffect(() => {
          if (isEditing) {
               makeRequest({ url: `/products/${productId}` })
                    .then(response => {
                         setValue('name', response.data.name);
                         setValue('price', response.data.price);
                         setValue('description', response.data.description);
                         setValue('img_URL', response.data.img_URL);
                         setValue('categories', response.data.categories)
                    });
          }
     }, [productId, isEditing, setValue]);

     useEffect(() => {
          setIsLoadingCategories(true);
          makeRequest({ url: '/categories' })
               .then(response => {
                    setCategories(response.data.content);
               })
               .finally(() => { setIsLoadingCategories(false) });
     }, []);

     const onSubmit = (data: FormState) => {
          console.log('Oi');
          makePrivateRequest({
               method: isEditing ? 'PUT' : 'POST',
               url: isEditing ? `/products/${productId}` : '/products',
               data
          })
               .then(() => {
                    isEditing ? toast.info('Produto editado com sucesso!') : toast.info('Produto cadastrado com sucesso!');
                    history.push('/admin/products');
               })
               .catch(() => {
                    toast.error('Erro ao salvar produto!');
               });
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <BaseForm title={isEditing ? 'editar um produto' : "cadastrar um produto"}>
                    <div className="row">
                         <div className="col-6">
                              <div className="margin-bottom-30">
                                   <input type="text" name="name"
                                        ref={register({
                                             required: "Campo Obrigatório.",
                                             minLength: { value: 5, message: 'O nome deve ter no mínimo 5 caracteres.' },
                                             maxLength: { value: 60, message: 'O nome do produto não pode ter mais de 60 caracteres.' }
                                        })}
                                        placeholder="Nome do Produto"
                                        className="form-control  input-base"
                                   />
                                   {errors.name && (
                                        <div className="invalid-feedback d-block">
                                             {errors.name.message}
                                        </div>
                                   )}
                              </div>
                              <div className="margin-bottom-30">
                                   <Controller
                                        as={Select}
                                        name="categories"
                                        rules={{ required: true }}
                                        control={control}
                                        isLoading={isLoadingCategories}
                                        options={categories}
                                        getOptionLabel={(option: Category) => option.name}
                                        getOptionValue={(option: Category) => String(option.id)}
                                        isMulti
                                        classNamePrefix="categories-select"
                                        placeholder="Categorias"
                                        inputId="categories"
                                        defaultValue=""
                                   />
                                   {errors.categories && (
                                        <div className="invalid-feedback d-block">
                                             Campo Obrigatório.
                                        </div>
                                   )}
                              </div>
                              <div className="margin-bottom-30">
                                   <input name="price" type="number" ref={register({ required: "Campo Obrigatório." })} placeholder="Preço do Produto" className="form-control  input-base" />
                                   {errors.price && (
                                        <div className="invalid-feedback d-block">
                                             {errors.price.message}
                                        </div>
                                   )}
                              </div>
                              <div className="margin-bottom-30">
                                   <input name="img_URL" type="text" ref={register({ required: "Campo Obrigatório." })} placeholder="Url da Imagem" className="form-control  input-base" />
                                   {errors.img_URL && (
                                        <div className="invalid-feedback d-block">
                                             {errors.img_URL.message}
                                        </div>
                                   )}
                              </div>
                         </div>
                         <div className="col-6 margin-bottom-30">
                              <textarea name="description" ref={register({ required: "Campo Obrigatório." })} placeholder="Descrição" className="form-control input-base" cols={30} rows={11} />
                              {errors.description && (
                                   <div className="invalid-feedback d-block">
                                        {errors.description.message}
                                   </div>
                              )}
                         </div>
                    </div>
               </BaseForm>
          </form>
     );
};

export default Form;