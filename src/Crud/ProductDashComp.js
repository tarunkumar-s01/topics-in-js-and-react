import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link, Outlet } from 'react-router-dom'

const ProductDashComp = () => {
    const [product,setproduct] = useState([]);

    useEffect(() =>{
        fetchdata();
        
    },[])

    const fetchdata =()=>{
        axios.get("http://localhost:8888/products").then((res)=>{
            console.log(res.data);
            setproduct(res.data);
        }).catch((error)=>{});
        
    }

    const deleteproduct = (id) =>{
        console.log(id);
        if(window.confirm(`are you sure want to delete : ${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(() =>{
            
                window.alert("product deleted");
                fetchdata();
            }).catch((error)=>{})
        }

    }

    // const values = () =>{
    //     window.alert('hello');
    // }

  return (
    <div>
        <Outlet></Outlet>
        <Link to='/maindashboard/productadd' className='btn btn-primary'>Add</Link>
        <table border="1" className=' table table-hover table-bordered table-stripped text-center' >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Company</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((employee,index) => (
                            <tr key={employee.id}>
                                <td>{index+1}</td>
                                <td>{employee.pname}</td>
                                <td>{employee.price}</td>
                                <td>{employee.pcompany}</td>
                                <td>{employee.pquan}</td>
                                <td>
                                <Link to={`/maindashboard/productedit/${employee.id}`}> <EditIcon></EditIcon> </Link>
                                    
                                    <button type='button' onClick={()=>deleteproduct(employee.id)}> <DeleteIcon></DeleteIcon> </button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  )
}

export default ProductDashComp