import "../assets/css/pay.css"
const Pay = ({onClose}) => {
  return (
    <div className="pay" style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,backgroundColor:"rgba(0,0,0,0.5)"}}>	
        <div className="box" style={{ width:"400px",height:"450px",backgroundColor:"white",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <img width={300} src="/public/images/qr1.jpg" alt="" />
        <button className="btn btn-danger" onClick={()=>onClose(false)}>Cancel</button>
        </div>
    </div>
  )
}

export default Pay