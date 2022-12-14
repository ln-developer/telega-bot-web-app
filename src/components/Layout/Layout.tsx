import React, {useCallback, useState} from "react";
import './Layout.css';
import CardList from "../CardList/CardList";
import WishesForm from "../WishesForm/WishesForm";
import {useTelegram} from "../../shared/hooks/useTelegram";

const Layout = () => {
    const { onClose, queryId } = useTelegram();

    const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const [gamer, setGamer] = useState<string | null>(null);
    const [wishes, setWishes] = useState<string>('');

    const onActive = (isActive: boolean) => {
        setIsActiveBtn(isActive);
    }

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const setGamerState = (name: string) => {
        setGamer(name);
    }

    const setWishesState = (wishes: string) => {
        setWishes(wishes);
    }

    const onSendData = useCallback(() => {
        const data = {
            gamer,
            wishes,
            queryId
        }

        fetch('http://185.10.184.67:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'unsafe-url',
            body: JSON.stringify(data)
        }).then(() => {
            console.log('CLOSE APP');
            onClose();
        })

    }, [gamer, wishes, onClose, queryId]);



    return (
        <div className="layout_container">
            {
                (currentStep === 1) &&
                    <div className="layout_hint">
                        Найди себя в списке, так я смогу занести тебя в базу данных участников
                    </div>
            }
            <div className="layout_content">
                {
                     currentStep === 1 ?
                        <CardList setGamerState={ setGamerState } onActive={ onActive } /> :
                        <WishesForm setWishes={ setWishesState }/>
                }
            </div>
            <div className="actions_container">
                {
                    (currentStep === 2) && (
                        <button
                            onClick={ prevStep }
                            className="layout_actions prev">
                            Назад
                        </button>
                    )
                }
                <button
                    onClick={ currentStep === 1 ? nextStep : onSendData }
                    disabled={ !isActiveBtn }
                    className={ 'layout_actions next ' + (isActiveBtn ? 'active' : 'disable') }>
                    { currentStep === 1 ? 'Выбрать' : 'Завершить' }
                </button>
            </div>
        </div>
    )
}

export default Layout;
