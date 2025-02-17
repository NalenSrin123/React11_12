import { useState } from "react";
import "./modals.css"
const Modals = ({onClose,submit}) => {
    const [formData,setFormData]=useState({code:'',name:'',price:'',qty:'',images:'',imageUrl:''});
    function handleChange(e){
        const {value,name,files}=e.target;
        if(name==='image'){
            setFormData((pre)=>({
                ...pre,
                images:files[0],
                imageUrl:URL.createObjectURL(files[0])
            }))
        }else{
            setFormData((pre)=>({
                ...pre,
                [name]:value
            }))
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        submit(formData);
        setFormData({code:'',name:'',price:'',qty:'',images:'',imageUrl:''})
        onClose(true);   
    }
  return (
    <>
        <div className="modals">
            <form action="" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <h3>Add Product</h3>
                <div className="form-group">
                    <label htmlFor="code" className="form-label">Code</label>
                    <input type="text" name="code" id="code" className="form-control" value={formData.code}  onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" value={formData.name}  onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" name="price" id="price" className="form-control" value={formData.price}  onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="qty" className="form-label">Qty</label>
                    <input type="text" name="qty" id="qty" className="form-control" value={formData.qty}  onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" name="image" id="image" className="form-control"   onChange={handleChange}/>
                    <img width={80} className="mt-2" src={formData.imageUrl} alt="" />
                </div>
                <div className="form-group d-flex justify-content-end mt-2">
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <button type="button" className="btn btn-danger" onClick={()=>onClose(true)}>Cancel</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Modals