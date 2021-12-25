import React from 'react';
import {
    BlockForTextItem,
    RemoveEditButton,
    TextItem,
    WrapperItem
} from "../../styled_components/HomeStyle";
import {Cross, Pencil} from "../../utils/Font Awesome/Solid";

const ItemColor = ({color, edit, remove}) => {
    return (
        <WrapperItem gradient={`${color.first}, ${color.second}`}>
            <BlockForTextItem >
                <TextItem>{color.first}</TextItem>
                <TextItem>{color.second}</TextItem>
            </BlockForTextItem>
            <RemoveEditButton positionRight={'-10px'} onClick={() => remove(color)}>{Cross}</RemoveEditButton>
            <RemoveEditButton positionLeft={'-10px'} onClick={() => edit(color)}>{Pencil}</RemoveEditButton>
        </WrapperItem>
    );
};

export default ItemColor;
