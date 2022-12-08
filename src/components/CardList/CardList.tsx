import React, {useEffect, useState} from "react";
import {UserModel} from "../../shared/models/userModel";
import {EmploeeyList} from "../../shared/consts/emploeeyList";
import Card from "../Card/Card";
import './CardList.css';

interface LayoutPropsModel {
    onActive: (isActive: boolean) => void;
    setGamerState: (name: string) => void;
}

const CardList = (props: LayoutPropsModel) => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    useEffect(() => {
        props.onActive(Boolean(selectedUser));
        props.setGamerState(selectedUser ?? '');
    }, [selectedUser, props])

    const onSelect = (name: string) => {
        setSelectedUser(name);
    }

    return (
        <div className="card-list_container">
            {
                EmploeeyList.map((emploeey: UserModel, idx: number) => {
                    return (
                        <Card
                            isSelected={Boolean(selectedUser)}
                            user={ emploeey }
                            onSelect={ onSelect }
                            id={ idx }
                            key={ idx }
                            currentSelectedUser={ selectedUser }
                        />)
                })
            }
        </div>
    )
}

export default CardList;
