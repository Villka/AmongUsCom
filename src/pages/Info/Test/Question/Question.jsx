import React from "react";
import Style from "./Style/Style.module.scss";
import { Check } from "./Check";

export const Question = (props) => {
  // const checkbox = "checkbox";
  // const radio = "radio";

  const Questions = props.answers.map( function(x, i){
      return { for:props.id, answer:props.answers[i], type:props.check }
  });


  return (
    <div className={Style.question}>
      <div className={Style.question__text}>
        <div className={Style.question__text_up}>
          <h3 className={Style.question__title}>
            {props.title}
          </h3>
          <h3 className={Style.question__num}>
            {props.num}#
            </h3>
        </div>
        <form className={Style.question__wrapper}>
          {Questions.map((item) => {
                if (item.answer !== undefined) {
                  return(
                    <Check for={item.for} answer={item.answer} type={item.type} />
                  )
                }
            })}
        </form>
      </div>
    </div>
  );
};
