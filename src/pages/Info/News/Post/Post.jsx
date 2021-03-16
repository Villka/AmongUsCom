import React from "react";
import Style from "./Style/Style.module.scss";

// export class Post extends React.Component {
//   render() {
//   return (
//     <div className={Style.post}>
//       <div className={Style.post__text}>
//         <div className={Style.post__text_up}>
//           <h3 className={Style.post__title}>Разнообразь свой геймплей</h3>
//           <h3 className={Style.post__time}>19.10.2020</h3>
//         </div>
//         <h4 id="subtitle" className={Style.post__subtitle}>
//           Создали для вас новую категорию "Mini-games", где вы сможете принять
//           участие в интересных режимах (Прятки и прочее). Для участия в
//           мини-играх вы должны взять роль @Mini-game , нажав на реакцию, в
//           канале #роли-инфо          Создали для вас новую категорию "Mini-games", где вы сможете принять
//           участие в интересных режимах (Прятки и прочее). Для участия в
//           мини-играх вы должны взять роль @Mini-game , нажав на реакцию, в
//           канале #роли-инфо          Создали для вас новую категорию "Mini-games", где вы сможете принять
//           участие в интересных режимах (Прятки и прочее). Для участия в
//           мини-играх вы должны взять роль @Mini-game , нажав на реакцию, в
//           канале #роли-инфо          Создали для вас новую категорию "Mini-games", где вы сможете принять
//           участие в интересных режимах (Прятки и прочее). Для участия в
//           мини-играх вы должны взять роль @Mini-game , нажав на реакцию, в
//           канале #роли-инфо          Создали для вас новую категорию "Mini-games", где вы сможете принять
//           участие в интересных режимах (Прятки и прочее). Для участия в
//           мини-играх вы должны взять роль @Mini-game , нажав на реакцию, в
//           канале #роли-инфо
//         </h4>
//       </div>
//       <h4 onClick={this.handleClick} className={Style.post__more}>Подробнее</h4>
//     </div>
//   );
//   }
// };



export const Post = (props) => {
  const handleClick = () =>{
    var foo = document.getElementById(props.id);
    if (foo.classList[1]) {
      foo.classList.remove(Style.post__active);
    } else {
      foo.classList.add(Style.post__active);
    }
  };
  return (
    <div className={Style.post}>
      <div className={Style.post__text}>
        <div className={Style.post__text_up}>
          <h3 className={Style.post__title}>{props.title}</h3>
          <h3 className={Style.post__time}>{props.data}</h3>
        </div>
        <h4 id={props.id} className={Style.post__subtitle}>
          {props.text}
        </h4>
      </div>
      <h4 onClick={handleClick} className={Style.post__more}>Подробнее</h4>
    </div>
  );
}