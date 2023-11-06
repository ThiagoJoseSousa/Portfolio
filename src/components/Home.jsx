import { useEffect, useRef, useState } from "react"
import responsive from "../assets/style/image/responsive-design.svg";
import support from '../assets/style/image/support.svg';
import control from '../assets/style/image/control.svg'
import code from '../assets/style/image/code.svg'
import computer from '../assets/style/image/computer.png'
import diamond from '../assets/style/image/diamond.png'

import {useNavigate} from "react-router-dom";

export default function Home (){
    const upAnimaRefs= useRef([]);
    const leftAnimaRefs=useRef([]);
    const rightAnimaRefs=useRef([]);
    const downAnimaRefs=useRef([]);

    useEffect(()=>{
        const upAnimaObserver = new IntersectionObserver(upAnimation);
        const leftAnimaObserver = new IntersectionObserver(leftAnimation);
        const rightAnimaObserver = new IntersectionObserver(rightAnimation);
        const downAnimaObserver = new IntersectionObserver(downAnimation)

        function checkIntersection(entries){
            const visibleSection= entries.filter((entry) => {
                return entry.isIntersecting;
            })
            return visibleSection;
        }

        function addAnimationClass(ele, animationClass){
                ele.classList.add(animationClass)
        }

        function upAnimation(entries){

                const visibleSection=checkIntersection(entries);
                if (visibleSection.length){
                    const ele=visibleSection[0].target 
                    addAnimationClass(ele,'scrolled')
                    upAnimaObserver.unobserve(ele);
                }
              
        }

        function leftAnimation(entries){
            const visibleSection=checkIntersection(entries);
            if (visibleSection.length){
                const ele=visibleSection[0].target 
                addAnimationClass(ele,'left')
                leftAnimaObserver.unobserve(ele);
            }
        }

        function rightAnimation(entries){
            const visibleSection=checkIntersection(entries);
            if (visibleSection.length){
                const ele=visibleSection[0].target 
                addAnimationClass(ele,'right')
                rightAnimaObserver.unobserve(ele);
            }
        }

        function downAnimation(entries){
            const visibleSection=checkIntersection(entries);
            if (visibleSection.length){
                const ele=visibleSection[0].target 
                addAnimationClass(ele,'down')
                downAnimaObserver.unobserve(ele);
            }
        }
        /* the 'scrolled' and the {upAnimaObserver} will change.*/
        function addObservers(ref,observer){
            ref.current.map((section)=>{
                observer.observe(section)
            })
        }

        addObservers(upAnimaRefs, upAnimaObserver)
        addObservers(leftAnimaRefs,leftAnimaObserver)
        addObservers(rightAnimaRefs, rightAnimaObserver)
        addObservers(downAnimaRefs, downAnimaObserver)
    }
    ,[])

    let navigate = useNavigate();
    const routeChange = () => {
        let url='Projects'
        navigate(url);
    }

    return <main className="main">
            <section className="parallax-module parallax parallax-1">
                <h1 ref={(el) => (downAnimaRefs.current[0]= el)} className="zero-opa">Web developer</h1>
            </section>
            <section className="parallax-module content">
                <div className="text__wrapper" ref={(el) => (rightAnimaRefs.current[0]= el)}>
                    <h2 className="text__h2">Web developer</h2>
                    <p className="text__p">
                        Hey, I'm Thiago, a 20-year-old and a Front-end Developer. I have experience using a <strong>Backend as a Service</strong> provider as the <strong>Firebase</strong> one to build complete websites.
                        
                    </p>
                    <p className="text__p">
                    I can create interactive and intuitive user experiences using <strong>HTML, CSS, Javascript, and ReactJS.</strong>
                    </p>
                </div>
            </section>

            <section className="second-section-wrapper">
                <div className="second-section text__wrapper" ref={(el) => (leftAnimaRefs.current[0]= el)}>
                    <h2 className="text__h2">Why Front-End?</h2>
                    <p className="text__p">I chose the <strong>Front End</strong> because it is <b>complex</b>. The combination of SEO, design, and logic allows me to learn a wide part of the internet.</p>
                    <p className="text__p">I also love the idea of ​​being able to create <strong>responsive websites, apps, and interfaces</strong> that can <b>help users</b> spend less time with their tasks.</p>
                </div>
            </section>

            <section className="third-section-wrapper">
                <div className="third-section text__wrapper text__wrapper--grid" ref={(el) => (rightAnimaRefs.current[1]= el)}>
                    <span className="text__p">What I can do.</span>
                    <h2 className="text__h2">Skills</h2>
                    <div className="skills">
                        <div className="skills__interactive">
                        <img src={control} className="skills__icon" alt="Game buttons" title="Controller"/>
                        <h3 className="medium-title">Interactive</h3>
                            <p>
                            Allowing users to interact with data, buttons, sliders, and animations makes apps more interesting and user-friendly, resulting in faster job completion and increased user satisfaction.
                            </p>
                        </div>

                        <div className="skills__responsive">
                        <img src={responsive} className="skills__icon" alt="Computer,Phone" title="Multiple devices"/>
                        <h3 className="medium-title">Responsive</h3>
                            <p>
                            An app is considered to be responsive if it can adjust to any screen size, making it easy for new users to navigate and for older users to switch between devices.
                            </p>
                        </div>

                        <div className="skills__webapis">
                        <img src={code} className="skills__icon" alt="</>" title="Code"/>
                        <h3 className="medium-title">Maintainable</h3>
                            <p>
                            Maintainable code and Web API knowledge are essential for developers. They save time and improve software quality by making code easy to modify, reuse, and interact with third-party services. By combining these skills, you can create functional and maintainable software.
                            </p>
                        </div>

                        <div className="skills__teamwork">
                        <img src={support} className="skills__icon" alt="Hand holding hand" title="Handshake"/>
                        <h3 className="medium-title">Teamwork</h3>
                            <p>
                            I truly believe in the power of compassionate communication to bridge gaps and bring diverse ideas together in harmony. When working alongside designers and team members, I strive to foster an environment where dialogue is open, respectful, and constructive.
                            </p>
                        </div>
                        <div className="skills__portfolio"  ref={(el) => (rightAnimaRefs.current[2]= el)}>
                            <div className="portfolio__wrapper">
                                <h3 className="margin-medium medium-title">See my projects</h3>
                                <p>Discover my Front-end development experiences on websites and applications.</p>
                                <p>You can also download them and have access to their entire source code.</p>
                                <button className="portfolio__button" onClick={routeChange}>See experience</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="fourth-section">    
                <div className="fourth-section-wrapper" ref={(el) => (upAnimaRefs.current[1]= el)}>
                    <span className="text__p">How I built this site.</span>
                    <h1 className="text__h2">Explore my portfolio.</h1>
                    <div className="page-info">
                    <img src={computer} alt="Computer, Calculator, Book, Coffe, Phones." className="computer-img" title="A computer and an unorganized table"/>
                        <div>
                            <div className="diamond-medal"><hr /><img src={diamond} alt="Shining diamond" className="diamond-img" title="Precious"/><hr /></div>
                            <p className="text__p">I developed this portfolio using HTML, SASS and ReactJS. Using SASS for the first time, I was able to create a very responsive and clearer document.</p>
                            <p className="text__p"> I've been editing existing illustrations in Photoshop, but I want to take Google's UX design course.</p>
                            <p className="text__p">A simple project where I had a lot of fun developing it. Hope you like!</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
}