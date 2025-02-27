import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ContextProduct";
import Pay from "./Pay";
const ProductDetail = () => {
  const {id}= useParams();
  const {products}=useContext(ProductContext);
  const [number,setNumber]=useState(1);
  const [pay,setPay]=useState(false);

  return (
    <>
      {products.map((val,index)=>{
        if(val.id==id){
          return(
            <>
            <div key={index} className="container  mt-5" style={{ height: "80vh" }}>
          <div className="row h-100">
              <div className="col-4 h-100 d-flex align-items-center">
                  <img width={400} className="rounded-4" src={val.image} alt="" />
              </div>
              <div className="col-5 ms-5 h-100">
                <div className="title h-100 d-flex flex-column justify-content-start gap-3 mt-5 align-items-center">
                    <h1 className="text-center">Product Detail</h1>
                    <h2>{val.name}</h2>
                    <h3>Price : {val.price}$</h3>
                    <h3><input className="text-center" style={{ outline:"none",borderRadius:"5px",padding:"7px",width:"90px"}}  type="number" name="" id="" value={number}  onChange={(e)=>setNumber(e.target.value)} min={1}/></h3>
                    <h3>Total :{5*number} $</h3>
                    <button className="btn btn-primary" onClick={()=>setPay(true)} >Pay Now</button>
                </div>
              </div>
          </div>
      </div>
            </>
          )
        }
      })}
      { pay ? <Pay onClose={()=>setPay(false)}/> : null}
    </>
  )
}

export default ProductDetail