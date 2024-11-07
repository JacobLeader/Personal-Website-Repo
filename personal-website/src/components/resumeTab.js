'use client';

export default function ResumeTab() {
    const handleClick = () => {
        window.open('JacobLeader_Resume.pdf', '_blank', 'fullscreen=yes');
    }
    return (
        <div className="absolute right-0 bottom-20 transform transition-transform duration-300 cursor-pointer hover:scale-110" onClick={handleClick}>
            <svg id="rotatingText" viewBox="0 0 200 200" width="250" height="250">
                <defs>
                    <path id="circle" d="M 100, 100
                            m -75, 0
                            a 75, 75 0 1, 0 150, 0
                            a 75, 75 0 1, 0 -150, 0
                            ">
                    </path>
                    
                </defs>
                <path
                    d="M 100, 100 m -82.5, 0 a 82.5, 82.5 0 1, 0 165, 0 a 82.5, 82.5 0 1, 0 -165, 0"
                    stroke="#FF6F61"
                    strokeWidth="2"
                    fill="none"
                    />
                <text width="400">
                    <textPath className="text-2xl tracking-widest" alignmentBaseline="top" href="#circle">
                        I'm Looking for an internship!
                    </textPath>
                </text>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-JetBrains">See My<br/>Resume</div>
        </div>
    );
}