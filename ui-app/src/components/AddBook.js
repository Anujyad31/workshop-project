import React, { useState  } from 'react'
import axios from 'axios'

function AddBook() {
    const [formData, setFormData] = useState({
        Author: '',
        Book_Name: '',
        Category: ''
        
      });
      const { Author,Book_Name,Category } = formData;
    
      const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit =  async (e) => {
        e.preventDefault();
        
       
         const newBook={
             Author,
             Book_Name,
             Category
         }
         try{
             const config={
                 headers:{
                     'Content-Type':'application/json'
                 }
             }
             const body=JSON.stringify(newBook);
             const res=await axios.post('http://localhost:8000/api/Books',body,config);
             console.log(res.data);
         }
         catch(err){
             console.log(err.response.data);
         }
         };
        


    return (
        <div>
           <h1>Fill Book Details</h1>
      <form className="form" onSubmit= {e=>{onSubmit(e)}}>
        <div className="form-group" >
          <input type="text" placeholder="Author" name="Author" value={Author} onChange= {e=>{onChange(e)}} required/>
        </div>
        <div className="form-group">
          <input type="Text" placeholder="Book Name" name="Book_Name" value={Book_Name} onChange={e=>{onChange(e)}} />
          
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Category"
            name="Category"
            
            value={Category} onChange={e=>{onChange(e)}}
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="ADD Book" />
      </form>
      

        </div>
    )
}

export default AddBook
