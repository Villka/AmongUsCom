import React, { ChangeEvent, FormEvent } from "react";
import Style from "../../Start.module.scss";
import { Checkbox } from "../../../Checkbox/Checkbox";
import {GeneralContext, GeneralState} from '../../../../GeneralContext';

export class EndGame extends React.Component<any,any> {

  constructor(props: any) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: FormEvent) {
    const context = this.context as GeneralState; 
    const reason = this.state.value;
    context.socket.emit('cancelGame', reason)

    e.preventDefault();
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <GeneralContext.Consumer>
        {(state: any) => state.isHost &&
      <form onSubmit={this.handleSubmit} className={`${Style.start__end_game} ${Style.end_game}`}>
        <input
          className={`${Style.end_game__input} input`}
          placeholder="Причина отмены..."
          type="text"
          name="reason"
          value={this.state.value} 
          onChange={this.handleChange}
        />
        <div className={Style.end_game__buttons}>
          <div className={Style.end_game__up}>
            {/* <div className={`${Style.end_game__button} button-purple`}>
              Отменить игру
            </div> */}
            <Checkbox id="cbx1">Игра отменена согласно <a href="/info/rules" target="_blank">правилам</a></Checkbox>
            <input type="submit" value="Отменить игру" className={`${Style.end_game__button} button-purple`}/>
          </div>
        </div>
      </form>
        }
      </GeneralContext.Consumer>
    );
  }
}
EndGame.contextType = GeneralContext;