import { useState } from "react"
import PropTypes from 'prop-types';



export const AddCategory = ({
    onNewCategory
}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {        
        setInputValue(target.value);
    }

    const onSubmit = ((event) => {
        event.preventDefault();
        const category = inputValue.trim();
        if (category.length > 1) {
            onNewCategory(category);                        
            setInputValue('');
        }           
        return;             
    })

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input type="text" 
        placeholder="Buscar Gifs"         
        onChange={onInputChange}
        value= {inputValue}/>

    </form>   

    
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}