import React from 'react';
import {
    BlockForTextItem,
    TextItem,
    WrapperItem
} from "../../styled_components/HomeStyle";
import {useLocation} from "react-router-dom";
import ButtonsColorHome from "./ButtonsColorHome";

const ItemColor = ({color, edit, remove}) => {
    const location = useLocation()
    return (
        <WrapperItem gradient={`${color.color_one}, ${color.color_two}`} border={'1px solid #000'}>
            <BlockForTextItem>
                <TextItem>{color.color_one}</TextItem>
                <TextItem>{color.color_two}</TextItem>
            </BlockForTextItem>
            {location.pathname === `/edit/${color.id}` ? null : <ButtonsColorHome remove={remove} edit={edit} color={color}/>}
        </WrapperItem>
    );
};

export default ItemColor;
