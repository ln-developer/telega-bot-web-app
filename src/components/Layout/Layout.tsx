import React, {useState} from "react";
import './Layout.css';
import CardList from "../CardList/CardList";
import WishesForm from "../WishesForm/WishesForm";

interface MainStateModel {
    setWishesState: (wishes: string) => void;
    setGamerState: (name: string) => void;
}

// @ts-ignore
const tg = window.Telegram.WebApp;

const Layout = (props: MainStateModel) => {
    const [isActiveBtn, setIsActiveBtn] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const onActive = (isActive: boolean) => {
        setIsActiveBtn(isActive);
    }

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const onClose = () => {
        tg.close();
    }

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
                        <CardList setGamerState={ props.setGamerState } onActive={ onActive } /> :
                        <WishesForm setWishes={ props.setWishesState }/>
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
                    onClick={ currentStep === 1 ? nextStep : onClose }
                    disabled={ !isActiveBtn }
                    className={ 'layout_actions next ' + (isActiveBtn ? 'active' : 'disable') }>
                    { currentStep === 1 ? 'Выбрать' : 'Завершить' }
                </button>
            </div>
        </div>
    )
}

export default Layout;
