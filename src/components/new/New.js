import React, {useState} from 'react';
import {addColor} from "../../redux/action/actionForColor";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ButtonRoute, NewPage, WrapperPages} from "../../styled_components/wrapper";
import Inputs from "../Edit&New&Home/Inputs";

const New = ({dis}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [hexColor, setHexColor] = useState({id: Date.now().toString(), color_one: '', color_two: ''});

    const pushColor = () => {
        dispatch(addColor(hexColor))
        setHexColor({id: Date.now().toString(), color_one: '', color_two: ''})
        history.push('/home');
    }

    const controlValue = (e, boolean) => {
        const value = e.target.value
        return boolean ? setHexColor({...hexColor, color_one: value}) : setHexColor({...hexColor, color_two: value})
    }

    const returnHome = () => history.push('/home')

    return (
        <WrapperPages>
            <NewPage>Add_New_Color</NewPage>
            <ButtonRoute onClick={returnHome}>Back_Home</ButtonRoute>
            <Inputs color={hexColor} check={controlValue}/>
            <ButtonRoute onClick={pushColor} disabled={dis(hexColor.color_one, hexColor.color_two)}>Save</ButtonRoute>
        </WrapperPages>
    );
};

export default New;
