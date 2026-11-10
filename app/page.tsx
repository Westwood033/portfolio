
import Image from "next/image";
import { projects } from "./project-data.ts";

export default function Home() {
   return (
    <main className="">
      <div className="page-h-center">
        <div className="page-w-center">
          <div className="grid">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <img className="logo" src="https://js.devexpress.com/Content/Images/Frameworks/Angular.png"/>
                <img className="img-card" src={project.img} alt={project.title} />
                <p className="description-card">{project.description}</p>
                <div className="button-grid ">
                <a className="button-card" href={project.link}>{project.action}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
