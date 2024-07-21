// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import abouts from '../assets/assets/abouts.svg';
import { FaChevronCircleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400, 
      easing: 'ease-in-sine',
    });
  }, [])

  return (
    <section id='about'>
       <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-row justify-center items-center'>
        <h5 className='text-black font-semibold lg:text-[30px] text-[20px] lg:leading-[35px] font-ubuntu text-center'>Create your best <span className='text-limegreen'>resume</span> yet and <br /> download in minutes</h5>
      </div>
      <div className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 pb-20 pt-20'>
         <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start gap-4 w-[70%]'>
        <h1 className='text-black font-semibold lg:text-[50px] text-[28px] lg:leading-[60px] font-ubuntu'>Resume tailoring based on the job you’re applying for</h1>
        <p className='font-ubuntu text-[18px] text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis suscipit rem? Assumenda, excepturi. Culpa debitis, nesciunt necessitatibus voluptates.</p>
        
        <div className='flex flex-col justify-center items-start gap-4 mt-6'>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div>
        <img data-aos="zoom-in" data-aos-delay="200"  src={abouts} alt='' className='lg:w-[1000px] lg:h-[550px] w-[550px] h-[550px] m-0 p-0' />
      </div>
      </div>      
     
    </section>
  )
}

export default About