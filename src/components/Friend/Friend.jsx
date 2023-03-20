import css from './Friend.module.css'
import { BsPersonFillCheck } from "react-icons/bs";
import { BsPersonFillSlash } from "react-icons/bs";

export function Friend({ friend }) {
    const { avatar, name, isOnline } = friend;
    return <div className={css.friend}>
        <span className="status">{isOnline ? <BsPersonFillCheck/> : <BsPersonFillSlash/>}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </div>
    
}


