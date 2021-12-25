import React from 'react';
import {RemoveEditButton} from "../../styled_components/HomeStyle";
import {Cross, Pencil} from "../../utils/Font Awesome/Solid";

const ButtonsColorHome = ({remove, edit, color}) => {
    return (
        <>
            <RemoveEditButton positionRight={'-10px'} onClick={() => remove(color)}>{Cross}</RemoveEditButton>
            <RemoveEditButton positionLeft={'-10px'} onClick={() => edit(color)}>{Pencil}</RemoveEditButton>
        </>
    );
};

export default ButtonsColorHome;
