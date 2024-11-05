export default function SocialIcons() {
    return (
        <div className="flex flex-col space-y-4">
            <Icon link="https://github.com/JacobLeader" path="/github-icon.svg" alt="GitHub" />
            <Icon link="https://www.linkedin.com/in/jacob-s-leader/" path="/linkedin-icon.svg" alt="Linkedin" />
            <Icon link="https://x.com/JacobDevX" path="/X-icon.svg" alt="X / Twitter" />
        </div>
    );
}

function Icon({ link, path, alt }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img 
                src={path} 
                alt={alt}
                className="w-10 h-10 transition-transform duration-300 hover:translate-x-2 cursor-pointer"
            />
        </a>
    );
}
