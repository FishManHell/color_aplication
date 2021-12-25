import React, {useState} from 'react';
import {addColor} from "../../redux/action/actionForColor";
import {regHex} from "../../utils/reg/regHex";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const New = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [hexColor, setHexColor] = useState({id: Date.now().toString(), color_one: '', color_two: ''});

    const pushColor = () => { // кидает в массив obj - цвет и перенаправляет на home
        dispatch(addColor(hexColor))
        setHexColor({id: Date.now().toString(), color_one: '', color_two: ''})
        history.push('/home');
    }

    const checkReg = () => { // проверяет регуляркой подходит ли цвет или нет
        const color_one = hexColor.color_one
        const color_two = hexColor.color_two
        return regHex.test(color_one) && regHex.test(color_two) ? pushColor() : alert('there is no such color');
    }

    const controlValue = (e, boolean) => {
        const value = e.target.value
        return boolean ? setHexColor({...hexColor, color_one: value}) : setHexColor({...hexColor, color_two: value})
    }

    return (
        <div>
            <input type="text" value={hexColor.color_one} onChange={e => controlValue(e, true)}/>
            <input type="text" value={hexColor.color_two} onChange={e => controlValue(e, false)}/>
            <button onClick={checkReg} disabled={!hexColor.color_one.match(regHex) || !hexColor.color_two.match(regHex)}>Edit</button>
        </div>
    );
};

export default New;
