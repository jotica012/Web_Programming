const API_IMG = 'https://cataas.com/cat/says/'

export const fetchImg = async (words) => {
    return fetch (`${API_IMG}${words}`).then((res)=> {
        if (!res.ok) {
            throw new Error ('Error bringing data from API')
        }
        return res.url
    })
        .catch((error) => {
            throw new Error(error)
        })
}

/*const IMG_URL = 'https://cataas.com/cat/says/'

export const fetchImg = async({words}) => {
    return fetch(`${IMG_URL}${words}`)
    .then((img)=>{
        if (!img.ok) {
            throw new Error('There is something wrong with the picture')
        }
        const image = img.url
        return image
    })
    .catch((error)=> {
        throw new Error(error)
    })
}*/