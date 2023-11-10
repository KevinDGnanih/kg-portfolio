import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// SercixeCard is a functional component that takes in the index, title and icon props
// This object contains index. title and icon props.
const ServiceCard = ({ index, title, icon }) => {

  // Tilt is a wrapper component that adds a 3D tilt effect to its children
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px]
      shadow-card'>
        <div
        options={{
          max: 45, // Maximun tilt angle.
          scale: 1, // 2d scaling factor.
          speed: 450 // Speed of the tilt effect.
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

// This is the About component
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variant={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        Motivated and detail-oriented Junior Full-Stack Developer with a strong desire to learn and grow.
        Seeking a Junior Full-Stack Developer position to leverage my skills in HTML, CSS, Python, Django and JavaScript
        while continuously learning and contributing to dynamic projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />))}
      </div>


    </>
  )
}

// This is where the About component is wrapped with the SectionWrapper component and exported
export default SectionWrapper (About, 'about');