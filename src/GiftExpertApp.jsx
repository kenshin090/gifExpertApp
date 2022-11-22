import React,{ useState } from 'react'
import {AddCategory,GifGrid} from './components'  


export const GiftExpertApp = () => {

const [categories, setCategories] = useState(['One punch']);

const onAddCategorie =(category ) => {      
    
    if (categories.includes(category)) {
        return;
    }    
    setCategories([  category,...categories]);    
}

return (
    <>
        {/* {titulo} */}
        <h1>Gif Expert App </h1>
        {/* {input} */}
        <AddCategory  onNewCategory = {(event) => onAddCategorie(event)}/>
        {
        categories.map((category,i) => (<GifGrid key={category} category={category} />)            )
        }            
    </>    
  )
}
