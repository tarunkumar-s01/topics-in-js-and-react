import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEditComp = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [product, setproduct] = useState({
        id: '',
        pname: '',
        price: '',
        pcompany: '',
        pquan: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8888/products/${id}`).then((res) => {
            console.log(res.data);
            setproduct(res.data);
        }).catch((error) => { })
    }, []);

    const inputhandle = (event) => {
        const { type, name, value } = event.target;
        setproduct({ ...product, [name]: value });
    }

    const addproduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/products/${id}`, product).then(() => {
            window.alert('product added successfully');
            nav('/maindashboard/productdash');
        }).catch((error) => { })


    }

    return (
        <div>ProductEditComp
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addproduct}>
                        <label className='form-label'>enter your product name : </label>
                        <input type='text' name='pname' onChange={inputhandle} value={product.pname} className='form-control' />

                        <label className='form-label'>enter your product price : </label>
                        <input type='text' name='price' onChange={inputhandle} value={product.price} className='form-control' />

                        <label className='form-label'>enter your product company : </label>
                        <input type='text' name='pcompany' onChange={inputhandle} value={product.pcompany} className='form-control' />

                        <label className='form-label'>enter your product quantity : </label>
                        <input type='text' name='pquan' onChange={inputhandle} value={product.pquan} className='form-control' /><br />

                        <button type='submit' className='btn btn-primary form-control'>submit</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default ProductEditComp