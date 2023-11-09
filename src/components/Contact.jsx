import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  // formRef is a reference to the form element
  const formRef = useRef()

  // form is an object that contains the form data
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // loading is a boolean that indicates whether the form is being submitted
  const [loading, setLoading] = useState(false);

  // handleChange is a function that updates the form data
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  // handleSubmit is a function that submits the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs.send() sends an email using the emailjs service
    emailjs.send(
      'kg-portfolio',
      'template_kdg',
      {
        from_name: form.name,
        to_name: 'Kevin',
        from_email: form.email,
        to_email: 'kevin.gnanih@gmail.com',
        message: form.message,
      },
      'Zwi4NAAEeFcFsUpET'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');


      // Reset the form
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Ahh, something went wrong. Please try again.')

    });
  };

  return (
    <div className='xl:mt--12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6
              text-white rounded-lg outlined-none
              placeholder:text-secondary
              border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6
              text-white rounded-lg outlined-none
              placeholder:text-secondary
              border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7' 
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6
              text-white rounded-lg outlined-none
              placeholder:text-secondary
              border-none font-medium'/>
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8
            outline-none w-fit text-white
            font-bold shadow-md shadow-primary
            rounded-xl'>Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px]
        h-[350px]'>
          <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');