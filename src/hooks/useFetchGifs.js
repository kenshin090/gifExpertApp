import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifts';


export const useFetchGifs = (category) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
  
  useEffect(
        () => {
            getGifts(category).then((newImages) => {
              const [array] = [newImages,...images];              
              setImages(array);
              setIsLoading(false);
            });
           
        },
        []
    )

  return{
    images,
    isLoading,
  }
}
