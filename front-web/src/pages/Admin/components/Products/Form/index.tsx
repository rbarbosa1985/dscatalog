import {makePrivateRequest} from 'core/utils/request';
import React from 'react';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

type FormState ={
     name:string;
     price:string;
     category:string;
     description:string;
     img_URL: string;
}

const Form = () => {

     const { register, handleSubmit, errors } = useForm<FormState>();
     const history = useHistory();


     const onSubmit = (data: FormState) => {
          makePrivateRequest({method: 'POST', url:'/products', data})
              .then(() => {
                   toast.info('Produto cadastrado com sucesso!');
                   history.push('/admin');
              })
              .catch(()=> {
                   toast.error('Erro ao salvar produto!');
              });
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <BaseForm title="cadastrar um produto"> 
                    <div className="row">
                         <div className="col-6">
                              <div className="margin-bottom-30">
                                   <input type="text" name="name"
                                          ref={register({
                                               required: "Campo Obrigatório.",
                                               minLength: { value:5, message: 'O nome deve ter no mínimo 5 caracteres.'},
                                               maxLength: {value: 60, message: 'O nome do produto não pode ter mais de 60 caracteres.'}
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
                                   <select name="category" ref={register({required: "Campo Obrigatório."})} className="form-control ">
                                        <option value="1">Livros</option>
                                        <option value="3">Computadores</option>
                                        <option value="2">Eletronicos</option>
                                   </select>
                              </div>
                              <div className="margin-bottom-30">
                                   <input name="price" type="number" ref={register({required: "Campo Obrigatório."})} placeholder="Preço do Produto" className="form-control  input-base" />
                                   {errors.price && (
                                       <div className="invalid-feedback d-block">
                                            {errors.price.message}
                                       </div>
                                   )}
                              </div>
                              <div className="margin-bottom-30">
                                   <input name="img_URL" type="text" ref={register({required: "Campo Obrigatório."})} placeholder="Url da Imagem" className="form-control  input-base" />
                                   {errors.img_URL && (
                                       <div className="invalid-feedback d-block">
                                            {errors.img_URL.message}
                                       </div>
                                   )}
                              </div>
                         </div>
                         <div className="col-6 margin-bottom-30">
                              <textarea name="description" ref={register({required: "Campo Obrigatório."})} placeholder="Descrição" className="form-control input-base" cols={30} rows={11}/>
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