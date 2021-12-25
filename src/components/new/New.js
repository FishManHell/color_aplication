import React, {useState} from 'react';
import {addColor} from "../../redux/action/actionForColor";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ButtonRoute, NewPage, WrapperPages} from "../../styled_components/wrapper";
import Inputs from "../edit/Inputs";

const New = ({dis}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [hexColor, setHexColor] = useState({id: Date.now().toString(), color_one: '', color_two: ''});

    const pushColor = () => { // кидает в массив obj - цвет и перенаправляет на home
        dispatch(addColor(hexColor))
        setHexColor({id: Date.now().toString(), color_one: '', color_two: ''})
        history.push('/home');
    }

    const controlValue = (e, boolean) => {
        const value = e.target.value
        return boolean ? setHexColor({...hexColor, color_one: value}) : setHexColor({...hexColor, color_two: value})
    }

    return (
        <WrapperPages>
            <NewPage>Add_New_Color</NewPage>
            <Inputs color={hexColor} check={controlValue}/>
            <ButtonRoute onClick={pushColor} disabled={dis(hexColor.color_one, hexColor.color_two)}>Edit</ButtonRoute>
        </WrapperPages>
    );
};

export default New;
