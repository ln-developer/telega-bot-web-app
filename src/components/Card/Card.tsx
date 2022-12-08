import React from "react";
import './Card.css';
import {UserModel} from "../../shared/models/userModel";

interface UserPropsModel {
    user: UserModel;
    id: number;
    isSelected: boolean;
    currentSelectedUser: string | null;
    onSelect: (name: string) => void;
}

const Card = (props: UserPropsModel) => {
    const onSelectHandler = () => {
        props.onSelect( props.user.name );
    }

    const initials = props.user.name.split(' ').map(item => item.substring(0, 1)).join('');

    return (
        <div
            className={ 'card_container ' + (props.user.name === props.currentSelectedUser ? 'active' : '') }
            onClick={ onSelectHandler }
        >
            {
                props.user.src ?
                    <img className="card_img" src={ props.user.src } alt={ props.user.name }/> :
                    <div className="card_img_default">{ initials }</div>
            }
            <div className="card_title">{ props.user.name }</div>
        </div>
    );
};

export default Card;
