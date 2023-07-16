import Link from "next/link";
import Image from "next/image";
import proj from "@/assets/images/porject-card-img.jpg";
const dummyDetails = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nostrum consequuntur. Cupiditate excepturi officia, qui quia officiis, ipsa facilis autem tempora animi voluptatum iste laborum dignissimos possimus ratione ipsum quo!"

function ProjectCard() {
  return (
    <div className="card">
      <div className="card__image">
        <Image src={proj} alt="rover" />
      </div>
      <div className="card__content">
        <h2 className="card__title">{"project title"}</h2>
        <p className="card__body">
          {truncate(dummyDetails)}
        </p>
        <Link className="card__btn" href={"/projects/" + "project.id"}>
          Learn More
        </Link>
      </div>
    </div>
  );
}

const truncate = (str: string): string => {
  return str.length > 130 ? str.substring(0, 130) + "..." : str;
};

export default ProjectCard;
