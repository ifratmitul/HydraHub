import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more{" "}
            <span aria-hidden="true">
              <ArrowDownIcon className="h-6 w-6"></ArrowDownIcon>
            </span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {"Hi There, I'm Ifrat;"}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="text-sm flex font-semibold leading-6 text-gray-900"
          >
            Learn more <ArrowDownIcon className="ml-2 h-6 w-6"></ArrowDownIcon>
          </a>
        </div>
      </div>
    </div>
  );
}
