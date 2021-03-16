import Style from "../Style/Moderator.module.scss";
import React from "react";

class EditTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            qwesion1: '',
            qwesion2: '',
            qwesion3: '',
            qwesion4: '',
        };
    
       
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
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
        <div className={Style.moderator__content} onSubmit={this.handleSubmit}>
          <h2>Тест</h2>
            <div className={Style.moderator__title}>Вопрос</div>
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
            <div className={Style.moderator__title}>Ответы</div>
            <div className={Style.moderator__qwestions}>
                <input
                name="qwesion1"
                form="data"
                value={this.state.qwesion1}
                onChange={this.handleInputChange}
                className={`${Style.moderator__qwestion} input`}
                placeholder="#1"
                type="text"
                maxlength="1200"
                />
                <input
                name="qwesion2"
                form="data"
                value={this.state.qwesion2}
                onChange={this.handleInputChange}
                className={`${Style.moderator__qwestion} input`}
                placeholder="#2"
                type="text"
                maxlength="1200"
                />
                <input
                name="qwesion3"
                form="data"
                value={this.state.qwesion3}
                onChange={this.handleInputChange}
                className={`${Style.moderator__qwestion} input`}
                placeholder="#3"
                type="text"
                maxlength="1200"
                />
                <input
                name="qwesion4"
                form="data"
                value={this.state.qwesion4}
                onChange={this.handleInputChange}
                className={`${Style.moderator__qwestion} input`}
                placeholder="#4"
                type="text"
                maxlength="1200"
                />
            </div>
        </div>
        );
    }
};

export { EditTest };