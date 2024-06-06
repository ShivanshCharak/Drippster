import {useState,useEffect} from 'react'
function UsefetchedData(){
    const [fetchedData,setfetchedData] = useState({})
    useEffect(()=>{
        getData()

    },[])
    async function getData(){
        try{
           let data  = await fetch("https://api.escuelajs.co/api/v1/products")
           if(data){
             data = await data.json()
             setfetchedData(data)
           }

        }catch(e){
            console.log(e)
        }
    }
    return fetchedData
}
export default UsefetchedData