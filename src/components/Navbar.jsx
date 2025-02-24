import { Link } from "react-router-dom"
const Navbar = () => {
    const menu=[
        {to:"/",name:"Home"},
        {to:"/blog",name:"Blog"},
        {to:"/abouts",name:"About Us"},
        {to:"/news",name:"News"},
        {to:"/contact",name:"Contact"}
    ];
  return (
    <nav style={{backgroundColor:"#fa1939",padding:"20px 40px"}}>
        <ul style={{display:"flex",gap:"20px"}}>
            {menu.map((val,index)=>{
                return(
                    <li key={index} style={{ listStyle:"none" }}>
                        <Link style={{ textDecoration:"none",fontSize:"20px",color:"#fff" }} to={val.to}>{val.name}</Link>
                    </li>  
                   
                );
            })} 
        </ul>
    </nav>
  )
}

export default Navbar