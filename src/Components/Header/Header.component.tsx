import React, { useEffect, useState } from "react";
import {ReactComponent as Logo} from '../../Assets/Logo/logo_bianco.svg';

import "./Header.style.scss";

export interface HeaderProps {

  tabs : Array<String>
  indexActive: number
  isHamCallback : () => void

}


export const Header : React.FC<HeaderProps> = (props) => {

  const {isHamCallback} = props
  const HEIGHT_NAV = 70;

  const [isHam, setisHam] = useState(false)

  const handleisHam = (e: any) => {
    setisHam(!isHam)

  }
  const {tabs, indexActive} = props;

  const handleClick = (e : any) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop


    window.scrollTo({
      left: 0,
      top: location - (HEIGHT_NAV),
    })
     setisHam(!isHam)
  }

  useEffect(() => {

    isHam && isHamCallback()

  }, [isHam])

  return (
    <header className="header">

      <div className="header_wrapper l-container l-container-padding">
        <Logo className="logo"/>
        <nav className={`header_menu menu ${isHam ? 'isHam' : ''}`}>
            <ul className="menuUl">
                {tabs.map((tab, index) => (
                  <li className="menuUl_li" key={index}> <a onClick={handleClick} href={`#${tab}`} className={`menuUl_a ${tabs[indexActive] === tab && "menuUl_a-active"}`}>{tab}</a></li> 
                ))}

            </ul>
        </nav>
        <div className="ham">

        <button onClick={ (e) => handleisHam(e)} className={`ham_btn ${isHam ? "opened" : ""}`}  aria-label="Main Menu">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>

         </div>

        </div>
    </header>
  );
};

