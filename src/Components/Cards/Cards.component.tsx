import React, { useState } from "react";
import "./Cards.style.scss";
import { ReactComponent as Razzo } from '../../Assets/Tab/razzo.svg';
import { ReactComponent as Sveglia } from '../../Assets/Tab/sveglia.svg';
import { ReactComponent as Target } from '../../Assets/Tab/target.svg';
import { ReactComponent as Grafica } from '../../Assets/Tab/grafica_sfondo.svg';

export interface CardsProps {

}



export const Cards: React.FC<CardsProps> = (props) => {

  function getColorCard(color: string) {
    return `var(--color-${color})`
  }
  const [isShown, setIsShown] = useState(null);

  function handleOnMouseEnter(index: any) {
    setIsShown(index)
  }

  function handleOnMouseLeave() {
    setIsShown(null)
  }


  const dataCards = [
    {
      color: "rosa",
      img: <Sveglia className="card_svg" />,
      txt: "Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
      cta: "call to action"

    },
    {
      color: "gialla",
      img: <Target className="card_svg" />,
      txt: "Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
      cta: "call to action"

    },
    {
      color: "turchese",
      img: <Razzo className="card_svg" />,
      txt: "Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
      cta: "call to action"

    }
  ]

  return (
    <article id="tab" className="cards ">

      <div className="cards_container l-container l-container-padding l-grid">



        {dataCards.map((card, index) => (

          <div style={{ background: isShown === index ? getColorCard(card.color) : '', boxShadow: isShown === index ? 'none' : 'rgba(0, 0, 0, .1) 0 0 20px 10px' }} onMouseEnter={() => handleOnMouseEnter(index)} onMouseLeave={() => handleOnMouseLeave()} key={index} className="card l-grid_col l-grid_col-3">
            <header className="card_header">
              <h3 style={{ color: isShown === index ? '#FFF' : getColorCard(card.color) }} className="card_title">
                {`TAB ${card.color}`}
              </h3>
            </header>
            <div style={{ background: isShown === index ? '#FFF' : getColorCard(card.color) }} className="card_separator"></div>
            <div className="card_body">
              <div className="card_icon" >

                <div style={{ background: isShown === index ? getColorCard(card.color) : getColorCard(card.color) }} className="card_round"></div>

                {card.img}


              </div>
              <p style={{ color: isShown === index ? '#FFF' : getColorCard('black') }} className="card_txt">
                {card.txt}
              </p>

            </div>
            <footer className="card_footer">
              <button style={{ color: isShown === index ? getColorCard(card.color) : '#FFF', background: isShown === index ? '#FFF' : getColorCard(card.color) }} className={`card_cta btn btn_primary`}>
                {card.cta}
              </button>

            </footer>
          </div>
        ))}

      </div>
      <Grafica className="cards_decorator" />
    </article>
  );
};

