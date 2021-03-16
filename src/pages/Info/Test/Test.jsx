import React, {useEffect, useState} from "react";
import Style from "./Style/Style.module.scss";
import { Question } from "./Question/Question";
import API from '../../../utils/API';
import { Loader } from "../../../components/Loader/Loader"

export const Test = () => {

  const [questions, setQuestions] = useState(null);
  const [sent, setSent] = useState(false);
  const [completed, setCompleted] = useState(false);

  function setAnswers(id, answers) {
    const question = questions.filter(q => q.id === id);
    question.answers = answers;
    setQuestions(...questions.filter(q => q.id !== id), question);
  }

  function sendAnswers() {
    const answers = [];
    questions.forEach(question => {
      answers.push({id: question.id, answers: question.answers});
    })
    API.post('/test/answers', answers)
    .then(data => {
      setSent(true);
      setCompleted(data.completed);
    })
  }

  useEffect(() => {
    API.get('/test/questions')
    .then(result => {
      let q = result.questions;
      q.forEach(question => {
        // question.answers = [];
        question.setAnswers = (ans) => {setAnswers(q.id, ans)}
      })
      setQuestions(q);
    }, (error => {
      console.log("Nope!")
    })  )
  }, [])

  const handleSubmit = () => {

  }

  const Questions = [
    { title:"Где начинается задание по выбросу мусора? Назовитре 2 места",
      id: 1,
      answers:[
        "Хранилище",
        "Кислород",
        "Столовая",
        "Навигация",
      ],
      check:[
        "checkbox",
      ]
    },
    { title:"С какого люка можно переместиться в коридор возле навигации и в админку?",
      id:2,
      answers:[
        "Столовая",
        "Щиты",
        "Оружейная",
      ],
      check:[
        "radio",
      ]
    },
    { title:"Где нельзя скачать файлы?",
      id:3,
      answers:[
        "Админка",
        "Навигация",
        "Столовая",
        "Оружейная"
      ],
      check:[
        "radio",
      ]
    },
    { title:"Какой вход не видно на камерах?",
      id:4,
      answers:[
        "Вход в реактор",
        "Вход в электричество",
        "Вход в навигацию",
        "Вход в мед.блок"
      ],
      check:[
        "radio",
      ]
    },
    { title:"Какое возможное максимальное количество заданий на первой карте?",
      id:5,
      answers:[
        "1 Обычных. 4 Длинных. 6 Коротких",
        "2 Обычных. 3 Длинных. 5 Коротких",
        "2 Обычных. 1 Длинных. 4 Коротких",
        "2 Обычных. 2 Длинных. 3 Коротких"
      ],
      check:[
        "radio",
      ]
    },
    { title:"Как в админке отображается убийство-труп?",
      id:6,
      answers:[
        "Просто остается в той же комнате",
        "Не отображаются",
        "Моргает и остается",
        "Моргает и изчезает"
      ],
      check:[
        "radio",
      ]
    },
    { title:"В каком случае откатывается время на убийство?",
      id:7,
      answers:[
        "Стоя за столом администрации",
        "На карте саботажа",
        "Вентиляция",
        "На камерах"
      ],
      check:[
        "radio",
      ]
    },
    { title:"Какой откат на первое убийство?",
      id:8,
      answers:[
        "10 секунд",
        "20 секунд",
        "Выставленное время в настройках",
        "15 секунд",
        "5 секунд"
      ],
      check:[
        "radio",
      ]
    },
    { title:"Что обозначает слово 'Красный'?",
      id:9,
      answers:[
        "Подозрительный",
        "Член экипажа",
        "Неизвестный",
        "Предатель"
      ],
      check:[
        "radio",
      ]
    },
    { title:"Какого задания нет в связи (communications)?",
      id:10,
      answers:[
        "Скачивание данных",
        "Перевернуть предохранитель",
        "Провода",
      ],
      check:[
        "radio",
      ]
    }
]
// console.log(Questions[0].answer[0])
  // if (!questions) {
  //   return (
  //     <Loader />
  //   )
  // }


  if (sent) {
    if (completed) {
      return(<div>ПОЗДРАВЛЯЕМ ТЫ ПРОШЕЛ</div>)
    }
    else {
      return(<div>ЛОХ НЕ ПРОШЕЛ</div>)
    }
  }

  return (
    <div className={Style.test}>
      <div className="container-body">
        <form className={Style.test__row}>
        {Questions.map((x, num) => {
                return(
                    <Question title={x.title} id={x.id} num={num + 1} answers={x.answers} check={x.check}/>
                )
            })}
          <input onSubmit={handleSubmit} className={`${Style.test__submit} button-purple`} type="submit" value="Отправить"/>
        </form>
      </div>
    </div>
  );
};
