import Image from "next/image";
import angular from "@/assets/images/angular-icon-1.svg";
import reactLogo from "@/assets/images/react-2.svg";
import nextLogo from "@/assets/images/next-js-seeklogo.com.svg";

import javaLogo from "@/assets/images/java.svg";
import javaScriptLogo from "@/assets/images/logo-javascript.svg";
import nodeLogo from "@/assets/images/nodejs-1.svg";

export default function SkillHome() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-center mb-5 text-lg font-semibold leading-8 text-gray-900">
          Area of Experties
        </h2>
        <div className="mx-auto m-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={angular}
            alt="Angular"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={nextLogo}
            alt="Next.js"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={reactLogo}
            alt="react.js"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={javaScriptLogo}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={nodeLogo}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
