import React, { useState, useLayoutEffect, useEffect } from "react"
import './App.scss';
import { Header, Slider, Articles, Timeline, Cards, Footer, Divider } from './Components';
import useDeviceDetect from "./Hooks/useDeviceDetect";
function App() {
  const { isMobile } = useDeviceDetect();
  const TABS = ["slider","news", "percorso", "tab"]
  const HEIGHT_NAV = 70;
  const [isHam, setIsHam] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0)

  const [sectionOffsets, setSectionOffsets] = useState([] as any)
 
  const getOffsetTopOfSections = () => {
    const offsets : Array<number| null> = []
    
    TABS.forEach(tab => {
        const section = document.querySelector<HTMLElement>(`#${tab}`);
        if(section){
          offsets.push(section?.offsetTop - (HEIGHT_NAV * 2))
        }
       
    });
    offsets.push(document.body.scrollHeight)
    setSectionOffsets(offsets)
  }

  function isHamCallback(){
    setIsHam(!isHam)
  }


useEffect(() => {
  getOffsetTopOfSections()
}, [])



  useLayoutEffect(() => {

    

    const handleScroll = (e:Event) => {

      setScrolled(window.scrollY > 0)
     !isMobile &&  window.scrollY > 0 ? document.documentElement.style.setProperty("--height-header", "70px") : document.documentElement.style.setProperty("--height-header", "120px")
     !isMobile && window.scrollY > 0 ? document.documentElement.style.setProperty("--height-logo", "40px") : document.documentElement.style.setProperty("--height-logo", "60px")

      const currentIndex = sectionOffsets.findIndex((n: Number) => n >= window.scrollY) - 1
      const currentSection = currentIndex === -1 ? 0 : currentIndex

      setCurrentSection(currentSection)
    }



    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", getOffsetTopOfSections)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('resize', getOffsetTopOfSections);
    }
  }, [sectionOffsets])

  return (
    <main className={`${scrolled ? "isScrolled" : ""} main`}>
      <Header isMobile={isMobile}  tabs={TABS} indexActive={currentSection} isHamCallback={isHamCallback}/>
      <Slider  />
      <Articles />
      <Divider />
      <Timeline  />
      <Divider  onda="inverse"/>
      <Cards />
      <Footer/>
    </main>
  );
}

export default App;