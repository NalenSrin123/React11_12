

const List = ({products,deleteProduct}) => {
  return (
    <>
        <table className="table text-center align-middle" style={{ tableLayout:"fixed"}}>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((val,index)=>{
                    return (
                        <tr key={index}>
                            <td>{val.code}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.qty}</td>
                            <td><img width={80} src={val.imageUrl} alt="" /></td>
                            <td>
                                <button className="btn btn-warning me-2">Edit</button>
                                <button className="btn btn-danger" onClick={()=>deleteProduct(val.code)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
  )
}

export default List