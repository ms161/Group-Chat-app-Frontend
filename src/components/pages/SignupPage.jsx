import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import imgg from './7330635.jpg'
function SignUpPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pNumber: '',
        password: '',
    });
    const [err, setErr] = useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignupPage = async (e) => {
        try {

            e.preventDefault()
            const res = await axios.post('http://localhost:5000/user/sign-up', formData)
        }
        catch (err) {
            // console.log(err.response.data.message)
            setErr(err?.response?.data?.message)
            setTimeout(() => {
                setErr(null)
            }, 5000);
        }

    }

    useEffect(() => {

    }, [])
    console.log(formData)

    return (
        <>
        <div className='flex'>

        
           <img className='h-screen' src={imgg} alt="" />

            <form onSubmit={handleSignupPage} className="flex flex-col m-auto justify-center gap-y-9 mt-10 " action="">
                <input
                    className="border-b border-black w-96 m-auto p-3"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className="border-b border-black w-96 p-3 m-auto"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="border-b border-black w-96 p-3 m-auto"
                    type="number"
                    placeholder="Phone Number"
                    name="pNumber"
                    value={formData.pNumber}
                    onChange={handleChange}
                />
                <input
                    className="border-b border-black w-96 p-3 m-auto"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                
                {err && <p className='text-center bg-red-600 w-96 m-auto text-white p-2 rounded-md'>{err}</p>}
                <button className='text-white  bg-gradient-to-br from-blue-800 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' type='submit'>Sign Up</button>
       
            <div className='text-center mt-5'>

                <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
                    <Link to='/login'>
                     Already have an Account?  Login
                    </Link>
                </button>
            </div>
            </form>
            </div>
        </>

    );
}

export default SignUpPage;
