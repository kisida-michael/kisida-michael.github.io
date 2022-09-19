
import React from "react";
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
// import { fadeIn} from 'react-animations';
import resume from "./media/Resume-MichaelKisida.pdf";
import headshot from "./img/headshot.jpg";
import { filterProps, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Particles from "./Particles";

import {text, picture, header, button}  from "./motion";
// const FadeInAnimation = keyframes`${fadeIn}`;
// const FadeInDiv = styled.div`
//   animation: 2s ${FadeInAnimation};
// `;




const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 2s ${PulseAnimation};
`;
export default function About() {
   

    return (
        <section className="font-inter bg-gray-900" id="about">
            {/* <section className="font-inter bg-about-campus bg-no-repeat bg-cover bg-blend-overlay bg-gray-800"  id="about"> */}

            <div className="w-full h-screen text-center">

                <div className="max-w-[1240px] w-full h-full mx-auto p-10 flex justify-center items-center">
                    {/* <Particles/> */}
                    <motion.div

                    >

                        <div>
                            {/* <div className="mb-6">
                                <motion.div
                                     initial="hidden"
                                     whileInView="visible"
                                     variants={picture}>

                                    <img className="w-1/4 lg:w-1/2 md:w-1/4 sm:w-1/4 rounded-full border-gradient-br-custom-gradient-gray-900 gradient-border-4" src={headshot} alt="headshot" />

                                </motion.div>
                            </div> */}
                            <motion.h1
                              whileInView="visible"
                               variants={header}
                               initial="hidden"
                                className=" md:text-7xl text-2xl sm:mb-6 mb-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple text-center">
                                Michael Kisida
                            </motion.h1>
                            <motion.p
                            whileInView="visible"
                            variants={text}
                            initial="hidden"
                            
                             className="text-center md:text-xl leading-relaxed text-white font-bold">
                                Information Technology<br></br>University of Central Florida
                            </motion.p>
                            <motion.p 
                             whileInView="visible"
                             variants={text}
                             initial="hidden"
                            className="text-center mb-5 md:text-xl leading-relaxed text-gray-200 font-regular ">
                                Graduation Date: December 2023
                            </motion.p>
                            <motion.div 
                            whileInView="visible"
                            variants={button}
                            initial="hidden"
                            className="text-center">
                                <a href={resume} target="_blank">
                                    <button type="button" className=" inline-flex items-center px-6 py-2 border-gradient-br-custom-gradient-gray-900 hover:bg-gradient-to-r from-custom-blue to-custom-purple  gradient-border-2 rounded-full text-gray-100 text-sm font-bold">
                                        Resume</button></a>

                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}