import { useContext } from "react";
import { ProductContext } from "../Context/ContextProduct";
import "./home.css"
const HomePage = () => {
    const contextValue = useContext(ProductContext); 
    const { products } = contextValue;  //destructuring array
    return (
        <div className="product">
            {products.map((val,index)=>{
                return(
                    <div className="card" key={index}>
                        <div className="image">
                            <img src={val.image} alt="" />
                        </div>
                        <div className="title">
                            <b>{val.name}</b>
                            <p>$ {val.price}</p>
                        </div>
                    </div>
                );
            })}
            </div>
       
    );
};

export default HomePage;
