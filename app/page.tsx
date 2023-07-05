'use client';
import Card from "./components/Card";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="flex justify-center py-10 lg:px-0 sm:px-10 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="relative p-10 lg:p-0 container flex flex-col lg:flex-row">
        <Card />
        <div className="ml-0 lg:ml-[340px]">
          <Description />
          <Skills />
          <Projects />
          <Timeline />
        </div>
      </div>
    </div>
  )
}
