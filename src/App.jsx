import { useState } from "react"
import List from "./components/List"
import Modals from "./components/Modals"

const App = () => {
  const [toggleModal,setToggleModal]=useState(true);
  const [product,setProduct]=useState([]);
  function handleClose(val){
    setToggleModal(val)
  }
  function getData(val){
    setProduct([...product,val]);
  }
  function handleDelete(val){
    if(confirm("Are you sure to delete this product?")){
      setProduct((pre)=>pre.filter((p)=>p.code!==val));
    }
  }
  return (
    <>
      <div className="container-fluid mt-5">
          <h1>Product Lists</h1>  
          <button className="btn btn-primary float-end me-5" onClick={()=>setToggleModal(false)}>Add Product</button>
          <List products={product} deleteProduct={handleDelete}/>
      </div>
      {toggleModal ? '' :<Modals onClose={handleClose} submit={getData}/>}
      
    </>
  )
}

export default App