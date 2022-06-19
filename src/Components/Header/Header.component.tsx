import React from "react";
import {ReactComponent as Logo} from '../../Assets/Logo/logo_bianco.svg';

import "./Header.style.scss";

export interface HeaderProps {

  tabs : Array<String>
  indexActive: number

}



export const Header : React.FC<HeaderProps> = (props) => {
  const HEIGHT_NAV = 70;
  const {tabs, indexActive} = props;

  const handleClick = (e : any) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - (HEIGHT_NAV),
    })
  }

  return (
    <header className="header">

      <div className="header_wrapper l-container l-container-padding">
        <Logo className="logo"/>
        <nav className=" header_menu menu">
            <ul className="menuUl">
                {tabs.map((tab, index) => (
                  <li className="menuUl_li" key={index}> <a onClick={handleClick} href={`#${tab}`} className={`menuUl_a ${tabs[indexActive] === tab && "menuUl_a-active"}`}>{tab}</a></li> 
                ))}
            </ul>
        </nav>
        </div>
    </header>
  );
};

