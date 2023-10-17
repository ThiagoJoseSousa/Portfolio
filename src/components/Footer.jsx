import logo from '../assets/t.png'
import { Link } from 'react-router-dom'

export default function Footer (){
    return <footer className="footer">
    <div className="footer__wrapper">
    <div className="footer__logo">
        <img src={logo} alt="logo" className="logo__img"/>
        <h3 className="margin-medium medium-title">
        Thiago José
        </h3>
    </div>
    <div className="footer__list">
        <span>
        <h3 className="medium-title">Navigation</h3>
            <ul>
                <li><Link>Timeline</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>About</Link></li>
            </ul>
        </span>

    </div>
    <div className="footer__list">
    <span>
        <h3 className="medium-title">Contact</h3>
        <ul>

            <li><a href="mailto:imigrationstudy@gmail.com">imigrationstudy@gmail.com</a></li>
            <li><a href="tel:+5511942553889">+55 11 94255 3889</a></li>
            <li><a href="https://maps.app.goo.gl/3VgGCDrZUiDSuqjs8">Carapicuíba, São Paulo - Brazil</a></li>
        </ul>
    </span>
    </div>
    </div>
    <div className="footer__rights">
        <span>
        © 2023 Thiago José | All rights.
        </span>

        <span>
            <span></span>
            <span></span>
        </span>
    </div>
</footer>
    }