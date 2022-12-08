import React, {useState} from "react";
import './Layout.css';
import CardList from "../CardList/CardList";
import WishesForm from "../WishesForm/WishesForm";

interface MainStateModel {
    setWishesState: (wishes: string) => void;
    setGamerState: (name: string) => void;
}

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

    return (
        <div className="layout_container">
            <div className="layout_content">
                {
                     currentStep === 1 ?
                        <CardList setGamerState={props.setGamerState} onActive={onActive} /> :
                        <WishesForm setWishes={props.setWishesState}/>
                }
            </div>
            <div className="actions_container">
                {
                    (currentStep === 2) && (
                        <button
                            onClick={prevStep}
                            className="layout_actions prev">
                            Назад
                        </button>
                    )
                }
                <button
                    onClick={nextStep}
                    disabled={!isActiveBtn}
                    className={'layout_actions next ' + (isActiveBtn ? 'active' : 'disable')}>
                    { currentStep === 1 ? 'Выбрать' : 'Завершить' }
                </button>
            </div>
        </div>
    )
}

export default Layout;
