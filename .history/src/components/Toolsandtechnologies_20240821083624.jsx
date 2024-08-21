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

function Toolsandtechnologies({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
      <div className="max-w-screen-xl mx-auto py-8 px-8 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className={`text-4xl tracking-tight font-bold ${isDarkMode ? 'text-white' : 'text-primary-800'}`}>
            Ski<span className='text-[#570df8] text-3xl'>lls.</span>
          </h2>
          <p className='text-md font-bold mt-2 text-slate-400'>Tools and Technologies</p>
        </div>

        <div className='flex flex-wrap justify-center gap-2'>
          <div className={`flex flex-col items-center ${isDarkMode ? 'bg-gray-700' : 'bg-slate-200'} p-2 rounded-lg mb-4 min-w-[70px]`}>
            <img className='mx-auto rounded-lg' src={html} alt='HTML' />
            <p className='text-sm text-center font-semibold'>HTML</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={Css} alt='CSS' />
            <p className='text-sm text-center font-semibold'>CSS</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={js} alt='JavaScript' />
            <p className='text-sm text-center font-semibold'>JavaScript</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={react} alt='React Js' />
            <p className='text-sm text-center font-semibold'>React Js</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={java} alt='Java' />
            <p className='text-sm text-center font-semibold'>Java</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={mysql} alt='MySQL' />
            <p className='text-sm text-center font-semibold'>MySQL</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={Bootstrap} alt='Bootstrap' />
            <p className='text-sm text-center font-semibold'>Bootstrap</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={Git} alt='Git' />
            <p className='text-sm text-center font-semibold'>Git</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg' src={github} alt='GitHub' />
            <p className='text-sm text-center font-semibold'>GitHub</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={cpanel} alt='Cpanel' />
            <p className='text-sm text-center font-semibold'>Cpanel </p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={material} alt='Material UI' />
            <p className='text-sm text-center font-semibold'>Material UI</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={npm} alt='NPM' />
            <p className='text-sm text-center font-semibold'>NPM</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={tailwindcss} alt='Tailwind CSS' />
            <p className='text-sm text-center font-semibold'>Tailwind CSS</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={vscode} alt='VS Code' />
            <p className='text-sm text-center font-semibold'>VS Code</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={figma} alt='Figma' />
            <p className='text-sm text-center font-semibold'>Figma</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={Chrome} alt='Chrome' />
            <p className='text-sm text-center font-semibold'>Chrome</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg mt-2 w-[48px]' src={php} alt='PHP' />
            <p className='text-sm text-center font-semibold mt-2'>PHP</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={phpserver} alt='PHP Server' />
            <p className='text-sm text-center font-semibold'>PHP Server</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={phyton} alt='Python' />
            <p className='text-sm text-center font-semibold'>Python</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={reactnative} alt='React Native' />
            <p className='text-sm text-center font-semibold'>React Native</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={intellij} alt='IntelliJ' />
            <p className='text-sm text-center font-semibold'>IntelliJ</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={pycharm} alt='PyCharm' />
            <p className='text-sm text-center font-semibold'>PyCharm</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={node} alt='Node.js' />
            <p className='text-sm text-center font-semibold'>Node.js</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={canva} alt='Canva' />
            <p className='text-sm text-center font-semibold'>Canva</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={xampp} alt='XAMPP' />
            <p className='text-sm text-center font-semibold'>XAMPP</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={gradle} alt='Gradle' />
            <p className='text-sm text-center font-semibold'>Gradle</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={cakephp} alt='CakePHP' />
            <p className='text-sm text-center font-semibold'>CakePHP</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={workbench} alt='MySQL Workbench' />
            <p className='text-sm text-center font-semibold'>MySQL Workbench</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={android} alt='Android Studio' />
            <p className='text-sm text-center font-semibold'>Android Studio</p>
          </div>

          <div className='flex flex-col items-center bg-slate-200 p-2 rounded-lg mb-4 min-w-[70px]'>
            <img className='mx-auto rounded-lg w-[48px]' src={visualstudio} alt='Visual Studio' />
            <p className='text-sm text-center font-semibold'>Visual Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolsandtechnologies;
