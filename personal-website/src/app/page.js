import TypedText from '../landing/typedText';
import ParticlesBackground from '../components/TSparticles'

export default function Home() {
  return (
    <ParticlesBackground>
    <div className="flex items-center h-screen">
      <TypedText/>
    </div>
    </ParticlesBackground>
  );
}
