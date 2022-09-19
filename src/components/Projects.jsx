import React from "react";
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from "framer-motion"

import dash from "./img/projects/dashboard.png";
import pontem from "./img/projects/pontem.png";
import vis from "./img/projects/vis.png";
import todo from "./img/projects/ToDoApp.png";
import imageprocess from "./img/projects/imageprocess.png";
import Tilt from 'react-parallax-tilt';
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { text, picture, header, button, card1_3, card4_6, sectionTitle } from "./motion";

export default function Projects() {

  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen  className="bg-transparent">
      <div className=" w-screen h-screen  bg-transparent ">
      
       <div className="w-full h-full p-10 flex justify-center items-center">
        <div className="min-w-[80%] min-h-[80%] bg-gray-900 rounded">
        <p className="text-white">Modal content</p>
      <button onClick={hideModal}>Hide modal</button>
        </div>
     
     </div>
      </div>
    </ReactModal>
  ));


  return (
    <section className="pt-10 h-min font-inter pb-20 pb-16 bg-blue-gray" id="projects">

      <motion.h1 variants={sectionTitle} initial="hidden" whileInView="visible" className="text-center max-w-7xl mx-auto pl-10 pt-8 md:text-5xl text-2xl sm:mb-8 mb-4 text-gray-900">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">PROJECT</span><span className="font-light text-gray-900"> EXPERIENCE</span>
      </motion.h1>
      <div
        className=" max-w-7xl mx-auto px-10 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        <motion.div variants={card1_3} initial="hidden" whileInView="visible">
          <Tilt  className=" min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5} >
            <div onClick={showModal} className="">
              <img className="w-full" src={dash} alt="Dashboard" />
              <div className="px-6 sm:px-7 lg:px-7 py-4">
                <div className="font-bold text-l mb-2 uppercase text-mid-blue">Company Order Dashboard</div>
                <p className=" text-gray-700 text-sm hidden sm:block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                
                </p>
              </div>
              <div className="px-6  pb-2">
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">React</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Node.JS</span>
              </div>
            </div>
          </Tilt>
        </motion.div>
        <motion.div variants={card1_3} initial="hidden" whileInView="visible">

          <Tilt className="min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="">

              <img className="w-full" src={pontem} alt="Pontem" />
              <div className="px-6 py-4">
                <div className="font-bold text-l mb-2 uppercase text-mid-blue">Telehealth Company Website</div>
                <p className="text-gray-700 text-sm hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6  pb-2">
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">UI</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Design</span>
              </div>

            </div>
          </Tilt>
        </motion.div>
        <motion.div variants={card1_3} initial="hidden" whileInView="visible">
          <Tilt className="min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="">

              <img className="w-full" src={imageprocess} alt="Reporting Process" />
              <div className="px-6 py-4">
                <div className="font-bold text-l mb-2 uppercase text-mid-blue">Reporting</div>
                <p className="text-gray-700 text-sm hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6  pb-2">
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">SQL</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Report Design</span>

              </div>

            </div>
          </Tilt>
        </motion.div>
        <motion.div variants={card4_6} initial="hidden" whileInView="visible">
          <Tilt className="min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="">

              <img className="w-full" src={vis} alt="Vis" />
              <div className="px-6 py-4">
                <div className="font-bold text-l mb-2 uppercase text-mid-blue">Electric Car Site</div>
                <p className="text-gray-700 text-sm hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6  pb-2">
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Design</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">HTML</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">CSS</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">JS</span>

              </div>

            </div>
          </Tilt>
        </motion.div>
        <motion.div variants={card4_6} initial="hidden" whileInView="visible">
          <Tilt className="min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="">
              <img className="w-full" src={todo} alt="To Do" />
              <div className="px-6 sm:px-7 lg:px-7 py-4">
                <div className="font-bold text-l mb-2 uppercase text-mid-blue">To-Do List App</div>
                <p className="text-gray-700 text-sm hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6  pb-2">
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Java</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">CSS</span>
              </div>
            </div>
          </Tilt>
        </motion.div>
        <motion.div variants={card4_6} initial="hidden" whileInView="visible">
          <Tilt className="min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="">

              <img className="w-full" src={imageprocess} alt="Image Process" />
              <div className="px-6 py-4">
                <div className="font-bold text-l mb-2 uppercase text-mid-blue">Image Processing App</div>
                <p className="text-gray-700 text-sm hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6  pb-2">
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Python</span>
                <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Image-Recognition</span>
              </div>

            </div>
          </Tilt>
        </motion.div>




      </div>

    </section>
  );
}

