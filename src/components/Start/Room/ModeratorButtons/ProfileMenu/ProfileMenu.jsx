import Style from "../../../Start.module.scss";

export const ProfileMenu = (props) => {
    return (
        <ul className={`${Style.profileMenu} profileMenu`}>
            <li className="profileMenu__button">#1</li>
            <li className="profileMenu__button">#2</li>
            <li className="profileMenu__button">#3</li>
            <li className="profileMenu__button">#4</li>
            <li className="profileMenu__button">#5</li>
            <li className="profileMenu__button">#6</li>
            <li className="profileMenu__button">#7</li>
            <li className="profileMenu__button">#8</li>
            <li className="profileMenu__button">#9</li>
            <li className="profileMenu__button">#10</li>
        </ul>
    );
};