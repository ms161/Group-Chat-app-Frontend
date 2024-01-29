import React, { useEffect, useState } from 'react';

function SignUpPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pNumber:'',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
   

    return (
        <>
            

            <form  className="flex flex-col m-auto justify-center gap-y-9 mt-10 " action="">
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
                    type="email"
                    placeholder="Phone Number"
                    name="number"
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
             
                <button className='bg-green-500 w-20 m-auto rounded-md p-3 text-white' type='submit'>Sign Up</button>
            </form>
        </>
    );
}

export default SignUpPage;
