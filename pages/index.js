import { useState } from 'react'
import Image from "next/image"
import cat2 from "../public/images/Black_background.jpeg"
import cat23 from "../public/images/lll.jpg"
import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/mission.jpeg"
import b from "../public/images/1145359.webp"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/1552756305626.jpeg"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"
import f from "../public/images/formed.webp"
import g from "../public/images/alpha1.webp"
import h from "../public/images/confer.webp"
import i from "../public/images/enginer.webp"
import j from "../public/images/ethanol.webp"
import k from "../public/images/ki.webp"
import l from "../public/images/cal1.webp"
import m from "../public/images/cal2.webp"
import cal3 from "../public/images/cal3.webp"


export default function Home() {
  return (
    
    <div className="bg-black">
      <h1 className = "z-10 pt-48 text-white text-8xl flex flex-row justify-evenly items-center">
      PROJECT CAELUS
      </h1>
      
      <h1 className = "z-20 pt-10 text-white text-2xl flex flex-row justify-evenly items-center">
      The first high-school team to take a liquid-fueled rocket to space.      
      </h1>
      <Image className = "animate-pulse z-0 object-fill h-96 w-96"
      src={cat23}
      />

<div className = "flex flex-row">
    <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-24 pr-6 pb-12">
    <div className=" bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black rounded-xl shadow-md overflow-hidden ">
  <div className="md:flex">
    <div className="">
      <Image className=" object-cover md:h-full md:w-full" src={c} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The Mission Statement</a>
      <p className="mt-2 text-white">
      The mission at Project Caelus is to design, build, test, and 
      launch a bipropellant liquid-fueled rocket to the edge of space while also 
      creating opportunities that introduce young kids to the ever-growing aerospace industry and teaching the community about the importance 
      of STEM education in an increasingly technological world. Through our project, we hope to show young people that it’s possible to do 
      something that has never been done before and that there is no age threshold to exploring science and pushing technological boundaries.</p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-24 pb-12">
    <div className="bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black  rounded-xl shadow-md overflow-hidden ">
  <div className="md:flex">
    <div className="">
      <Image className=" object-cofillver md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">The First Project</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Callisto I</a>
      <p className="mt-2 text-white">
      The Callisto I launch vehicle will utilize an improved version of the Aphlex 1C engine, aptly named Aphlex 1D. The launch of Callisto I 
      will be the first-ever liquid-fueled rocket launch by a high school team and among the first of all amateur groups in the world. 
      The current target apogee for this inaugural rocket is 5,000 feet, and it will be a fundamental milestone in the quest for space.
</p>
</div>
  </div>
</div>
</div>
  </div>

  </div>

  <div className = " transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-24 pr-24 pb-24">
    <div className=" bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black rounded-xl shadow-md overflow-hidden ">
  <div className="md:flex">
    <div className="">
      <Image className=" object-cofillver md:h-full md:w-full" src={a} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Open Source</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Check out our Project!</a>
      <p className="mt-2 text-white">
      yay
</p>
</div>
  </div>
</div>
</div>
  </div>

<div className = "transition ease-in-out delay-150 pb-12 text-center">
<button class="bg-transparent text-6xl text-white hover:bg-slate-900 font-semibold  py-2 px-4 border border-slate-500  rounded">
  Timeline
</button>
</div>

<div className = "pl-24 pr-24">
<ol class="pl-6 relative border-l border-gray-800 dark:border-gray-700">                  
    <li class="mb-24 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Project Caelus Formed </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 26, 2018</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">The initial Project Caelus team was created after a long round of interviews. We started as a team full of passion and curiosity, and most importantly eager to take on challenges and learn a lot. We've come a long way, learning and growing an incredible amount since it all started, but we'll never forget where it all began.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={f} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-48 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Aphlex 1B - Initial Cold Flow </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 13th, 2020</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">After years of designs and numerous times back at the drawing board learning the ropes of liquid rocketry, Project Caelus ran its first-ever hardware test. The initial cold flow test verified initial designs for plumbing, flight software, and pressurization procedures for the ethanol propellant system. This test utilized water pressurized with nitrogen to serve as a proof-of-concept for methodology and development processes, as well as safety procedures and protocols.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={g} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-12 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">AIAA YPSE Conference 2020 </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 16, 2020</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">The Caelus team presented our design for the Aphlex 1B engine at the AIAA Young Professionals, Students, and Educators (YPSE) 2020 conference and took home the "Best High School Presentation" prize for our design paper titled: "Development of a Cost-Effective 1.5kN Liquid-Fueled Rocket Propulsion System"</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={h} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-6 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Aphlex 1C - Engine Redesign </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 13, 2021</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">With the team's growing experience and grasp of rocket science, we tackled an engine redesign to optimize our engine's performance with our hardware constraints. With this process, we increased our planned thrust from 1,500 to 2,500 Newtons and the Aphlex 1C engine has the potential to reach our target altitude of 5,000 feet with continued improvements.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={i} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-24 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Aphlex 1C - Ethanol Cold Flow</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May, 2021</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">The ethanol cold flow test will be another major milestone, as it will be the first time ethanol is introduced into the plumbing system. This test will run very similarly to the ethanol water cold flow test, however, it will use actual ethanol in place of water. This will once again entail stricter safety procedures and will bring us closer to a static engine fire.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={j} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-20 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Aphlex 1C - Static Engine Fire</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June, 2021</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">The culmination of all of our years of hard work up until this point - this static engine fire will be an amazing and historic achievement for Project Caelus. Ethanol and nitrous oxide will flow into the Aphlex 1C engine and ignite, producing a peak of 2,500 Newtons of thrust. A key aspect of this test is the data collected which will enable high-accuracy characterization of the engine's performance, and this will prove essential in springboarding on to the future.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={k} alt="">
        </Image>
        </div>
    </li>
    <li class=" ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Callisto I</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June, 2022</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">The Callisto I launch vehicle will utilize an improved version of the Aphlex 1C engine, aptly named Aphlex 1D. The launch of Callisto I will be the first-ever liquid-fueled rocket launch by a high school team and among the first of all amateur groups in the world. The current target apogee for this inaugural rocket is 5,000 feet, and it will be a fundamental milestone in the quest for space.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={l} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-12 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Callisto II</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Beyond 2022</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">Beyond Callisto I, based on collected data and research findings, the Project Caelus team will progress towards larger rockets producing more thrusts and potentially using different propellant combinations. Callisto II is currently planned as an intermediary launch vehicle between Callisto I, which will launch to 5,000 feet, and Callisto III, which will launch to space.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={m} alt="">
        </Image>
        </div>
    </li>
    <li class="mb-24 ml-6">            
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-600 dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">Callisto III</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Beyond 2022</time>
        <p class="mb-4 text-base font-normal text-white dark:text-white">The Callisto III rocket is the current final goal of our project and will reach the Karman line, the border between Earth and space, at 100km above sea level.</p>
      <div className="object-cover h-48 w-96 pb-24">
        <Image src={cal3} alt="">
        </Image>
        </div>
    </li>

</ol>
</div>

<div className = "bg-slate-900 flex flex-row flex-items-justify center">
  <div className=" pb-12 pl-12 pr-12 pt-12">
      <Image className=" object-cover md:h-full md:w-full" src={e} alt="">
    </Image>
    </div>
    <h1 className = "text-white text-2xl pl-8 pt-24">
      Home
    </h1>
    <h1 className = "text-white text-2xl pl-20 pt-24">
      Projects
    </h1>
    <h1 className = "text-white text-2xl pl-20 pt-24">
      About
    </h1>
    <h1 className = "text-white text-2xl pl-20 pt-24">
      Project Caelus 2022
    </h1>
    <h1 className = "text-white text-2xl pl-20 pt-24">
      Social Media
    </h1>
    </div>

  </div>
  
  )
}
