import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAddComp = () => {
    const nav = useNavigate();

    const [product, setproduct] = useState({
        pname: '',
        price: '',
        pcompany: '',
        pquan: ''
    });

    const inputhandle = (event) => {
        const { type, name, value } = event.target;
        setproduct({ ...product, [name]: value });
    }

    const addproduct = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8888/products`, product).then(() => {
            window.alert('product added successfully');
            nav('/maindashboard/productdash');
        }).catch((error) => {})


    }
    return (
        <div>
            <h2>this is a productaddcomp</h2>
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

export default ProductAddComp