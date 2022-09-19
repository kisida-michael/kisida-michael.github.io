
import React from "react";
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
// import { fadeIn} from 'react-animations';
import resume from "./media/Resume-MichaelKisida.pdf";
import { motion } from "framer-motion"
// const FadeInAnimation = keyframes`${fadeIn}`;
// const FadeInDiv = styled.div`
//   animation: 2s ${FadeInAnimation};
// `;

const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 2s ${PulseAnimation};
`;
export default function Aboutcopy() {


    return (
        <section className="h-screen font-inter" id="about">

            {/* <PulseDiv className="absolute bottom-20 left-20
    " >  
         <div className = " w-20 h-20 border-2 border-white opacity-20 rounded-full" ></div>
    </PulseDiv> */}
            <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }} >
                <div>
                    <h1 className="md:text-7xl sm:text-5xl mb-6 font-black text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple text-center">
                        Michael Kisida
                    </h1>
                    <p className=" md:text-xl leading-relaxed text-white font-bold text-center">
                        Information Technology<br></br>University of Central Florida
                    </p>
                    <p className="mb-5 md:text-xl leading-relaxed text-white font-regular text-center opacity-40">
                        Graduation Date: December 2023
                    </p>
                    <div className="text-center">
                    <a href={resume} target="_blank">
                        <button type="button" className="inline-flex items-center px-6 py-2 border-gradient-br-custom-gradient-gray-900 hover:bg-gradient-to-r from-custom-blue to-custom-purple  gradient-border-2 rounded-full text-gray-100 text-sm font-bold">
                        Resume</button></a>
                        
                    </div>
                    
                </div>
                </motion.div>
            </div>
        </section>
    );
}