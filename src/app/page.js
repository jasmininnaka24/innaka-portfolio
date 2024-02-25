'use client'

import './globals.css';
import Image from 'next/image';
import Link from 'next/image';


// component imports


// icon imports
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import NorthEastIcon from '@mui/icons-material/NorthEast';


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

import Website from '../../public/website.png';
import Mobile from '../../public/mobile.png';
import Desktop from '../../public/monitor.png';
import Design from '../../public/design.png';



const Home = () => {

  return (
    <main className='main-bg-linear text-dark'>
      {/* navigation */}

      <div className='fixed w-full bg-white m-0' style={{ boxShadow: '0 2px 5px #e9e4e4', zIndex: 10 }}>
        <nav className={`flex items-center justify-between full-width py-3`}>
          <h2 className='text-center quicksand py-1 mr-10 font-bold rounded-full text-secondary-dark'><Link href={"#"} className='font-bold text-3xl text-primary'>JI</Link></h2>

          <ul class="flex items-center gap-3 text-center SMN_effect-39">
            <li><Link className='text-center quicksand link-nav text-dark' href={"#about"}>About</Link></li>
            <li><Link className='text-center quicksand link-nav text-dark' href={"#projects"}>Projects</Link></li>
            <li><Link className='text-center quicksand link-nav text-dark' href={"#qualifications"}>Qualifications</Link></li>
            <li><Link className='text-center quicksand link-nav text-dark' href={"#services"}>Services</Link></li>
            <li><Link className='text-center quicksand bg-primary text-light rounded quicksand px-3 link-nav-contact' href={"#contacts"}>Contacts</Link></li>
          </ul>
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
                  <h4 className='font-bold text-5xl text-primary-dark '>I am Jasmin In-naka</h4>
                  <div className='flex items-center justify-end'>
                    <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '21.5rem' }}></div>
                  </div>
                </div>
              </div>

              <h4 className='text-md mt-8 text-secondary-dark'>21-year old IT student who builds <span className='bg-secondary-light rounded px-2 py-1 text-dark text-md text-dark'>Software Applications.</span></h4>
              <h4 className='text-md mt-2 text-secondary-dark'>I embrace minimalism and simplicity, along with the elegance they unveil.</h4>


              <ul className='flex items-center gap-6 mt-10'>
                <li><Link href={'/'}><GitHubIcon className='text-secondary-dark' /></Link></li>
                <li><Link href={'/'}><LinkedInIcon className='text-secondary-dark' /></Link></li>
                <li><Link href={'/'}><FacebookRoundedIcon className='text-secondary-dark' /></Link></li>
                <li><Link href={"/"}><InstagramIcon className='text-secondary-dark' /></Link></li>
              </ul>
            </div>

          </article>
        </section>


        {/* about section */}
        <section id='about' style={{ minHeight: '35rem', zIndex: 5 }} className={`py-32 flex`}>


          <div className='flex gap-11'>
            <article className='w-1/2 relative'>            
              <div>
                <h4 className='font-bold text-4xl text-primary-dark quicksand '>About Me</h4>
                <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '2rem' }}></div>
              </div>
              <br />

              <h4 className='font-normal mt-3 text-secondary-dark'>I{"'"}m a <span className='rounded py-1 bg-secondary-light px-2 text-dark'>Software Developer.</span> Currently practicing <span className='rounded py-1 bg-secondary-light px-2 text-dark'>UX/UI Design.</span></h4>


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
                <h4 className='font-bold text-4xl text-primary-dark quicksand '>Technologies I Use</h4>
                <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '2rem' }}></div>
              </div>
              <br />


              <ul className='grid grid-cols-6 gap-3 mt-4'>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={Bootstrap} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={CSS} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={ExpressJs} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={FastAPI} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={HTML} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={Javascript} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={JQuery} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={Laravel} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={MySQL} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={PHP} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={ReactJS} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={SequelizeJS} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={SocketIO} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
                <li className='box-shadow-dull rounded' style={{ height: '4.2rem' }}>
                  <Image src={Tailwind} alt="" style={{ height: '4.2rem' }} className='w-full p-3 cover object-contain rounded' />
                </li>
              </ul>


            </article>
          </div>
        </section>


        {/* projects section */}

        <section id='projects' style={{ minHeight: '40rem' }} className={`flex py-28 w-full`}>
          <div className='w-full'>

            <div className='flex items-center justify-between'>
              <div>
                <h4 className='font-bold text-4xl text-primary-dark quicksand '>Featured Projects</h4>
                <div className='flex items-center mt-1'>
                  <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                </div>
              </div>
              <ul class="flex items-center text-center gap-5">
                <li><Link className='text-center font-bold px-2 quicksand text-dark text-sm' href={"#about"}>All</Link></li>
                <li><Link className='text-center px-2 quicksand text-secondary-dark text-sm' href={"#projects"}>Web</Link></li>
                <li><Link className='text-center px-2 quicksand text-secondary-dark text-sm' href={"#qualifications"}>Mobile</Link></li>
              </ul>
            </div>
            <br />

            <article className="w-full relative my-2">
              <ul className='grid grid-cols-1 gap-5 w-full'>
                <li className='box-shadow-dull p-6 rounded flex items-center w-full'>
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


                      <h3 className='text-semi-dark font-bold text-2xl mt-1'>MindScape AI: Capstone Project</h3>

                      <p className='text-secondary-dark font-medium mt-4 text-justify'>🚀 A web application that harnesses advanced functionalities, such as seamless integration with artificial intelligence and real-time communication capabilities through socket.io. This project showcases innovative technologies to enhance user qualificationss and foster collaboration among users.</p>

                      <br />
                      <div className='flex items-center gap-3'>
                        <button className='w-1/6 text-center bg-primary text-light rounded py-2'><Link href={"https://mindscape-ai.vercel.app"} target='_blank'><OpenInNewIcon fontSize='small' className='mr-1 mb-1' />Live Site</Link></button>
                        <button className='w-1/6 text-center rounded py-2 bg-secondary-light px-2 text-dark'><Link href={"https://github.com/jasmininnaka24/mindscape-ai"} target='_blank'><GitHubIcon fontSize='small' className='mr-1 mb-1' />Github</Link></button>
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


        {/* qualifications section */}

        <section id='qualifications' style={{ minHeight: '40rem' }} className={`flex py-28 w-full`}>
          <div className='w-full'>

            <div className='flex items-center'>
              <div>
                <h4 className='font-bold text-4xl text-primary-dark quicksand '>Qualifications</h4>
                <div className='flex items-center mt-1'>
                  <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                </div>
              </div>
            </div>

            <br /><br />

            <ul class="flex items-center text-center gap-5">
              <li><Link className='text-center font-bold px-2 quicksand text-dark text-sm' href={"#about"}>Experience</Link></li>
              <li><Link className='text-center px-2 quicksand text-secondary-dark text-sm' href={"#projects"}>Education</Link></li>
              <li><Link className='text-center px-2 quicksand text-secondary-dark text-sm' href={"#projects"}>Credentials</Link></li>
            </ul>

            <article className="w-full relative my-4">
              <div class="timeline-container w-full p-3">
                <ul class="tl">
                  <li style={{ minHeight: '1rem' }}>
                    <div class="item-icon"></div>
                    <div className='w-3/4'>
                      <div class="text-semi-dark text-2xl font-bold">Software Developer Intern | Zamboanga City Hall</div>
                      <div class="text-secondary-dark text-md mt-2">Currently learning the technologies they use for development, collaborating with my team members on integration and implementation tasks, debugging some bugs and issues, and supporting project development.</div>
                    </div>
                    <div class="w-1/3 text-end text-md text-secondary-dark">
                      February 22, 2024 - Present
                    </div>
                  </li>
                </ul>

              </div>
            </article>
          </div>
        </section>


        {/* services section */}

        <section id='services' style={{ minHeight: '40rem' }} className={`flex py-28 w-full`}>
          <div className='w-full'>

            <div className='flex items-center'>
              <div>
                <h4 className='font-bold text-4xl text-primary-dark quicksand '>Services</h4>
                <div className='flex items-center mt-1'>
                  <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                </div>
              </div>
            </div>

            <article className="w-full relative my-8">
              <ul className='grid grid-cols-2 gap-4'>
                <li className='w-full box-shadow-dull rounded p-12 flex flex-col items-center'>
                  <Image src={Website} alt="" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} className='w-full rounded-[.3rem]' />
                  <p className='mt-6 text-semi-dark text-xl font-bold'>WEBSITE / WEB APPLICATION</p>
                  <div className='bg-primary-dark font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                  <p className='text-md text-center text-secondary-dark mt-3'>Crafting dynamic websites and web applications to make your online presence shine. From concept to execution, I bring vision to life with personalized seamless functionality.</p>
                </li>
                <li className='w-full box-shadow-dull rounded p-12 flex flex-col items-center'>
                  <Image src={Mobile} alt="" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} className='w-full rounded-[.3rem]' />
                  <p className='mt-6 text-semi-dark text-xl font-bold'>MOBILE APPLICATION</p>
                  <div className='bg-primary-dark font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                  <p className='text-md text-center text-secondary-dark mt-3'>Bringing your ideas to life with custom mobile app development. I develop user-friendly cross-platform mobile applications that cater to your unique needs and objectives.</p>
                </li>
                <li className='w-full box-shadow-dull rounded p-12 flex flex-col items-center'>
                  <Image src={Desktop} alt="" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} className='w-full rounded-[.3rem]' />
                  <p className='mt-6 text-semi-dark text-xl font-bold'>DESKTOP APPLICATION</p>
                  <div className='bg-primary-dark font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                  <p className='text-md text-center text-secondary-dark mt-3'>Empowering your business with tailored desktop applications. I develop efficient and reliable software solutions that enhance productivity and streamline operations on the desktop platform.</p>
                </li>
                <li className='w-full box-shadow-dull rounded p-12 flex flex-col items-center'>
                  <Image src={Design} alt="" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} className='w-full rounded-[.3rem]' />
                  <p className='mt-6 text-semi-dark text-xl font-bold'>UX/UI DESIGN</p>
                  <div className='bg-primary-dark font-bold rounded' style={{ height: '3px', width: '3rem' }}></div>
                  <p className='text-md text-center text-secondary-dark mt-3'>With a keen eye for intuitive design and a commitment to enhancing usability, I develop UI/UX solutions that resonate with users and enhance their interaction with digital platforms.</p>
                </li>
              </ul>
            </article>
          </div>
        </section>


        {/* contacts section */}

        <section id='contacts' style={{ minHeight: '35rem', zIndex: 5 }} className={`py-32 flex items-center justify-center`}>


          <div className='flex gap-11 flex items-center justify-center'>
            <article className='w-1/2 relative'>            
              <div>
                <h4 className='font-bold text-4xl text-primary-dark quicksand '>Get in Touch</h4>
                <div className='bg-primary font-bold rounded' style={{ height: '3px', width: '2rem' }}></div>
              </div>
              <br />

              <h4 className='mt-3 text-semi-dark font-bold text-3xl'>Have a project in mind? Let{"'"}s delve into that.</h4>

              <br />

              <ul className='grid grid-cols-2 gap-3'>
                <li className='flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded'>
                  <div className='rounded inline flex gap-2 items-center'>
                    <EmailOutlinedIcon fontSize='medium' className='text-primary' />
                  </div>
                  <div>
                    <Link href={'/'} className='text-sm text-primary-dark quicksand'>jasmininnaka@gmail.com</Link>
                  </div>
                </li>
                <li className='flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded'>
                  <div className='rounded inline flex gap-2 items-center'>
                    <LinkedInIcon fontSize='medium' className='text-primary' />
                  </div>
                  <div>
                    <Link href={'/'} className='text-sm text-primary-dark quicksand'>jasmin-in-naka</Link>
                  </div>
                </li>
                <li className='flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded'>
                  <div className='rounded inline flex gap-2 items-center'>
                    <GitHubIcon fontSize='medium' className='text-primary' />
                  </div>
                  <div>
                    <Link href={'/'} className='text-sm text-primary-dark quicksand'>jasmininnaka24</Link>
                  </div>
                </li>
                <li className='flex items-center gap-2 bg-secondary-light-dull px-3 py-3 rounded'>
                  <div className='rounded inline flex gap-2 items-center'>
                    <FacebookIcon fontSize='medium' className='text-primary' />
                  </div>
                  <div>
                    <Link href={'/'} className='text-sm text-primary-dark quicksand'>jasmininnaka24</Link>
                  </div>
                </li>
              </ul>


              <br /><br />
              <div className='relative'>
                <Link href={"#about"} class='text-sm text-primary-dark'>View my Resume <NorthEastIcon style={{ fontSize: '15px' }} /></Link>
                <div className='bg-primary font-bold rounded' style={{ height: '1px', width: '8rem' }}></div>
              </div>

            </article>


            <article className='w-1/2 relative'>
              
              <div className='box-shadow-dull w-full p-5 rounded'>
                <p className='text-xl text-primary-dark quicksand font-bold'>Send me a message 🚀</p>
                <div className='bg-primary font-bold rounded' style={{ height: '2px', width: '3rem' }}></div>
                <form action="" className='w-full'>
                  <div className='flex items-center justify-center gap-3 mt-4'>
                    <input type="text" className='text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none' placeholder='Full Name' />
                    <input type="email" className='text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none' placeholder='Email' />
                  </div>

                  <div className='mt-4'>
                    <input type="text" className='text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none' placeholder='Subject' />
                  </div>

                  <div className='mt-4'>
                    <textarea 
                    className='text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none' placeholder='Tell me about your project...'
                    rows="5"></textarea>
                  </div>

                  <div className='mt-2 flex justify-end items-center'>
                    <button className='bg-primary text-white py-2 rounded w-1/3 quicksand outline-none'>Submit</button>
                  </div>
                </form>
              </div>

            </article>
          </div>
        </section>


        

      </div>

    </main>
  )
}

export default Home