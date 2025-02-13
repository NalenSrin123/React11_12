import { useState } from "react"
import List from "./components/List"
import Modals from "./components/Modals"

const App = () => {
  const [toggleModal,setToggleModal]=useState(true);
  function handleClose(val){
    setToggleModal(val)
  }
  return (
    <>
      <div className="container-fluid mt-5">
          <h1>Product Lists</h1>  
          <button className="btn btn-primary float-end me-5" onClick={()=>setToggleModal(false)}>Add Product</button>
          <List/>
      </div>
      {toggleModal ? '' :<Modals onClose={handleClose}/>}
    </>
  )
}

export default App