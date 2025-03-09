import React from 'react';
import ToolCard from './ToolCard';
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

function Toolsandtechnologies({ isDarkMode }) {
  const tools = [
    { src: html, alt: 'HTML', name: 'HTML' },
    { src: Css, alt: 'CSS', name: 'CSS' },
    { src: js, alt: 'JavaScript', name: 'JavaScript' },
    { src: react, alt: 'React Js', name: 'React Js' },
    { src: java, alt: 'Java', name: 'Java' },
    { src: mysql, alt: 'MySQL', name: 'MySQL' },
    { src: Bootstrap, alt: 'Bootstrap', name: 'Bootstrap' },
    { src: Git, alt: 'Git', name: 'Git' },
    { src: github, alt: 'GitHub', name: 'GitHub' },
    { src: cpanel, alt: 'Cpanel', name: 'Cpanel' },
    { src: material, alt: 'Material UI', name: 'Material UI' },
    { src: npm, alt: 'NPM', name: 'NPM' },
    { src: tailwindcss, alt: 'Tailwind CSS', name: 'Tailwind CSS' },
    { src: vscode, alt: 'VS Code', name: 'VS Code' },
    { src: figma, alt: 'Figma', name: 'Figma' },
    { src: Chrome, alt: 'Chrome', name: 'Chrome' },
    { src: php, alt: 'PHP', name: 'PHP' },
    { src: phpserver, alt: 'PHP Server', name: 'PHP Server' },
    { src: phyton, alt: 'Python', name: 'Python' },
    { src: reactnative, alt: 'React Native', name: 'React Native' },
    { src: intellij, alt: 'IntelliJ', name: 'IntelliJ' },
    { src: pycharm, alt: 'PyCharm', name: 'PyCharm' },
    { src: node, alt: 'Node.js', name: 'Node.js' },
    { src: canva, alt: 'Canva', name: 'Canva' },
    { src: xampp, alt: 'XAMPP', name: 'XAMPP' },
    { src: gradle, alt: 'Gradle', name: 'Gradle' },
    { src: cakephp, alt: 'CakePHP', name: 'CakePHP' },
    { src: workbench, alt: 'MySQL Workbench', name: 'Workbench' },
    { src: android, alt: 'Android Studio', name: 'Android Studio' },
    { src: visualstudio, alt: 'Visual Studio', name: 'Visual Studio' },
    { src: framer, alt: 'Framer Motion', name: 'Framer Motion' },
    { src: Expressjs, alt: 'ExpressJs', name: 'ExpressJs' },
  ];

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
          className='flex flex-wrap justify-center gap-2'>
          {tools.map((tool, index) => (
            <ToolCard key={index} isDarkMode={isDarkMode} src={tool.src} alt={tool.alt} name={tool.name} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Toolsandtechnologies;