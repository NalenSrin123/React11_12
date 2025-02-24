const Header = () => {
    const styleHeader={
        width:"100%",
        height:"140px",
        backgroundColor:"#000",
        display:"flex",
        alignItems:"center",
        paddingLeft:"40px"
    }
  return (
    <>
        <header style={styleHeader}>
            <img width={120} src="/src/assets/images/logoSabby.png" alt="" />
        </header>
    </>
  )
}

export default Header