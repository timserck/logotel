import React from "react";
import  "./Footer.style.scss";
import {ReactComponent as Logo} from '../../Assets/Logo/logo_nero.svg';
import {ReactComponent as Fb} from '../../Assets/Social/fb.svg';
import {ReactComponent as Tw} from '../../Assets/Social/tw.svg';
import {ReactComponent as Ig} from '../../Assets/Social/ig.svg';
import {ReactComponent as Li} from '../../Assets/Social/li.svg';
import {ReactComponent as Yt} from '../../Assets/Social/yt.svg';
export interface FooterProps {

}

export const Footer : React.FC<FooterProps> = (props) => {

  const links = [
    {
      href: "news-1.jpg",
      txt: "Privacy policy",
    },
    {
      href: "news-1.jpg",
      txt: "Terms & conditions",
    },
    {
      href: "news-1.jpg",
      txt: "Cookies policy",
    },
    {
      href: "news-1.jpg",
      txt: "Copyrights Notification ",
    },

  ]

  const rss = [
    {
      href: "news-1.jpg",
      icon: <Fb/>,
    },
    {
      href: "news-1.jpg",
      icon:  <Tw/>,
    },
    {
      href: "news-1.jpg",
      icon:  <Ig/>,
    },
    {
      href: "news-1.jpg",
      icon:  <Li/>,
    },
    {
      href: "news-1.jpg",
      icon:  <Yt/>,
    },

  ]

  return (
    <footer className="footer">
      <div className="l-container l-container-padding footer_container">
        <div className="footer_left">
          <Logo className="footer_logo"/>
          <ul className="footer_links">
          {links.map((link , index)=> (
            <li key={index} className="footer_li">
              <a href={link.href} className="footer_a font_robotoMono">
              {link.txt} 
              </a>
            </li>
          ))}
          </ul>
          <p className="footer_credit">
          Copyright © 2020 Logotel. All rights reserved.
          </p>
        </div>
        <div className="footer_right">

          <p className="footer_title font_robotoMono">
          SEGUICI SUI SOCIAL:
          </p>
          <ul className="footer_rss">
          {rss.map((rs , index)=> (
            <li key={index} className="footer_rssLi">
              <a className="footer_rssA" href={rs.href} >
                {rs.icon}
              </a>
            </li>
          ))}
          </ul>

        </div>
        

      </div>

    </footer>
  );
};

