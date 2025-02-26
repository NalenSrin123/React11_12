import { useContext } from "react";
import { ProductContext } from "../Context/ContextProduct";
import Banner from "./Banner";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
const HomePage = () => {
    const contextValue = useContext(ProductContext); 
    const { products } = contextValue;  //destructuring array
    return (
        
        <div>
            <Banner/>
            <h2 className="ms-5 mt-3 text-center">Coffee</h2>
            <div className="product">
            
            {products.map((val,index)=>{
                return(
                    <Link key={index} to={`/detail/${val.id}`}><div className="cards" >
                        <div className="image">
                            <img src={val.image} alt="" />
                        </div>
                        <div className="title p-2">
                            <b>{val.name}</b>
                            <p>$ {val.price}</p>
                            <button className="btn btn-primary float-end">Buy</button>
                        </div>
                    </div></Link>
                );
            })}
            </div>
        </div>
       
    );
};

export default HomePage;
