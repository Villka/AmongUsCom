import React from "react";
import { Profile } from "./Profile/Profile";
import Style from "./Header.module.scss";
import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";
import { NavSmall } from "./Nav/NavSmall";
import {LogIn} from './LogIn/Login';
import API from '../../utils/API';

import {GeneralContext} from '../../GeneralContext';

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      user: null
    }
  }

  MiniProfile(props) {
    const user = props.user;
    //const user = {avatar:'https://cdn.discordapp.com/avatars/195567582349099009/2773db18cc8e6d911237a7f179d11fa0.webp?size=128',username:'Villka',points:'715213'};
    if (user) {
      return <Profile user={user}/>;
    } else {
      return <LogIn isLoggedIn={props.isLoggedIn}/>;
    }
  };

  render() {
    return (
      <header className={Style.header}>
        <div className="container">
          <div className={Style.header__row}>
            <GeneralContext.Consumer>
              {state => <>
                <Logo />
                <NavSmall />
                <Nav />
                <this.MiniProfile user={state.user} isLoggedIn={state.isLoggedIn}/> 
              </>}
            </GeneralContext.Consumer>
          </div>
        </div>
      </header>
    );
  }
}

// export const Header = () => {
//   return (
//     <header className={Style.header}>
//       <div className="container">
//         <div className={Style.header__row}>
//           <Logo />
//           <Nav />
//           <Profile />
//           {/* <LogIn/> */}
//         </div>
//       </div>
//     </header>
//   );
// };
  