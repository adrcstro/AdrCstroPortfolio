import React from 'react';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import html from '../assets/html.png';
import Css from '../assets/css.png';
import java from '../assets/java.png';
import mysql from '../assets/mysql.png';
import Bootstrap from '../assets/bootstrap.png';
import Git from '../assets/git.png';
import github from '../assets/github.png';
import cpanel from '../assets/cpanel.png';
import material from '../assets/material.png';
import npm from '../assets/npm.png';
import tailwindcss from '../assets/tailwindcss.png';
import vscode from '../assets/vscode.png';
import figma from '../assets/figma.png';
import Chrome from '../assets/chrome.png';
import php from '../assets/LogosPhp.png';
import phpserver from '../assets/php-server.png';
import phyton from '../assets/python.png';
import reactnative from '../assets/reactnative.png';
import intellij from '../assets/intellij.png';
import pycharm from '../assets/pycharm.png';
import node from '../assets/node.png';
import canva from '../assets/canva.png';
import xampp from '../assets/xampp.png';
import gradle from '../assets/gradle.png';
import cakephp from '../assets/cakephp.png';
import workbench from '../assets/mysqlworkbench.png';
import android from '../assets/android.png';
import visualstudio from '../assets/visualstudio.png';
import framer from '../assets/framer.png';
import Expressjs from '../assets/Expressjs.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const tools = [
  { src: html, alt: 'HTML', label: 'HTML' },
  { src: Css, alt: 'CSS', label: 'CSS' },
  { src: js, alt: 'JavaScript', label: 'JavaScript' },
  { src: react, alt: 'React Js', label: 'React Js' },
  { src: java, alt: 'Java', label: 'Java' },
  { src: mysql, alt: 'MySQL', label: 'MySQL' },
  { src: Bootstrap, alt: 'Bootstrap', label: 'Bootstrap' },
  { src: Git, alt: 'Git', label: 'Git' },
  { src: github, alt: 'GitHub', label: 'GitHub' },
  { src: cpanel, alt: 'Cpanel', label: 'Cpanel' },
  { src: material, alt: 'Material UI', label: 'Material UI' },
  { src: npm, alt: 'NPM', label: 'NPM' },
  { src: tailwindcss, alt: 'Tailwind CSS', label: 'Tailwind CSS' },
  { src: vscode, alt: 'VS Code', label: 'VS Code' },
  { src: figma, alt: 'Figma', label: 'Figma' },
  { src: Chrome, alt: 'Chrome', label: 'Chrome' },
  { src: php, alt: 'PHP', label: 'PHP' },
  { src: phpserver, alt: 'PHP Server', label: 'PHP Server' },
  { src: phyton, alt: 'Python', label: 'Python' },
  { src: reactnative, alt: 'React Native', label: 'React Native' },
  { src: intellij, alt: 'IntelliJ', label: 'IntelliJ' },
  { src: pycharm, alt: 'PyCharm', label: 'PyCharm' },
  { src: node, alt: 'Node.js', label: 'Node.js' },
  { src: canva, alt: 'Canva', label: 'Canva' },
  { src: xampp, alt: 'XAMPP', label: 'XAMPP' },
  { src: gradle, alt: 'Gradle', label: 'Gradle' },
  { src: cakephp, alt: 'CakePHP', label: 'CakePHP' },
  { src: workbench, alt: 'Workbench', label: 'Workbench' },
  { src: android, alt: 'Android Studio', label: 'Android Studio' },
  { src: visualstudio, alt: 'Visual Studio', label: 'Visual Studio' },
  { src: framer, alt: 'Framer Motion', label: 'Framer Motion' },
  { src: Expressjs, alt: 'ExpressJs', label: 'ExpressJs' },
];

function Toolsandtechnologies({ isDarkMode }) {
  return (
    <div name="Technology" className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
      <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={`text-4xl tracking-tight font-bold font-montserrat ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
            Ski<span className='text-[#570df8] text-3xl'>lls.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='text-md font-bold mt-2 text-slate-400 font-montserrat'>Tools and Technologies</motion.p>
        </div>

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4'>
          {tools.map((tool, index) => (
            <div key={index} className={`flex flex-col items-center ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'} p-2 rounded-lg w-24 h-24 font-montserrat`}>
              <img className='mx-auto rounded-lg w-[48px]' src={tool.src} alt={tool.alt} />
              <p className={`text-sm text-center font-semibold ${isDarkMode ? 'text-white' : 'text-slate-600'} ${tool.label.length > 10 ? 'text-xs' : ''}`}>{tool.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Toolsandtechnologies;