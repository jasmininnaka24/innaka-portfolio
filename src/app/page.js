import Image from "next/image";
import './globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default function Home() {
  return (
    <main className="quicksand flex items-center min-h-screen p-24 gap-5" style={{ background: 'linear-gradient(77deg, rgb(236, 241, 244) 21%, rgb(246, 239, 245) 100%)', color: '#555', fontSize: '18px' }}>
      <div className="w-1/4">

      </div>
      <div className="flex-1">
        {/* <h1 className="text-4xl font-bold" style={{color: '#dbdbe1', marginLeft: '-.2rem', marginBottom: '-2.3rem'}}>Hola👋 I am Jasmin - Full-Stack Developer</h1> */}
        <h1 className="font-bold uppercase" style={{color: '#57535f', textShadow: '-3px -1px 1px #d6d6dc', fontSize: '3rem'}}>Hola!👋🏼 I`m <span style={{ color: '#6e59a6' }} className="font-bold">Jasmin In-naka</span> </h1>
        
        <p className="mt-8 font-medium">An IT student who loves building <span className="font-bold rounded py-1 px-1" style={{ background: '#dfdfe7'}}>Full-Stack Applications.</span> Currently practicing <span className="font-bold rounded py-1 px-1" style={{ background: '#dfdfe7'}}>UX/UI designs.</span></p>

        <p className="mt-5 font-medium">Productive when coding at night till midnight. Loves minimalism, coffee, cats, and rainy season. I like learning new technologies, mostly right after a certain project is finished, grasping other tech stack concepts intrigues me more.</p>

        <ul className="mt-20 flex gap-8">
          <li>
            <FontAwesomeIcon icon={['fab', 'github']} style={{ width: '20px' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ width: '20px' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'facebook']} style={{ width: '20px' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'instagram']} style={{ width: '20px' }} />
          </li>
        </ul>
      </div>

    </main>
  );
}
