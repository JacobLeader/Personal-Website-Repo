import ProjectItem from "./ProjectItem";
import ParticlesBackground from "@/components/TSparticles";
import Navbar from "../navbar/navbar";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col p-8 inline-block">
            <ProjectItem name="Japan Super Science Fair 2023" href="#"/>
            <ProjectItem name="McGill AI Lab Website" href="https://www.mcgillailab.co/"/>
            <ProjectItem name="Find Face in website" href="#"/>
        </div>
    );
}
