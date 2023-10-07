const API_FACTS = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
    return fetch (`${API_FACTS}`)
    .then((res)=>{
        if(!res.ok) {
         throw new Error ('Error bringing data from API')
        }
        return res.json()
    })
    .then((data)=> {
        const fact = data.fact
        return fact
    })
    .catch((error)=> {
        throw new Error(error)
    })
}