import React, {createContext} from 'react';
import API from './utils/API';

import Cookies from 'js-cookie';

import io from 'socket.io-client'
import context from 'react-bootstrap/esm/AccordionContext';


export const GeneralContext = createContext({});

export interface GeneralState {
    user: any;
    isLoggedIn?: boolean;
    isHost?: boolean;
    setHost: (state: boolean) => void;
    game: {
        //user state
        message: string,
        //game state
        game?: string
    };
    setGame: (game: any) => void;
    client?: string;
    players?: [any];
    setPlayers: (players: any) => void;
    room?: any;
    setRoom: (room: any) => void;
    alreadyInGame?: boolean;
    setAlreadyInGame: (state: boolean) => void;
    //lookingForAGame?: boolean;
    setState: (state: any) => void;
    socket: SocketIOClient.Socket;
    loaded: boolean;
}

const socket = io();

export class Contextor extends React.Component<any, GeneralState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loaded: false,
            socket,
            user: {
                avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAMFBMVEX09PTMzMz39/fOzs7w8PDQ0NDz8/PW1tbo6OjJycns7Ozl5eXh4eHZ2dnf39/T09MBTNBqAAAB5klEQVR4nO3b3W6iUBSAUX5FQJ33f9sRRQQ61IM3JLPXuqK2JPJlY07wNMsAAAAAAAAAAAAAAAAAAAAAACCaYr+j3/Ixuqbe69od/aYPUFzafL/2Em+sum9C3VOFm6qiuV92udOQqok2VMX9sssqO+1S3UvV4UoNI7X3ooe8SiWdFLxUkXVdlXZS8FK3Mm/z+pxQIHipP+24Uko4KXSpW5u+UgpdqnovKj+vlEKXOr+X6vVp/UfV6oM+dKn+Xapcl6rKcpkqdKlfZqoauixShS51KqdS12WD6vGbxVSFLvV++NIu77SqHidt9nLoUlnRjOupfpGgmmZtNlWxS2VFX7dt2XQboeZTFbxUNqwGTqvPqHr+9G5KpdTafKIexlRKrfwI9fqsUur5yutgeevNUyk1/HxrxqOfEzXdgEo9llXt9XH0r4l6TZVSz/VnOzxM2AqVt2elpoX6PdXGrafUeHx51Wi2Jkqpx2HS9+5KpW5QUCp1J0f4UslbXsKXOqdueQlfqlfqA6VSKZVKqVRKpZq+xapSnYKX2ndSyFKlUmmGi8675Fvvqcsjlhp2WeebT6O2XaOV+nrnftqO0P9Kn3/Tqj/6bR+hujV73QJO1MA/rQEAAAAAAAAAAAAAAAAAAAAAwGd/AdrYE2FI58bQAAAAAElFTkSuQmCC",
                username: "...",
                is_editor: true,
            },
            game: {
                message: "OFFLINE"
            },
            client: Cookies.get('among-client'),
            setPlayers: (players) => {
                if (this.state.players !== players) {
                    this.setState({
                        ...this.state,
                        players
                    })
                }
            },
            setHost: (isHost) => {
                if (isHost !== this.state.isHost) {
                    this.setState({
                        ...this.state,
                        isHost
                    })
                }
            },
            setRoom: (room) => {
                if (room !== this.state.room) {
                    this.setState({
                        ...this.state,
                        room
                    })
                }
            },
            setGame: (game) => {
                if (game !== this.state.game) {
                    this.setState({
                        ...this.state,
                        game
                    })
                }
            },
            setAlreadyInGame: (alreadyInGame) => {
                if (alreadyInGame !== this.state.alreadyInGame) {
                    this.setState({
                        ...this.state,
                        alreadyInGame
                    })
                }
            },
            setState: (state) => {
                this.setState({
                    ...this.state,
                    ...state
                })
            }
        }
        if (this.state.client) {
            console.log('using among-app client!');
        }
    }
    fetchData = () => {
        const fetchUser = API.get('/user');
        const fetchGame = API.get('/game/status');
        
        Promise.all([fetchUser, fetchGame])
        .then(([user, game]) => {
            console.log(user.data);
            const isLoggedIn = !Boolean(user.data.error);
            this.setState({
            ...this.state,
            user: user.data.user,
            game: game.data,
            isLoggedIn,
            loaded: true
          })
        })
    }

    componentDidMount() {
        this.fetchData();
        setTimeout(() => {
            if (this.state.socket) {
                console.log('connected socket id ' + this.state.socket.id);
            }
        }, 1000)

        this.state.socket.on('roomCodeSet', (code: string) => {
            console.log('room code was changed');
            this.setState({room: {
              ...this.state.room,
              code
            }})
        })
    }

    render() {
        return <GeneralContext.Provider value={this.state}>
            {this.props.children}
        </GeneralContext.Provider>
    }
}