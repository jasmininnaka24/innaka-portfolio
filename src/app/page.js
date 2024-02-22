'use client'

import './globals.css';
import Image from 'next/image';


// component imports


// icon imports
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


// photo imports
import Photo from '../../public/aboutphoto.png';
import Bootstrap from '../../public/skillset/bootstrap.png';
import CSS from '../../public/skillset/css.png';
import ExpressJs from '../../public/skillset/express.png';
import FastAPI from '../../public/skillset/fastapi.png';
import HTML from '../../public/skillset/html.png';
import Javascript from '../../public/skillset/javascript.png';
import JQuery from '../../public/skillset/jquery.png';
import Laravel from '../../public/skillset/laravel.png';
import MySQL from '../../public/skillset/mysql.png';
import PHP from '../../public/skillset/php.png';
import ReactJS from '../../public/skillset/react.png';
import SequelizeJS from '../../public/skillset/sequelize.png';
import SocketIO from '../../public/skillset/socket.png';
import Tailwind from '../../public/skillset/tailwind.png';




const Home = () => {

  return (
    <main className='main-bg-linear text-dark'>
      {/* navigation */}

      <div className='fixed w-full bg-white m-0' style={{ zIndex: 10 }}>
        <nav className={`flex items-center justify-between full-width py-6`}>
          <h2 className='text-center quicksand py-1 mr-10 font-bold rounded-full text-secondary-dark'><a href="#" className='font-bold text-3xl text-primary'>JI</a></h2>
          <ul class="flex items-center gap-3 text-center SMN_effect-39">
            <li><a className='text-center quicksand text-dark' href="#about">About</a></li>
            <li><a className='text-center quicksand text-dark' href="#works">Works</a></li>
            <li><a className='text-center quicksand text-dark' href="#">Experience</a></li>
          </ul>

          <div>
            <button><a className='text-center quicksand py-2 bg-primary text-light rounded quicksand px-3' href="#">Contacts</a></button>
          </div>
        </nav>
      </div>

      <div className='w-full py-6 m-0'></div>

      <div className='full-width'>

        {/* hero section */}
        <section id='#' style={{ minHeight: '30rem' }} className={`py-10 mt-12 gap-8 rounded flex flex-row-reverse items-center justify-center`}>
          <article className='w-3/4 flex flex-row-reverse items-center justify-center gap-5'>
            <div className='w-1/3 flex items-center justify-start'>
              <Image src={Photo} alt="" style={{ width: '20rem', height: '20rem' }} className='w-full main-photo rounded-[.3rem]' />
            </div>
            <div className='flex-1'>
              <h4 className='text-xl mt-2 text-secondary-dark mb-2'>Hey there👋🏼</h4>

              <div className='flex items-cente'>
                <div>
                  <h4 className='font-bold text-5xl text-primary-dark'>I am Jasmin In-naka</h4>
                  <div className='flex items-center justify-end'>
                    <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '21.5rem' }}></div>
                  </div>
                </div>
              </div>

              <h4 className='text-md mt-8 text-secondary-dark'>21-year old IT student who builds <span className='bg-secondary-light rounded px-2 py-1 text-dark text-md text-dark'>Full-Stack Applications.</span></h4>
              <h4 className='text-md mt-2 text-secondary-dark'>I embrace minimalism and simplicity, along with the elegance they unveil.</h4>


              <ul className='flex items-center gap-6 mt-10'>
                <li><a href=""><GitHubIcon className='text-secondary-dark' /></a></li>
                <li><a href=""><LinkedInIcon className='text-secondary-dark' /></a></li>
                <li><a href=""><FacebookRoundedIcon className='text-secondary-dark' /></a></li>
                <li><a href="#"><InstagramIcon className='text-secondary-dark' /></a></li>
              </ul>
            </div>

          </article>
        </section>


        {/* about section */}
        <section id='about' style={{ minHeight: '35rem', zIndex: 5 }} className={`py-32 flex`}>


          <div className='flex gap-11'>
            <article className='w-1/2 relative'>            
              <div>
                <h4 className='font-bold text-2xl text-primary-dark '>About Me</h4>
                <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '2rem' }}></div>
              </div>
              <br />

              <h4 className='font-normal mt-3 text-secondary-dark'>I`m an aspiring <span className='rounded py-1 bg-secondary-light px-2 text-dark'>Full-Stack Developer.</span> Currently practicing <span className='rounded py-1 bg-secondary-light px-2 text-dark'>UX/UI Design.</span></h4>


              <h4 className='font-normal text-secondary-dark mt-5 text-justify'>Productive coding at night till midnight. I love coffee, cats, and rainy season. I like learning new technologies, mostly right after a certain project is finished, grasping other tech stack concepts, as well, intrigues me even more.</h4>
              <h4 className='font-normal text-secondary-dark mt-5 text-justify'>I enjoy solving logical puzzles, and games like sudoku, chess, and rubiks cube. I find it interesting analyzing logics because I think a lot. Doing it just makes me apply effective solutions in real-world problems.</h4>
              <br />

              <div className='flex items-center gap-2 mt-5'>
                <button className='w-1/3 py-2 bg-primary text-light rounded quicksand'>View Resume</button>
                <button className='w-1/3 py-2 outlined-primary rounded quicksand'>Download Resume</button>
              </div>

            </article>


            <article className='w-1/2 relative'>
              
              <div>
                <h4 className='font-bold text-2xl text-primary-dark '>Technologies I Use</h4>
                <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '2rem' }}></div>
              </div>
              <br />


              <ul className='grid grid-cols-6 gap-3 mt-4'>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={Bootstrap} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={CSS} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={ExpressJs} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={FastAPI} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={HTML} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={Javascript} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={JQuery} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={Laravel} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={MySQL} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={PHP} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={ReactJS} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={SequelizeJS} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={SocketIO} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-primary rounded' style={{ height: '4.2rem' }}>
                  <Image src={Tailwind} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
              </ul>


            </article>
          </div>
        </section>


        {/* works section */}

        <section id='works' style={{ minHeight: '40rem' }} className={`flex py-32 w-full`}>
          <div className='w-full'>

            <div className='flex items-center justify-center'>
              <div>
                <h4 className='font-bold text-2xl text-primary-dark '>My Works</h4>
                <div className='flex items-center justify-center mt-1'>
                  <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '2rem' }}></div>
                </div>
              </div>
            </div>
            <br />

            <article className="w-full relative my-8">
              <ul className='grid grid-cols-1 gap-5 w-full'>
                <li className='box-shadow-primary p-6 rounded flex items-center w-full'>
                  <div className='flex items-center'>

                    {/* tools I used */}
                    
                    <div className='w-2/3'>
                      <ul className='flex items-center gap-2 mb-5'>
                        <li className='text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center' style={{ fontWeight: 600 }}>ReactJS</li>
                        <li className='text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center' style={{ fontWeight: 600 }}>ExpressJS</li>
                        <li className='text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center' style={{ fontWeight: 600 }}>SequelizeJS</li>
                        <li className='text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center' style={{ fontWeight: 600 }}>TailwindCSS</li>
                        <li className='text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center' style={{ fontWeight: 600 }}>MySQL</li>
                        <li className='text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center' style={{ fontWeight: 600 }}>FastAPI</li>
                      </ul>


                      <h3 className='text-primary-dark font-bold text-xl'>MindScape AI: Capstone Project</h3>

                      <p className='text-secondary-dark font-medium mt-7 text-justify'>🚀 A web application that harnesses advanced functionalities, such as seamless integration with artificial intelligence and real-time communication capabilities through socket.io. This project showcases innovative technologies to enhance user experiences and foster collaboration among users.</p>

                      <br />
                      <div className='flex items-center gap-3'>
                        <button className='w-1/6 text-center bg-primary text-light rounded py-2'><a href="https://mindscape-ai.vercel.app" target='_blank'><OpenInNewIcon fontSize='small' className='mr-1 mb-1' />Live Site</a></button>
                        <button className='w-1/6 text-center rounded py-2 bg-secondary-light px-2 text-dark'><a href="https://github.com/jasmininnaka24/mindscape-ai" target='_blank'><GitHubIcon fontSize='small' className='mr-1 mb-1' />Github</a></button>
                      </div>

                      <h4 className='text-secondary-dark mt-5 opacity-60 text-sm'>Year: 2023</h4>
                    </div>

                    <div className='w-1/3 flex items-center justify-end'>
                      <Image src={Photo} alt="" style={{ width: '12.5rem', height: '12.5rem' }} className='w-full main-photo rounded-[.3rem]' />
                    </div>

                  </div>
                </li>
              </ul>
            </article>
          </div>
        </section>
        

      </div>

    </main>
  )
}

export default Home