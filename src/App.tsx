import React, { useState, useLayoutEffect, useEffect } from "react"
import './App.scss';
import { Header, Slider, Articles, Timeline, Cards, Footer, Divider } from './Components';

function App() {

  const [scrolled, setScrolled] = useState(false)
  const tabs = ["slider","news", "percorso", "tab"]


  useLayoutEffect(() => {
 
    const handleScroll = (e:Event) => {

      setScrolled(window.scrollY > 0)
      window.scrollY > 0 ? document.documentElement.style.setProperty("--height-header", "70px") : document.documentElement.style.setProperty("--height-header", "120px")
      window.scrollY > 0 ? document.documentElement.style.setProperty("--height-logo", "40px") : document.documentElement.style.setProperty("--height-logo", "60px")

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className={`${scrolled ? "isScrolled" : ""} main`}>
      <Header tabs={tabs}/>
      <Slider/>
      <Articles/>
      <Divider/>
      <Timeline/>
      <Divider onda="inverse"/>
      <Cards/>
      <Footer/>
    </main>
  );
}

export default App;
