import React, { useState, useEffect } from 'react';

const initialForm = {
     name: "",
     author: "",
     id: null
}

export const CRUDForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
     const [form, setForm] = useState(initialForm);
     
     const handleChange = e => {
          setForm({
               ...form, 
               [e.target.name]: e.target.value
          })
     }

     const handleSubmit = e=> {
          e.preventDefault();

          if (!form.name || !form.author) {
               alert("Incomplete Datas");
               return;
          }

          if (form.id === null) {
               createData(form)
          }else {
               updateData(form);
          }

          handleReset();
     }

     const handleReset = e => {
          setForm(initialForm);
          setDataToEdit(null);
     }

     return (
          <div>
               <h3>Add</h3>
               <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         name="name" 
                         placeholder="Name" 
                         onChange={handleChange} 
                         value={form.name} 
                    />

                    <input 
                         type="text" 
                         name="author"
                         placeholder="Author" 
                         onChange={handleChange} 
                         value={form.author}
                    />
                    
                    <input    
                         type="submit" 
                         value="Send"
                    />
                    <input 
                         type="reset" 
                         value="Clean"
                         onClick={handleReset}
                    />
               </form>
          </div>
     )
}
