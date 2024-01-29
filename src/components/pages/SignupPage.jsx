import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SignUpPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pNumber:'',
        password: '',
    });
    const [err,setErr]=useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignupPage=async(e)=>{
        try{

            e.preventDefault() 
            const res=await axios.post('http://localhost:5000/user/sign-up',formData)
        }
        catch(err){
            // console.log(err.response.data.message)
            setErr(err?.response?.data?.message)
            setTimeout(() => {
                setErr(null)
            }, 5000);
        }

    }

    useEffect(()=>{

    },[])
   console.log(formData)

    return (
        <>
            

            <form onSubmit={handleSignupPage}  className="flex flex-col m-auto justify-center gap-y-9 mt-10 " action="">
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
                <button className='bg-green-500 w-20 m-auto rounded-md p-3 text-white' type='submit'>Sign Up</button>
                
            </form>
        </>
    );
}

export default SignUpPage;
