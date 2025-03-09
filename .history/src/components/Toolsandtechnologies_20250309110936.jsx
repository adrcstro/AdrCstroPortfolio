import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Import assets
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwindcss from '../assets/tailwindcss.png';
import bootstrap from '../assets/bootstrap.png';
import material from '../assets/material.png';
import framer from '../assets/framer.png';
import php from '../assets/LogosPhp.png';
import node from '../assets/node.png';
import mysql from '../assets/mysql.png';
import expressjs from '../assets/Expressjs.png';
import cakephp from '../assets/cakephp.png';
import workbench from '../assets/mysqlworkbench.png';
import twilio from '../assets/twilio.png';
import xampp from '../assets/xampp.png';
import gradle from '../assets/gradle.png';

const technologies = {
  frontend: [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: js },
    { name: 'React', img: react },
    { name: 'Tailwind CSS', img: tailwindcss },
    { name: 'Bootstrap', img: bootstrap },
    { name: 'Material UI', img: material },
    { name: 'Framer Motion', img: framer },
  ],
  backend: [
    { name: 'PHP', img: php },
    { name: 'Node.js', img: node },
    { name: 'Express.js', img: expressjs },
    { name: 'MySQL', img: mysql },
    { name: 'CakePHP', img: cakephp },
    { name: 'MySQL Workbench', img: workbench },
    { name: 'Twilio', img: twilio },
    { name: 'XAMPP', img: xampp },
    { name: 'Gradle', img: gradle },
  ],
};

function ToolsAndTechnologies({ isDarkMode }) {
  return (
    <div name="Technology" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full py-8`}> 
      <div className="max-w-screen-xl mx-auto px-8 lg:px-6">
        <div className="text-center mb-10">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className={`text-4xl font-bold font-montserrat ${isDarkMode ? 'text-white' : 'text-primary-800'}`}
          >
            Skills<span className='text-[#570df8] text-3xl'>.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='text-md font-bold mt-2 text-slate-400 font-montserrat'
          >
            Tools and Technologies
          </motion.p>
        </div>

        {Object.entries(technologies).map(([category, techList]) => (
          <div key={category} className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{category === 'frontend' ? 'Frontend Technologies' : 'Backend Technologies'}</h3>
            <motion.div 
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='flex flex-wrap justify-center gap-4'
            >
              {techList.map(({ name, img }) => (
                <div key={name} className={`flex flex-col items-center ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'} p-2 rounded-lg min-w-[70px]`}> 
                  <img className='mx-auto rounded-lg w-[48px]' src={img} alt={name} />
                  <p className={`text-sm text-center font-semibold ${isDarkMode ? 'text-white' : 'text-slate-600'}`}>{name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsAndTechnologies;
