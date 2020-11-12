import {makeRequest} from 'core/utils/request';
import React, {useState} from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type formData ={
     name:string;
     price:string;
     category:string;
     description:string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {

     const [formData,setFormData] = useState<formData>({
          name: '',
          price: '',
          category: '',
          description: ''
     });


     const handleOnChange = (event: FormEvent ) => {
          const name = event.target.name;
          const value = event.target.value;
          setFormData(data => ({ ...data, [name]: value}));
     }

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const payload ={
               ...formData,
               img_URL: 'https://imagens.canaltech.com.br/produto/1553634067-6565-principal-m.png',
               categories: [{ id: formData.category}]

          }
          makeRequest({method: 'POST', url:'/products', data:payload}).then(() => {
               setFormData({
                    name: '',
                    price: '',
                    category: '',
                    description: ''
               });
          });
     }

     return (
          <form onSubmit={handleSubmit}>
               <BaseForm title="cadastrar um produto"> 
                    <div className="row">
                         <div className="col-6">
                              <input type="text" name="name" value={formData.name} className="form-control mb-5" onChange={handleOnChange}/>
                              <select name="category" value={formData.category} onChange={handleOnChange} className="form-control mb-5">
                                   <option value="1">Livros</option>
                                   <option value="3">Computadores</option>
                                   <option value="2">Eletronicos</option>
                              </select>
                              <input name="price" type="text" value={formData.price} className="form-control" onChange={handleOnChange}/>
                         </div>
                         <div className="col-6">
                              <textarea name="description" value={formData.description} className="form-control mb-5" onChange={handleOnChange} cols={30} rows={10}/>
                         </div>
                    </div>
               </BaseForm>
          </form>
     );
};

export default Form;