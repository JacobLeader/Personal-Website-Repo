import TypedText from '../homepage/typedText';
import ParticlesBackground from '../components/TSparticles'
import Navbar from './navbar/navbar';
import SocialIcons from '@/homepage/socials';

export default function Home() {
  return (
    <ParticlesBackground>
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className='flex flex-col pt-[20vh] pl-[15%]'> 
        <TypedText/>
        <div className='font-bold pt-6 text-lightGray w-[33vw] pl-2'>
          I'm a Computer Science major at McGill University, passionate about AI and web development. 
          As the VP of Web Development for the McGill AI Lab, I collaborate with others to drive innovation in technology.
        </div>
      </div>
      <div className="absolute bottom-0 left-0 pb-4 pl-4">
          <SocialIcons />
        </div>
    </div>
    </ParticlesBackground>
  );
}