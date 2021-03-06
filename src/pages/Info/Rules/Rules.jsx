import React from "react";
import Style from "./Style/Rules.module.scss";

export const Rules = () => {
  return (
    <div className={Style.rules}>
      <div className="container-body">
        <div className={Style.rules__row}>
            <div className={Style.rules__game}>
                <div className={Style.rules__title}><span>Правила игры:</span></div>
                <p><span>1.</span> Все мутятся в начале раунда и размучиваются во время голосования. </p>
                <p><span>2.</span>  На голосованиях следует говорить по очереди. Начинает тот, кто нашел тело или нажал на кнопку. Следующий начинает говорить только тогда, когда закончил предыдущий.</p>
                <p><span>3.</span>  Нельзя говорить после окончания голосования независимо от того, какая у вас роль. </p>
                <p><span>4.</span>  Предатели и мирные обязаны играть до конца, не сливать инфу после голосования, пытаться защищаться до последнего. </p>
                <p><span>5.</span>  Нельзя перебивать и оскорблять игроков. Дождитесь пока закончит тот, кто говорит или попросите слово. </p>
                <p><span>6.</span>  Запрещено писать информацию в текстовый каналах, связанную с  игрой,  будучи игроком живым, мертвым. </p>
                <p><span>7.</span>  Относитесь с уважением друг к другу, даже если кто-то очевидно врет. Помните, что у предателя смысл игры в том, чтобы обмануть вас и ввести в заблуждение окружающих. Не пытайтесь кого-то заткнуть, перекричать, обозвать или унизить </p>
                <p><span>8.</span>  Если вы играете без микрофона, вы обязаны предупредить об этом всех и согласовать это. Если вы этого не сделали, либо в случае отказа в согласовании вам вы не вышли из комнаты, то игроки в праве написать на вас жалобу. </p>
                <p><span>9.</span>  Если у вас старая версия игры в отличии от других игроков, то Вы обязаны об этом всех уведомить до начала игры. Если большинство игроков не против этого, то Вы можете спокойно играть, если большинство или половина игроков против – Вам запрещается играть в данной комнате. </p>
                <p>Меры наказаний: Устное пред. , Предупреждение , бан. <span>🌀Moderator🌀  ✅Helper✅  выдает наказание на свое усмотрение</span></p>
                <p>**Данные правила распространяются на основные голосовые комнаты, доступные для всех. Если они вас не устраивают, вы можете создать приватную комнату  на этом сервере, которую будете модерировать сами.  В случае, когда произошла крайняя ситуация (Читер , неадекват и т.д), то вы можете написать на сервер в #❗・жалобы</p>
            </div>
            <div className={Style.rules__site}>
            <div className={Style.rules__title}><span>Правила Сайта:</span></div>
                <p><span>1.</span>Незнание правил не освобождает от ответственности.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
