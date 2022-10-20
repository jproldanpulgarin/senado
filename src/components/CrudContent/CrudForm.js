import React,{useState,useEffect} from 'react'

const CrudForm = () => {
    const handleChange=(e)=>{}
    const handleSubmit=(e)=>{}
    const handleReset=(e)=>{}


  return (
    <div>
      <h3>Agregar</h3>
    </div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='Nombre'  onChange={handleChange} value={form.name}/>
        <input type="text" name="Edad" id="" placeholder='Edad' onChange={handleChange} value={form.age}/>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" />
    </form>
  )
}

export default CrudForm
