

const List = () => {
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
                <tr>
                    <td>1</td>
                    <td>Coca</td>
                    <td>2000</td>
                    <td>12</td>
                    <td><img width={80} src="https://cdn.s-liquor.com.kh/sliquors3/wp-content/uploads/2020/07/1681925010.jpg?strip=all&lossy=1&webp=85&avif=80&ssl=1" alt="" /></td>
                    <td>
                        <button className="btn btn-warning me-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default List