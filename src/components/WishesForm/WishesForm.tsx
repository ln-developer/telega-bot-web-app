import React from "react";
import './WishesForm.css';

interface WishesModel {
    setWishes: (wishes: string) => void;
}

const WishesForm = (props: WishesModel) => {

    const onInput = (event: any) => {
        props.setWishes(event.target.value);
    }

    return (
        <div className="wishes-form_container">
            <h5 className="wishes-form_header">Тут можешь оставить подсказку для своего Тайного Санты</h5>
            <input type="text" onChange={onInput} className="wishes-form_control" placeholder="Подсказка"/>
        </div>
    )
}

export default WishesForm;
