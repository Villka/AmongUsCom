import Style from "../Style/Moderator.module.scss";
import React from "react";

export default class EditNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };

   
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleSubmit(event) {

    console.log(this.state);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className={Style.moderator__content}>
        <h2>Новости</h2>
        <div className={Style.moderator__title}>Заголовок</div>
        <input
        name="title"
        form="data"
        value={this.state.title}
        onChange={this.handleInputChange}
        className={`${Style.moderator__input} input`}
        placeholder="Пару слов по теме..."
        type="text"
        maxlength="1200"
        />
        <div className={Style.moderator__title}>Текст</div>
        <textarea
        name="text"
        form="data"
        value={this.state.text}
        onChange={this.handleInputChange}
        className={`${Style.moderator__input} ${Style.moderator__editNews} input`}
        placeholder="Не будь скучным..."
        type="text"
        maxlength="1200"
        />
      </div>
    );
  }
};