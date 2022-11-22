import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';



export const GifGrid = ({category}) => {    
  
  const {images, isLoading } = useFetchGifs(category);  

    return (
    <>
        <h3>{category}</h3>
        {
          isLoading && ( <h2>Cargando...</h2>) 
        }
        
        <div className='card-grid'>   
          {            
            images.map((img) => 
              (
                <GiftGridItem key={img.id} 
                {...img}
                />
              )
            )            
          }
        </div>        
    </>
  )

}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired

}
