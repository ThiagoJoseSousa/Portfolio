import { NavLink } from "react-router-dom";
import logo from "../assets/t.png"
import { useEffect, useRef, useState } from "react";

export default function Navbar(){
    const [hamburger, setHamburger] = useState();
    const navRef=useRef();
    const burgRef= useRef();
    useEffect(()=>{
        let lastScrollTop=0;

        window.addEventListener("scroll", function(){
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
            lastScrollTop = scrollTop;
            burgRef.current.checked=false;
            setHamburger(false)
        })
    },[])
    return (
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
                <LiItem name={"About"} />
            </ul>
            <div className="hamburger__wrapper">
                <input type="checkbox" name="" id="ham-btn" onChange={()=>{setHamburger(prevState => !prevState)}} ref={burgRef}/>
                <label htmlFor="ham-btn" id="hamburger"><div id="hamburger-base"></div>
                </label>
                <ul className={`hamburger__menu ${hamburger ? 'fadeIn' : 'fadeOut'}`}>
                <MobileLiItem name={"Timeline"} />
                <MobileLiItem name={"Projects"} />
                <MobileLiItem name={"About"} /></ul>
            </div>
        </nav>
    )
}

function LiItem({name}){
    return <li><NavLink to={'../' + name} className="lineAnimation" >{name}</NavLink></li>
}

function MobileLiItem({name}){
    return <li className="hamburger__li"><NavLink to={name} className="hamburger__a lineAnimation lineAnimation-mobile" >{name}</NavLink></li>
}