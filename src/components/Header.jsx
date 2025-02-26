import { Link } from "react-router-dom";


const Header = () => {
    const nav=[{to:"/",link:"Home"},{to:"/about",link:"About Us"},{to:"/gallery",link:"Gallery"},{to:"/service",link:"Services"},{to:"/contact",link:"Contact Us"}];
  return (
    <header>
        <div className="container-fluid  " style={{ backgroundColor:"rgba(110, 38, 7, 0.783)" }}>
            <div className="row p-2">
                <div className="col-6">
                    <h3 className="text-light">Grand Coffee</h3>
                </div>
                <div className="col-6">
                    <ul style={{display:"flex", justifyContent:"end", gap:"20px",height:"100%"}} className="pe-5">
                        {nav.map((val,index)=>{
                            return (
                                <li style={{ listStyle:"none" ,display:"flex",alignItems:"center" }} key={index}>
                                    <Link style={{ color:"#fff",fontWeight:"bold",textDecoration:"none" }} to={val.to}>{val.link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    </header>
    
  )
}

export default Header