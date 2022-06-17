import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ReactComponent as ChevronLeft} from '../../Assets/Slider/chevron_sinistra.svg';
import {ReactComponent as ChevronRight} from '../../Assets/Slider/chevron_destra.svg';
import  "./Slider.style.scss";


export interface SliderProps {

}

export const Slider : React.FC<SliderProps> = (props) => {


  const slides = [
    {
      img: "slider-1.jpg",
      alt: "https://picsum.photos/350/150",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      txt : "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper."
    },
    {
      img: "slider-2.jpg",
      alt: "https://picsum.photos/350/150",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      txt : "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper."
    },
    {
      img: "slider-3.jpg",
      alt: "https://picsum.photos/350/150",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      txt : "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper."
    },
    {
      img: "slider-4.jpg",
      alt: "https://picsum.photos/350/150",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      txt : "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper."
    }

  ]

  const config = {
    showArrows : true,
    showThumbs : false,
    showStatus : false,
    showIndicators: true,

    renderArrowPrev : (onClickHandler :any, hasPrev : boolean, label : string) => {
      return (
        hasPrev && (
          <button className="arrow arrow_prev" type="button" onClick={onClickHandler} title={label}>
               <ChevronLeft/>
          </button>
      )
      )
    },
  renderArrowNext : (onClickHandler : any, hasNext: boolean, label:string) => {
    return(
      hasNext && (
          <button className="arrow arrow_next" type="button" onClick={onClickHandler} title={label}>
              <ChevronRight/>
          </button>
      )
      )
    },

    renderIndicator : (onClickHandler : any, isSelected : boolean, index : number, label :  string) => {
      return (
          <li
          className="control-dot"
              value={index}
              key={index}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
              >
                <button className="display-2"  disabled={isSelected ? true : false}  onClick={onClickHandler}
              onKeyDown={onClickHandler}>{index + 1}</button>
              </li>
      );
  }
  }
  return (
    <section id="slider" className="slider">
        <Carousel  {...config} >
        {slides.map((slide , index)=> (
            <div key={index} className='sliderC_slide slide'>
              <img className='slide_img' src={`${process.env.PUBLIC_URL}/images/slider/${slide.img}`} alt={slide.alt} />
              <div className="slide_wrapper">
                <h1 className='slide_title display-1'>{slide.title}</h1>
                <p className='slide_txt display-2 '>{slide.txt}</p>
                <button className="btn btn_primary btn_primary-red display-2">Call to Action</button>
              </div>
            </div>
          ))}
        </Carousel>

    </section>
  );
};

