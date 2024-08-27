import React, { useState } from 'react';
import { CONTACT, PHONE_NUMBER, SECRET } from '../constants';
import { motion } from "framer-motion";
import axios from 'axios';
import { FaGithub, FaLinkedin,FaEnvelope  } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    const phone = PHONE_NUMBER; // Replace with your phone number
    const token = SECRET; // Replace with your UltraMsg API token

    const url = `https://api.ultramsg.com/instance85545/messages/chat`;
    
    const data = {
      to: phone,
      body: `Name: ${name}\nPhone: ${number}\nMessage: ${message}`,
      token: token,
    };

    try {
      const res = await axios.post(url, data);
      if (res.data.status === 'sent') {
        setResponse('Message sent successfully!');
      } else {
        setResponse('Message sent successfully!');
      }
    } catch (error) {
      setResponse('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-20' id='contact'>
      <motion.h1
        whileInView={{opacity: 1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'
      >
        Get In Touch
      </motion.h1>

      <div className='text-center tracking-tighter'>
        <motion.p 
          whileInView={{opacity: 1,x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1}}
          className='my-4'
        >
          {CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{opacity: 1,x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}}
          className='my-4'
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Flexbox for aligning icons and email on the same line */}
        <div className='flex justify-center items-center space-x-4 mt-4'>
          <a href="https://github.com/nobytechy/" target="_blank" className='hover:text-purple-500 text-blue-400'>
            <FaGithub className="text-2xl"/>
          </a>
          <a href="https://www.linkedin.com/in/nobytechy/" target="_blank" className='hover:text-purple-500 text-blue-400'>
            <FaLinkedin className="text-2xl"/>
          </a>
          <a href={`mailto:${CONTACT.email}`} className='hover:text-purple-500 text-blue-400'>
          <FaEnvelope className='text-2xl'/>
          </a>  
        </div>
      </div>

      <div className='max-w-lg mx-auto my-10 p-6 bg-neutral-900 rounded-lg'>
        <h2 className='text-center text-2xl mb-6'>Contact Me</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='mb-2 text-sm' htmlFor='name'>Your Name</label>
          <input 
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mb-4 p-2 rounded bg-neutral-800 text-white'
            required
          />

          <label className='mb-2 text-sm' htmlFor='number'>Your Whatsapp Number</label>
          <input 
            id='number'
            type='text'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='mb-4 p-2 rounded bg-neutral-800 text-white'
            required
          />
          
          <label className='mb-2 text-sm' htmlFor='message'>Your Message</label>
          <textarea 
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mb-4 p-2 rounded bg-neutral-800 text-white'
            required
          />
          
          <button 
            type='submit' 
            className='p-2 bg-green-500 rounded text-white hover:bg-green-600 transition-colors'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Whatsapp Message'}
          </button>

          {response && (
            <p className='mt-4 text-center'>
              {response}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact;
