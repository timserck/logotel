import React from "react";
import "./Timeline.style.scss";

import {ReactComponent as Step1} from '../..//Assets/Timeline/icon-1.svg';
import {ReactComponent as Step2} from '../..//Assets/Timeline/icon-2.svg';
import {ReactComponent as Step3} from '../..//Assets/Timeline/icon-3.svg';
import {ReactComponent as Step4} from '../..//Assets/Timeline/icon-4.svg';
import {ReactComponent as Step5} from '../..//Assets/Timeline/icon-5.svg';
import {ReactComponent as Step6} from '../..//Assets/Timeline/icon-6.svg';

export interface TimelineProps {
}

export const Timeline: React.FC<TimelineProps> = (props) => {

  const steps = [
    {
      name: "Lorem Ipsum",
      icon: <Step1/>,
      description: {
        title: "title",
        txts : [
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",

        ]

      }
    },
    {
      name: "Lorem Ipsum",
      icon: <Step2/>,
      description: {
        title: "title",
        txts : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",

       ]
      }
    },
    {
      name: "Lorem Ipsum",
      icon: <Step3/>,
      description: {
        title: "title",
        txts : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",

       ]
      }
    },
    {
      name: "Lorem Ipsum",
      icon: <Step4/>,
      description: {
        title: "title",
        txts : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",

       ]
      }
    },
    {
      name: "Lorem",
      icon: <Step5/>,
      description: {
        title: "title",
        txts : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",

       ]
      }
    },
    {
      name: "Lorem",
      icon: <Step6/>,
      description: {
        title: "title",
        txts : [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate sunt earum consectetur ducimus, hic fuga! Blanditiis aut velit reprehenderit, ducimus tenetur deleniti, ea vitae nihil architecto excepturi quisquam adipisci?",

       ]
      }
    }

  ]

  return (
    <section className="section section-timeline timeline">
      <div className="timeline_container l-container ">
        {steps.map((step, index) => (
          <details key={index} className='details'>
            <summary className="details_summary">
              <div className="details_pipe"/>
              
              <div className="details_icon">
              <h3 className="details_title font_robotoMono"><span className="details_title--index font_robotoMono">{index + 1}.</span>{step.name}</h3>
              {step.icon}
              </div>
              
              </summary>
            <div className="details_data">
              <h3 className="details_subTitle font_robotoMono">{step.description.title}</h3>
              {step.description.txts.map((txt, index) => (
                <p key={index} className="details_txt">{txt}</p>
              ))}
            </div>
          </details>
        ))}


      </div>
    </section>
  );
};

