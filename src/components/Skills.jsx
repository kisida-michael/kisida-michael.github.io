import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion"
import icons from "./icons/icons";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { text,  sectionTitle, skills, skillAnimation } from "./motion";
export default function Skills() {



  const skills = [
    { id: 1, name: "HTML", Icon: icons.html },
    { id: 2, name: "CSS", Icon: icons.css },
    { id: 3, name: "JavaScript", Icon: icons.javscript },
    { id: 5, name: "Node.js", Icon: icons.nodejs },
    { id: 6, name: "React", Icon: icons.react },
    { id: 8, name: "Python", Icon: icons.python },
    { id: 9, name: "C++", Icon: icons.cplusplus },
    { id: 10, name: "Java", Icon: icons.java},
    { id: 7, name: "SQL", Icon: icons.sql},


  ]

  const jobs = [
    { id:1, job: "xByte Technologies - Software Developer Intern", description: " Exercitation in fugiat est ut ad ea cupidatat ut incupidatat occaecat ut occaecat consequat est minim minim",
    date: "May 2022 - Present"},
    { id:2, job: "xByte Technologies - Software Developer Intern", description: " Exercitation in fugiat est ut ad ea cupidatat ut incupidatat occaecat ut occaecat consequat est minim minim",
    date: "May 2021 - August 2021"}
  ]
  console.log(skills)
  return (
    <section className="font-inter bg-white" id="skills">
     
      <div className="max-w-7xl mx-auto sm:pl-10 h-screen pt-10 ">
     
        <motion.h1 variants={sectionTitle} initial="hidden" whileInView="visible"
          className="pt-8 md:text-5xl text-2xl sm:mb-8 mb-2 text-gray-900 font-bold uppercase text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">Skills</span>
          <span className="font-light text-gray-900 "> and</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple"> Work</span>
          <span className="font-light text-gray-900 "> Experience</span>


        </motion.h1>
        <motion.h1 variants={text} initial="hidden" whileInView="visible"
          className="pt-8 md:text-3xl text-2xl sm:mb-8 mb-2 text-gray-900 font-bold uppercase text-center">
          <span className="text-transparent text-mid-blue">Progamming</span>
          <span className="font-light text-gray-900 "> Languages</span>
          


        </motion.h1>
        <div className="max-w-[75%] flex flex-wrap mx-auto justify-center mt-10  sm:pl-0">
          {skills.map(({ id, name, Icon }) => (
            
            <motion.div variants={skillAnimation} initial="hidden" whileInView="visible" className="" key={id}>
              
              <div className = "grid items-center w-36 h-36 rounded mx-2 md:mx-5 mb-2 bg-blue-gray shadow-md hover:scale-105 ease-linear duration-300 hover:shadow-custom-purple/30">
                
              <Icon className="mx-auto items-center scale-50 " />
             
              </div>
              <p className = "font-bold text-l mb-2 uppercase text-center text-gray-900">{name}</p>

            
            </motion.div>
           
          ))}
        </div>
        <motion.h1 variants={text} initial="hidden" whileInView="visible"
          className="pt-8 md:text-3xl text-2xl sm:mb-8 mb-2 text-gray-900 font-bold uppercase text-center">
          <span className="text-transparent text-mid-blue">Job</span>
          <span className="font-light text-gray-900 "> Experience</span>
          


        </motion.h1>
        <Accordion className=" border-2 border-rounded border-solid border-gray-900/10">
          {jobs.map(({ id, job, description, date }) => (
            <AccordionItem key={id}>
              <AccordionItemHeading className = "bg-blue-gray">
                <AccordionItemButton >
                  {job} {date}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm ">{description}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>


    </section>
  );
}