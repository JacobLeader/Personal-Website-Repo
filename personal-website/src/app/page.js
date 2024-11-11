import TypedText from '../homepage/typedText';
import ParticlesBackground from '../components/TSparticles'
import Navbar from './navbar/navbar';
import SocialIcons from '@/homepage/socials';
import ResumeTab from '@/components/resumeTab';

export default function Home() {

  return (
    <div className="flex flex-col h-screen">
      <ResumeTab/>
      <div className='flex flex-col pt-[20vh] pl-[15%]'> 
        <TypedText />
        <div className='font-bold pt-6 text-lightGray w-[33vw] pl-2'>
          I’m majoring in Computer Science at McGill University, and as VP of Web Development at the McGill AI Lab, 
          I collaborate with others to drive innovation in AI.
        </div>
      </div>
      <div className="absolute bottom-20 left-0 pb-4 pl-6">
          <SocialIcons />
        </div>
    </div>
  );
}