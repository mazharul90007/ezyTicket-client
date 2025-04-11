import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
    };

    return (
        <div className='pt-20'>
            {/* Contact Info Section */}
            <div className='bg-[#004e39] text-white py-12 px-6 md:px-16'>
                <h2 className='text-3xl font-bold text-center mb-8'>Get In Touch</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                    <div>
                        <FaMapMarkerAlt className='text-4xl mx-auto mb-3' />
                        <h3 className='text-lg font-semibold'>Address</h3>
                        <p className='mt-3'>Wareless, Dhaka, Bangladesh</p>
                        <p>ZIP Code 12345</p>
                    </div>
                    <div>
                        <FaPhone className='text-4xl mx-auto mb-3' />
                        <h3 className='text-lg font-semibold'>Phone</h3>
                        <h3 className='font-semibold mt-3'>Main Office</h3>
                        <p className='text-sm'>+123 456 7890</p>
                        <h3 className='font-semibold'>Service 24/7</h3>
                        <p className='text-sm'>+987 654 3210</p>
                    </div>
                    <div>
                        <FaEnvelope className='text-4xl mx-auto mb-3' />
                        <h3 className='text-lg font-semibold'>Email</h3>
                        <h3 className='font-semibold mt-3'>Business Mail</h3>
                        <p className='text-sm'>ezy@gmail.com</p>
                        <h3 className='font-semibold'>Support Mail</h3>
                        <p className='text-sm'>ticket@gmail.com</p>
                    </div>
                </div>
            </div>
            
            {/* Contact Form Section */}
            <div  style={
                       {
                        backgroundImage: `url("/metalm.avif")`
                       }
                    } className='py-12 px-6 md:px-16 bg-[#f0f7f4]'>
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex items-center flex-col justify-center'>
                        <h2 className='text-3xl font-bold mb-4 text-[#004e39]'>Message Us</h2>
                        <p className='text-gray-700 text-lg'>Have questions or need assistance? Drop us a message, and our team will get back to you shortly.</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className=' backdrop-blur bg-white/1 shadow-xl p-8 rounded-lg border border-gray-200'>
                            <div className='mb-6'>
                                <label className='block text-[#004e39] font-medium text-lg'>Name</label>
                                <input 
                                    type='text' 
                                    name='name' 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className='w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-[#004e39] focus:outline-none' 
                                    required 
                                />
                            </div>
                            <div className='mb-6'>
                                <label className='block text-[#004e39] font-medium text-lg'>Email</label>
                                <input 
                                    type='email' 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className='w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-[#004e39] focus:outline-none' 
                                    required 
                                />
                            </div>
                            <div className='mb-6'>
                                <label className='block text-[#004e39] font-medium text-lg'>Message</label>
                                <textarea 
                                    name='message' 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    className='w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-[#004e39] focus:outline-none' 
                                    rows='4' 
                                    required
                                ></textarea>
                            </div>
                            <button type='submit' className='w-full bg-[#004e39] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#003825] transition'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;