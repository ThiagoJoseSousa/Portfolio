import { NavLink } from "react-router-dom";
import logo from "../assets/t.png"
import { useEffect, useRef, useState } from "react";
import RouteScrollTop from '../hooks/RouteScrollTop';

export default function Navbar(){
    const [hamburger, setHamburger] = useState();
    const navRef=useRef();
    const burgRef= useRef();
    const topBtn= useRef();
    useEffect(()=>{
        let lastScrollTop=0;

        window.addEventListener("scroll", function(){
            if(!navRef.current){return}
            let scrollTop= window.pageYOffset || document.documentElement.scrollTop;
            const navStyle = navRef.current.style;
            const styleSheet= getComputedStyle(document.documentElement);
            if(scrollTop > lastScrollTop){
                navStyle.transform = "translateY(-100%)";
            } else{
                navStyle.transform = "translateY(0)";
            }
            if(scrollTop==0){
                navStyle.background= "none"
                navStyle.padding= styleSheet.getPropertyValue('--nav-padding');
            } else {
                navStyle.background= styleSheet.getPropertyValue('--theme-contrast');
                navStyle.padding=0;
            }
            if (scrollTop > 20) {
                topBtn.current.style.display = "block";
              } else {
                topBtn.current.style.display = "none";
              }

            lastScrollTop = scrollTop;
            burgRef.current.checked=false;
            setHamburger(false)
        })
    },[])
    const goTop = () =>{
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (<>
    
        <nav ref={navRef} className="nav">
            <header className="nav__header">
                <NavLink to={'../'} className="logo">
                <img src={logo} alt="logo" className="logo__img"/>
                <span className="logo__name">
                Thiago José
                </span>
                </NavLink>
            </header>
            <ul className="nav__ul">
                <LiItem name={"Timeline"} />
                <LiItem name={"Projects"} />
            </ul>
            <div className="hamburger__wrapper">
                <input type="checkbox" name="" id="ham-btn" onChange={()=>{setHamburger(prevState => !prevState)}} ref={burgRef}/>
                <label htmlFor="ham-btn" id="hamburger"><div id="hamburger-base"></div>
                </label>
                <ul className={`hamburger__menu ${hamburger ? 'fadeIn' : 'fadeOut'}`}>
                <MobileLiItem name={"Timeline"} />
                <MobileLiItem name={"Projects"} />
                </ul>
            </div>

        </nav>
            <button id="scroll-btn" ref={topBtn} onClick={goTop}>Top</button>
            <RouteScrollTop />
        </>
    )
}

function LiItem({name}){
    return <li><NavLink to={'../' + name} className="lineAnimation" >{name}</NavLink></li>
}

function MobileLiItem({name}){
    return <li className="hamburger__li"><NavLink to={'../' + name} className="hamburger__a lineAnimation lineAnimation-mobile" >{name}</NavLink></li>
}