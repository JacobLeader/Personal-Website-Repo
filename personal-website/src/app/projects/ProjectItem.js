export default function ProjectItem({ name, href }) {
    const externalLink = href.includes('http')
    return (
        <a className="text-darkGray py-4 text-8xl decoration-none cursor-pointer strike-through" href={href} {...(externalLink ? {target: "_blank",rel:"noopener noreferrer"} : {} )}>{name}</a>
    );
}