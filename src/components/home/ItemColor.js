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
        <WrapperItem gradient={`${color.color_one}, ${color.color_two}`}>
            <BlockForTextItem>
                <TextItem>{color.color_one}</TextItem>
                <TextItem>{color.color_two}</TextItem>
            </BlockForTextItem>
            <RemoveEditButton positionRight={'-10px'} onClick={() => remove(color)}>{Cross}</RemoveEditButton>
            <RemoveEditButton positionLeft={'-10px'} onClick={() => edit(color)}>{Pencil}</RemoveEditButton>
        </WrapperItem>
    );
};

export default ItemColor;
