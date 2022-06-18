import React, {useState} from "react";
import {ReactComponent as Logo} from '../../Assets/Logo/logo_bianco.svg';

import "./Header.style.scss";

export interface HeaderProps {

  tabs : Array<String>

}

export const Header : React.FC<HeaderProps> = (props) => {

  const {tabs} = props;

  const [currentSection, setCurrentSection] = useState("slider")

  return (
    <header className="header">

      <div className="header_wrapper l-container l-container-padding">
        <Logo className="logo"/>
        <nav className=" header_menu menu">
            <ul className="menuUl">
                {tabs.map((tab, index) => (
                  <li className="menuUl_li" key={index}> <a href={`#${tab}`} className={`menuUl_a ${currentSection === tab && "menuUl_a-active"}`}>{tab}</a></li> 
                ))}
            </ul>
        </nav>
        </div>
    </header>
  );
};

