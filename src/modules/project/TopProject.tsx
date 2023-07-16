import ProjectCard from "./projectCard";

const TopProject = ({}) => {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-center mb-5 text-lg font-semibold leading-8 text-gray-900">
          Few of my top projects
        </h2>
        <div className="overflow-hidden mx-auto m-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
export default TopProject;
