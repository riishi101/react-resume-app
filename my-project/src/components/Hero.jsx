// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import heroresume from '../assets/assets/heroresume.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="hero" className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-18 pt-2 pb-10 sm:px-20">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" data-aos-delay="400" className="text-black font-semibold lg:text-[60px] text-[40px] lg:leading-[70px] leading-[50px] font-ubuntu">
          Create your resume in minutes.
        </h1>
        <p data-aos="zoom-in" data-aos-delay="400" className="font-ubuntu text-[18px] text-slate-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Quibusdam facere harum non quis suscipit necessitatibus.<br />
           Harum sequi iure qui eum iusto odit, deserunt explicabo nulla quis.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay=""
          className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white"
        >
          Create Resume
        </button>
      </div>
      <div>
        <img data-aos="zoom-in" data-aos-delay="500" src={heroresume} alt="Hero Banner" className="lg:w-[700px] lg:h-[500px] w-[550px] h-[550px] m-0 p-0" />
      </div>
    </section>
  );
};

export default Hero;
