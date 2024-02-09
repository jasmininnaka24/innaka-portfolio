import Image from "next/image";
import './globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default function Home() {
  return (
    <main className="quicksand flex items-center justify-center min-h-screen p-24 gap-5" style={{ background: '#f7f5f5', color: '#555', fontSize: '18px' }}>
      <div className="flex-1">
        <h1 className="font-bold uppercase" style={{color: '#57535f', fontSize: '3rem'}}>Hola!👋🏼 I`m Jasmin In-naka </h1>
        
      </div>

    </main>
  );
}
