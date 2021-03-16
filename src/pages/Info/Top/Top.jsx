import React, { useState, useEffect } from "react";
import Style from "./Style/Style.module.scss";
import { User } from "./User"
import API from '../../../utils/API';
import { Loader } from "../../../components/Loader/Loader"


export function Top() {
    const [rating, setRating] = useState(null);

    useEffect(()=> {
      API.get('/user')
      .then(result => {
        setRating(result.user)
      })
    },[])

    // if (!rating) {
    //     return (
    //       <Loader />
    //     )
    // }

    const Users = [
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
        {username: "Villka", points: "300", avatar:"#",},
    ]

    return (
        <div className={Style.top}>
          <div className="container-body">
            <div className={Style.top__row}>
              <div className={Style.top__title}>Таблица Лидеров</div>
              <div className={Style.top__tab}>
                  {Users.map((x, a) => {
                      return(
                          <User name={x.username} points={x.points} avatar={x.avatar} id={a + 1}/>
                      )
                  })}
              </div>
            </div>
          </div>
        </div>
    )
}