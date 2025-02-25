import axios from "axios"
import { useEffect, useState } from "react"
import { createContext } from "react"

export const ProductContext= createContext()
const ContextProduct = ({children}) => {
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        axios.get("/public/data.json")
            .then(respone=>{
                console.log(respone.data);
                
                setProduct(respone.data);    
            })
    },[])
  return (
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ContextProduct