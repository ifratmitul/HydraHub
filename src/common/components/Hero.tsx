import SkillHome from "@/modules/skill/skill-home";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import TopProject from "@/modules/project/TopProject";

export default function Hero() {
  return (
    <div className="hero">
    <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
     
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {"Hi There, I'm Ifrat;"}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          As a software
          engineer and sustainability advocate, I strive to use my expertise in
          computer science and software engineering to conduct multidisciplinary
          research that creates sustainable, intelligent, data-driven systems. My goal is to
          develop sustainable solutions that have a positive impact on humanity, wild life
          and environment of our planet <i className="tree-icon"></i>. I'm excited to be a part of this change and look
          forward to contributing to a better world !
        </p>
        <div className="hidden sm:mt-8 sm:flex sm:justify-center">
        <div className="rounded-full flex px-3 py-3 text-sm leading-6 text-green-600 ring-1 ring-green-900/10 hover:ring-green-900/20">
          Learn more
          <a href="#" className="font-semibold text-green-600">
              <ArrowDownIcon className="h-6 w-6"></ArrowDownIcon>
           </a>
        </div>
      </div>
      </div>
    </div>
    <SkillHome />
    <TopProject />
    </div>
  );
}
