const apiKey = 'ILTAacPZ4qZknvvGLWYf2y4kalz9SkZT';

const getGifts = async (category) =>{        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    const gifts = data.map((gif) => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium,

        }
    ))     
    return gifts;
}


export{
    getGifts
}