import { useState } from 'react'
import Image from "next/image"
import cat2 from "../public/images/Black_background.jpeg"
import cat23 from "../public/images/Screen Shot 2022-04-23 at 10.03.41 AM.png"
import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/company-mission-statement-hero-@2x.jpeg"
import b from "../public/images/1145359.webp"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/1552756305626.jpeg"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"
import Head from 'next/head'
// import { Main } from 'next/document'
import cat1 from "../public/images/download-removebg-preview.png"
const myLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80/${src}?w=${width}&q=${quality || 75}`
  }
export default function projects() {
    return (
      <div>
        <Head>
        <title>
          About
        </title>
      </Head>
      <main className='h-screen'>
      <div className = "bg-gradient-to-r from-slate-900 to-black h-screen">

      <div className = "bg-gradient-to-r from-slate-900 to-black">
          <div className = "flex flex-items justify-center pt-12">
          <div className="underline decoration-red-400 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">Completed</div>
        </div>
        <div className = "pt-12 flex flex-row">
    <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-3">
    <div className=" rounded-3xl  bg-black">
  <div className="md:flex">
    <div className="rounded-3xl shadow-2xl">
      <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Ethanol Cold Flow</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Nitrous Cold Flow (Water)</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Nitrous Cold Flow</a>
      <p className="mt-2 text-black">

</p>
    </div>
  </div>
</div>
</div>
  </div>

  </div>



            
      </div>

      <div className = "bg-gradient-to-r from-slate-900 to-black">
          <div className = "flex flex-items justify-center pt-24">
          <div className="underline decoration-red-400 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">In Progress</div>
        </div>
        <div className = "pt-12 flex flex-row">

    <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-48 pr-3">
    <div className=" rounded-3xl  bg-black">
  <div className="md:flex">
    <div className="rounded-3xl shadow-2xl">
      <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Full Cold Flow</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-48">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Static Engine Fire</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  

 

  </div>



            
      </div>

      <div className = "pb-8 bg-gradient-to-r from-slate-900 to-black">
          <div className = "flex flex-items justify-center pt-24">
          <div className="underline decoration-red-400 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">Planned</div>
        </div>
        <div className = "pt-12 flex flex-row">
    
    <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-3 pb-12">
    <div className=" rounded-3xl  bg-black">
  <div className="md:flex">
    <div className="rounded-3xl shadow-2xl">
      <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Callisto I</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3 pb-12">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Callisto II</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6 pb-12">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Callisto III</a>
      <p className="mt-2 text-black">

</p>
    </div>
  </div>
</div>
</div>
  </div>

  </div>


  </div>


  <div className = "bg-slate-900 h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Ethanol Cold Flow</div>


  </div>

  <div className = "bg-black h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Nitrous Cold Flow (Water)</div>


  </div>

  <div className = "bg-slate-900 h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Nitrous Cold Flow</div>


  </div>

  <div className = "bg-black h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Full Cold Flow</div>


  </div>

  <div className = "bg-slate-900 h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Static Engine Fire</div>


  </div>

  <div className = "bg-black h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Callisto I</div>


  </div>

  <div className = "bg-slate-900 h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Callisto II</div>


  </div>

  <div className = "bg-black h-screen">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Callisto III</div>


  </div>

  </div>


            

      </main>
      </div>
      
    )
  }

  //USE THE CAROUSEL FROM TAILWIND