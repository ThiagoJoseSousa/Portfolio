//https://www.harvard.edu/
// div showing people style. 
// grid layout https://play.google.com/store/games?device=windows

import crypto from '../assets/style/image/cryptocurrency.png';

export default function Projects (){
    
    return <section>
        <section className="parallax-module parallax parallax-3">
            <h1>Projects</h1>
        </section>
        <section className='project-list__wrapper'>
                <p className='semi-title'>Original personal projects.</p>
                <h2 className='project__h2 h2-experiments'>My experiments.</h2>
            <div className="project-list">
                <a href="#" className="project__wrapper two-columns">
                    <div className='project--1 project-item'></div>
                    <div className="flex">
                        <div className='project--1__info'>
                    <h2 className='project--1__title'>E-Commerce</h2>
                    <p className="project__p">I created this large website using HTML, CSS, JS, and ReactJS. I implemented BEM and SoC techniques to ensure clean and maintainable code. To enable Single Page Application (SPA) navigation, I used React Router. For the backend, I integrated Google Firebase, specifically Firestore, Storage, and Authentication features, to enable user CRUD and generated content via forms. I also worked with Dates and Swiper Slides API. My most significant discovery was the use of the React Context Hook, which allowed me to share the state between React Routes seamlessly.</p>
                        </div>
                        <img src={crypto} alt='crypto coins' className='project__illustration' title='NFT'/>
                        </div>
                    <div className="calltoaction">
                        <svg className='about-arrow' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
                    <span>See more about OpenSea Clone.</span></div>

                </a>
                <a href="#" className="project__wrapper">
                <div className='project--2 project-item'></div>
                    <div className="project">
                        <h2 className='project__h2'>Photo Editor</h2>
                        <p className="project__p">This project focused on HTML5 Canvas in a photo editor app. With the help of MDN, I implemented resolution and aspect ratio changes, animated geometry and stroke drawing, text writing, paint bucket, and file input for image importing.</p></div>
                    <div className="calltoaction"><svg className='about-arrow' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
                    <span>See more about photo editor.</span></div>

                </a>
                <a href="#" className="project__wrapper">
                    <div className='project--3 project-item'></div>
                    <div className="project">
                        <h2 className='project__h2'>Portfolio</h2>
                        <p className="project__p">This website was developed with ReactJS, utilizing SASS with BEM convention as its CSS precompiler. The use of SASS enabled me to have a cleaner approach to CSS management. React Router and IntersectionObserver appear here, too. </p></div>
                    <div className="calltoaction"><svg className='about-arrow' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
                    <span>See more about Portfolio.</span></div>

                </a>
                <a href='#' className="project__wrapper">
                 <div className='project--4 project-item'></div>
                    <div className="project">
                        <h2 className='project__h2'>SpaceX Clone</h2>
                        <p className="project__p">This was my second attempt to clone the SpaceX website. My main learned lessons were relative/absolute positioning, the pseudo selectors "after/before" and the JS intersectionObserver. By mastering these concepts, I can create websites that are both beautiful and optimized for performance.</p></div>
                    <div className="calltoaction"><svg className='about-arrow' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
                    <span>See more about SpaceX clone.</span></div>
                </a>
                    <a href='#' className="project__wrapper">
                    <div className='project--5 project-item'></div>
                    <div className="project">
                        <h2 className='project__h2'>Explosive Chess</h2>
                        <p className="project__p">I made Explosive Chess, a game where players can capture or self detonate with enemy pieces. I created two versions, one with Player vs. AI mode that taught me about the minimax algorithm. This version focuses on clear code.</p></div>
                    <div className="calltoaction"><svg className='about-arrow' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
                    <span>See more about Explosive Chess.</span></div>

                    </a>
                </div>
            
        </section>
    </section>
}
//responsive - large pro title--1
// responsive - medium pros cards virarem fileira