import React from "react";
import {ReactComponent as Onda} from '../../Assets/OndeColorer/onda-bianco-grigio.svg';
import "./Divider.style.scss";
export interface DividerProps {
    onda?: string
}

export const Divider : React.FC<DividerProps> = (props) => {

const {onda = "normal"} = props
  return (
    <div className={`divider ${onda === "inverse" ? "divider-inverse" : ""}`}>
        <Onda  className={`divider_onda ${onda === "inverse" ? "divider_onda-inverse" : ""}`}/>
        <h2 className={`divider_title font_robotoMono ${onda === "inverse" ? "divider_title-inverse" : ""}`}> Sed diam nonummy nibh euismod tincidunt? </h2>
    </div>
  );
};

