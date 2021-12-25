import React from 'react';
import {Input, WrapperInputs} from "../../styled_components/wrapper";


const Inputs = ({check, color}) => {
    return (
        <WrapperInputs>
            <Input type={'text'} placeholder={'#4040aa'} value={color?.color_one} onChange={e => check(e, true)}/>
            <Input type={'text'} placeholder={'#000'} value={color?.color_two} onChange={e => check(e, false)}/>
        </WrapperInputs>
    );
};

export default Inputs;
