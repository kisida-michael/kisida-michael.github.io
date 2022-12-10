import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from "framer-motion"
import icons from "./icons/icons";
import dash from "./img/projects/dashboard.png";
import pontem from "./img/projects/pontem.png";
import vis from "./img/projects/vis.png";
import todo from "./img/projects/ToDoApp.png";
import imageprocess from "./img/projects/imageprocess.png";
import Tilt from 'react-parallax-tilt';
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { ExternalLink } from 'react-external-link';
import { text, picture, header, button, card1_3, card4_6, sectionTitle, modalBG, modalCard, modalContent, modalImage } from "./motion";

export default function Projects() {


  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  if (isMobile) {

    card1_3.changeAnimation = { x: 0, opacity: 0, scale: 1, transition: { duration: .7, delay: .2 } }
    card4_6.changeAnimation = { x: 0, opacity: 0, scale: 1, transition: { duration: .7, delay: .2 } }
    sectionTitle.changeAnimation = { x: 0, opacity: 0, scale: 1, transition: { duration: .7, delay: .2 } }
  }
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 767) {
      setMobile(true);

      console.log(mobile + "is not mobile")
    }
    else if (window.innerWidth < 767) {
      setMobile(false)


      console.log(mobile + " is mobile")
    }




  }, []);
  const [showPontemModal, hidePontemModal] = useModal(() => (


    <ReactModal isOpen className="bg-transparent z-index-100">

      <div className=" w-screen h-screen  bg-transparent ">

        <div className="w-full h-full flex justify-center bg-gray-900/80 items-center">
          <motion.div className="md:w-[50%] w-[95%] min-h-[80%] max-h-fit  bg-gray-900  rounded  shadow-lg" variants={modalCard} initial="hidden" whileInView="visible">


            <button onClick={hidePontemModal} type="button" class=" absolute p-4 text-gray-400 hover:text-mid-blue  focus:outline-none focus:text-mid-blue">
              <span class="sr-only">Close menu</span>

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-10 mt-5 lg:p-10 h-[100%] flex flex-col  max-w-7xl m-auto items-center">
              <motion.div variants={modalContent} initial="hidden" whileInView="visible" className="p-5 w-full font-light text-white bg-gray-700 rounded-lg shadow-md ">
                <h1 className="min-w-[50%]"><span className=" text-3xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple box-decoration-clone ">Telehealth Company Website</span></h1>
                <h2 className="text-md uppercase font-bold text-gray-400">Project Website</h2>
                <p className="pt-4 pr-6"> A website for a fictional telehealth company that provides a platform for doctors to connect with patients virtually. The website was built using Boostrap. I designed the UI and layout of the website and was implemented using HTML, CSS, and Javascript.
                  This website was created for a competition and won first in the state of Florida and fifth in the nation.
                </p>

              </motion.div>
              <motion.div variants={modalImage} initial="hidden" whileInView="visible" className=" scale-[90%] mt-10 relative">


                <img className="  hidden md:block  rounded-lg shadow-lg " src={pontem} alt="Dashboard"></img>
                <div className=" rounded-lg absolute top-0 left-0 h-full w-full bg-gray-900 transition-opacity duration-1000 ease-out rounded opacity-0 hover:opacity-80">

                  {/* two buttons centered in div using flex */}
                  <div className="h-full flex justify-center items-center opacity-100 ">
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.github className="mx-auto h-1/4 w-1/4"></icons.github> */}
                      View Site
                    </ExternalLink>
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.eye className="mx-auto h-1/4 w-1/4"></icons.eye> */}
                      View Code
                    </ExternalLink>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </ReactModal>


  ));



  const [showVisModal, hideVisModal] = useModal(() => (


    <ReactModal isOpen className="bg-transparent z-index-100">

      <div className=" w-screen h-screen  bg-transparent ">

        <div className="w-full h-full flex justify-center bg-gray-900/80 items-center">
          <motion.div className="md:w-[50%] w-[95%] min-h-[80%] max-h-fit  bg-gray-900  rounded  shadow-lg" variants={modalCard} initial="hidden" whileInView="visible">


            <button onClick={hideVisModal} type="button" class=" absolute p-4 text-gray-400 hover:text-mid-blue  focus:outline-none focus:text-mid-blue">
              <span class="sr-only">Close menu</span>

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-10 mt-5 lg:p-10 h-[100%] flex flex-col  max-w-7xl m-auto items-center">
              <motion.div variants={modalContent} initial="hidden" whileInView="visible" className="p-5 w-full font-light text-white bg-gray-700 rounded-lg shadow-md ">
                <h1 className="min-w-[50%]"><span className=" text-3xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple box-decoration-clone ">Electric Car Website</span></h1>
                <h2 className="text-md uppercase font-bold text-gray-400">Project Website</h2>
                <p className="pt-4 pr-6"> A website for a fictional electric car company that provides a platform for customers to learn about the company and purchase cars. The website was built using Boostrap. I designed the UI and layout of the website and was implemented using HTML, CSS, and Javascript.
                  This website was created for a competition and won first in the state of Florida. This project introduced me to the world of web development and sparked my interest in the field.
                </p>

              </motion.div>
              <motion.div variants={modalImage} initial="hidden" whileInView="visible" className=" scale-[90%] mt-10 relative">


                <img className="  hidden md:block  rounded-lg shadow-lg " src={vis} alt="Dashboard"></img>
                <div className=" rounded-lg absolute top-0 left-0 h-full w-full bg-gray-900 transition-opacity duration-1000 ease-out rounded opacity-0 hover:opacity-80">

                  {/* two buttons centered in div using flex */}
                  <div className="h-full flex justify-center items-center opacity-100 ">
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.github className="mx-auto h-1/4 w-1/4"></icons.github> */}
                      View Site
                    </ExternalLink>
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.eye className="mx-auto h-1/4 w-1/4"></icons.eye> */}
                      View Code
                    </ExternalLink>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </ReactModal>


  ));

  const [showToDoModal, hideToDoModal] = useModal(() => (


    <ReactModal isOpen className="bg-transparent z-index-100">

      <div className=" w-screen h-screen  bg-transparent ">

        <div className="w-full h-full flex justify-center bg-gray-900/80 items-center">
          <motion.div className="md:w-[50%] w-[95%] min-h-[80%] max-h-fit  bg-gray-900  rounded  shadow-lg" variants={modalCard} initial="hidden" whileInView="visible">


            <button onClick={hideToDoModal} type="button" class=" absolute p-4 text-gray-400 hover:text-mid-blue  focus:outline-none focus:text-mid-blue">
              <span class="sr-only">Close menu</span>

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-10 mt-5 lg:p-10 h-[100%] flex flex-col  max-w-7xl m-auto items-center">
              <motion.div variants={modalContent} initial="hidden" whileInView="visible" className="p-5 w-full font-light text-white bg-gray-700 rounded-lg shadow-md ">
                <h1 className="min-w-[50%]"><span className=" text-3xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple box-decoration-clone ">To-Do App</span></h1>
                <h2 className="text-md uppercase font-bold text-gray-400">Class Project</h2>
                <p className="pt-4 pr-6"> An application created in Java that allows users to create, edit, and delete tasks. The application was created using Java and JavaFX. The application features a dashboard for the tasks, an incomplete tasks screen and completed tasks. The application was created for a class project and was my first project using Java.
                </p>

              </motion.div>
              <motion.div variants={modalImage} initial="hidden" whileInView="visible" className=" scale-[90%] mt-10 relative">


                <img className="  hidden md:block  rounded-lg shadow-lg " src={todo} alt="Dashboard"></img>
                <div className=" rounded-lg absolute top-0 left-0 h-full w-full bg-gray-900 transition-opacity duration-1000 ease-out rounded opacity-0 hover:opacity-80">

                  {/* two buttons centered in div using flex */}
                  <div className="h-full flex justify-center items-center opacity-100 ">
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.github className="mx-auto h-1/4 w-1/4"></icons.github> */}
                      View Site
                    </ExternalLink>
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.eye className="mx-auto h-1/4 w-1/4"></icons.eye> */}
                      View Code
                    </ExternalLink>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </ReactModal>


  ));


  const [showDashModal, hideDashModal] = useModal(() => (


    <ReactModal isOpen className="bg-transparent z-index-100">

      <div className=" w-screen h-screen  bg-transparent ">

        <div className="w-full h-full flex justify-center bg-gray-900/80 items-center">
          <motion.div className="md:w-[50%] w-[95%] min-h-[80%] max-h-fit  bg-gray-900  rounded  shadow-lg" variants={modalCard} initial="hidden" whileInView="visible">


            <button onClick={hideDashModal} type="button" class=" absolute p-4 text-gray-400 hover:text-mid-blue  focus:outline-none focus:text-mid-blue">
              <span class="sr-only">Close menu</span>

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-10 mt-5 lg:p-10 h-[100%] flex flex-col  max-w-7xl m-auto items-center">
              <motion.div variants={modalContent} initial="hidden" whileInView="visible" className="p-5 w-full font-light text-white bg-gray-700 rounded-lg shadow-md ">
                <h1 className="min-w-[50%]"><span className=" text-3xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">Company Dashboard</span></h1>
                <h2 className="text-md uppercase font-bold text-gray-400">xByte Technologies</h2>
                <p className="pt-4 pr-6"> Created a dashboard for a xByte Technologies that displays order information, sales, and other data. The dashboard is built using React and uses a variety of tables and KPIs to display information. The dashboard is also responsive and can be viewed on mobile devices.
                  Created a backend using Node.js and Express to handle the data from oData sources. and send it to the frontend. The backend also handles authentication and authorization.
                </p>

              </motion.div>
              <motion.div variants={modalImage} initial="hidden" whileInView="visible" className=" scale-[90%] mt-10 relative">


                <img className="  hidden md:block  rounded-lg shadow-lg " src={dash} alt="Dashboard"></img>
                <div className=" rounded-lg absolute top-0 left-0 h-full w-full bg-gray-900 transition-opacity duration-1000 ease-out rounded opacity-0 hover:opacity-80">

                  {/* two buttons centered in div using flex */}
                  <div className="h-full flex justify-center items-center opacity-100 ">
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.github className="mx-auto h-1/4 w-1/4"></icons.github> */}
                      word
                    </ExternalLink>
                    <ExternalLink className="mx-2 text-white w-auto" href="https://github.com">
                      {/* <icons.eye className="mx-auto h-1/4 w-1/4"></icons.eye> */}
                      words
                    </ExternalLink>

                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>

    </ReactModal>


  ));

  const [showModal, hideModal] = useModal(() => (

    <ReactModal isOpen className="bg-transparent z-index-100">

      <div className=" w-screen h-screen  bg-transparent ">

        <div className="w-full h-full flex justify-center bg-gray-900/80 items-center">
          <motion.div className="md:w-[50%] w-[95%] min-h-[80%] max-h-fit  bg-gray-900  rounded  shadow-lg" variants={modalCard} initial="hidden" whileInView="visible">


            <button onClick={hideModal} type="button" class=" absolute p-4 text-gray-400 hover:text-gray-500  focus:outline-none focus:text-mid-blue">
              <span class="sr-only">Close menu</span>

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-10 mt-5 lg:p-10 h-[100%] flex flex-col  max-w-7xl m-auto items-center">
              <motion.div variants={sectionTitle} initial="hidden" whileInView="visible" className="p-5 w-full font-light text-white bg-gray-700 rounded shadow-md ">
                <h1 className="min-w-[50%]"><span className=" text-3xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">Company Dashboard</span></h1>
                <h2 className="text-md uppercase font-bold text-gray-400">xByte Technologies</h2>
                <p className="pt-4 pr-6"> Created a dashboard for a xByte Technologies that displays order information, sales, and other data. The dashboard is built using React and uses a variety of tables and KPIs to display information. The dashboard is also responsive and can be viewed on mobile devices.
                  Also created a backend using Node.js and Express to handle the data and send it to the frontend. The data comes from oData sources. The backend also handles authentication and authorization.
                </p>

              </motion.div>
              <div className=" scale-[90%] mt-10 relative">


                <img className="  hidden md:block  rounded-lg shadow-lg " src={dash} alt="Dashboard"></img>
                <div className=" rounded-lg absolute top-0 left-0 h-full w-full bg-gray-900 transition-opacity duration-1000 ease-out rounded opacity-0 hover:opacity-50">

                </div>
              </div>



            </div>

          </motion.div>
        </div>
      </div>

    </ReactModal>
  ));


  return (
    <section className="pt-10 h-min font-inter pb-20 pb-16 bg-blue-gray" id="projects">

      <motion.h1 variants={sectionTitle} initial="hidden" whileInView="visible" className="text-center max-w-7xl mx-auto pl-10 pt-8 md:text-5xl text-2xl sm:mb-8 mb-4 text-gray-600">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-blue to-custom-purple">PROJECT</span><span className="font-light "> EXPERIENCE</span>
        {/* <p className=" mt-2 text-base uppercase">Click on each Project</p> */}
      </motion.h1>
      <div
        className=" max-w-7xl mx-auto px-10 pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        <motion.div variants={card1_3} initial="hidden" whileInView="visible">
          <Tilt tiltEnable={mobile} className="flex flex-row min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5} >
            <div onClick={showDashModal} className="flex justify-end  hover:cursor-pointer">

              <div className="flex flex-col justify-between">
                <img className="w-full" src={dash} alt="Dashboard" />
                <div className="px-6 sm:px-7 lg:px-7 py-4">
                  <div className="font-bold text-l mb-2 uppercase text-mid-blue"> Company Order Dashboard</div>
                  <p className=" text-gray-700 text-sm hidden sm:block">
                    Created a dashboard for a xByte Technologies that displays order information, sales, and other data. The dashboard is built using React and uses a variety of tables and KPIs to display information.

                  </p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">React</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Node.JS</span>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>


        <motion.div variants={card1_3} initial="hidden" whileInView="visible">

          <Tilt tiltEnable={mobile} className="flex flex-row min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div onClick={showPontemModal} className=" flex justify-end hover:cursor-pointer">


              <div className="flex flex-col justify-between">
                <img className="w-full" src={pontem} alt="Pontem" />
                <div className="px-6 sm:px-7 lg:px-7 py-4">

                  <div className="font-bold text-l mb-2 uppercase text-mid-blue">Telehealth Company Website</div>
                  <p className="text-gray-700 text-sm hidden sm:block">
                    A website for a fictional telehealth company that provides a platform for doctors to connect with patients virtually.
                  </p>
                </div>
                <div className="  px-6  pb-2">
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">UI</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Design</span>
                </div>
              </div>

            </div>
          </Tilt>
        </motion.div>

        <motion.div variants={card1_3} initial="hidden" whileInView="visible">

          <Tilt tiltEnable={mobile} className="flex flex-row min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div onClick={showPontemModal} className=" flex justify-end hover:cursor-pointer">


              <div className="flex flex-col justify-between">
                <img className="w-full" src={imageprocess} alt="Pontem" />
                <div className="px-6 sm:px-7 lg:px-7 py-4">

                  <div className="font-bold text-l mb-2 uppercase text-mid-blue">Reporting</div>
                  <p className="text-gray-700 text-sm hidden sm:block">
                    A website for a fictional telehealth company that provides a platform for doctors to connect with patients virtually.
                  </p>
                </div>
                <div className="  px-6  pb-2">
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">SQL</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Report Design</span>
                </div>
              </div>

            </div>
          </Tilt>
        </motion.div>


        <motion.div variants={card4_6} initial="hidden" whileInView="visible">

          <Tilt tiltEnable={mobile} className="flex flex-row min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div onClick={showVisModal} className=" flex justify-end hover:cursor-pointer">


              <div className="flex flex-col justify-between">
                <img className="w-full" src={vis} alt="VIS" />
                <div className="px-6 sm:px-7 lg:px-7 py-4">

                  <div className="font-bold text-l mb-2 uppercase text-mid-blue">Electric Car Website</div>
                  <p className="text-gray-700 text-sm hidden sm:block">
                  A website for a fictional electric car company that provides a platform for customers to learn about the company and purchase cars.
                  </p>
                </div>
                <div className="  px-6  pb-2">
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Design</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">HTML</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">CSS</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">JS</span>

                </div>
              </div>

            </div>
          </Tilt>
        </motion.div>


        
        <motion.div variants={card4_6} initial="hidden" whileInView="visible">

          <Tilt tiltEnable={mobile} className="flex flex-row min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
            tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div onClick={showToDoModal} className=" flex justify-end hover:cursor-pointer">


              <div className="flex flex-col justify-between">
                <img className="w-full" src={todo} alt="To Do App" />
                <div className="px-6 sm:px-7 lg:px-7 py-4">

                  <div className="font-bold text-l mb-2 uppercase text-mid-blue">To Do App</div>
                  <p className="text-gray-700 text-sm hidden sm:block">
                  An application created in Java that allows users to create, edit, and delete tasks. The app was created using Java and JavaFX.
                  </p>
                </div>
                <div className="  px-6  pb-2">
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Java</span>
                  <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">CSS</span>
                 

                </div>
              </div>

            </div>
          </Tilt>
        </motion.div>

        <motion.div variants={card4_6} initial="hidden" whileInView="visible">

<Tilt tiltEnable={mobile} className="flex flex-row min-h-full bg-gray-50 mx-auto max-w-sm rounded overflow-hidden shadow-lg" glareEnable={true} glareMaxOpacity={0.4} glareColor="#8E87E9" glarePosition="all"
  tiltMaxAngleX={5} tiltMaxAngleY={5}>
  <div onClick={showPontemModal} className=" flex justify-end hover:cursor-pointer">


    <div className="flex flex-col justify-between">
      <img className="w-full" src={imageprocess} alt="To Do App" />
      <div className="px-6 sm:px-7 lg:px-7 py-4">

        <div className="font-bold text-l mb-2 uppercase text-mid-blue">Image Processing App</div>
        <p className="text-gray-700 text-sm hidden sm:block">
          A website for a fictional telehealth company that provides a platform for doctors to connect with patients virtually.
        </p>
      </div>
      <div className="  px-6  pb-2">
        <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Python</span>
        <span className="inline-block bg-gradient-to-r from-custom-blue to-custom-purple rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase">Image-Recognition</span>
       

      </div>
    </div>

  </div>
</Tilt>
</motion.div>





      </div>

    </section>
  );
}

