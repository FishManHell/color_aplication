import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addColor} from "../../redux/action/actionForColor";
import {useHistory} from "react-router-dom";

const New = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [herColor, setHexColor] = useState({first: '', second: ''});
    const regHex =  /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i

    const returnColor = () => {
        dispatch(addColor(herColor))
        history.push('/home')
    }

    function push_color() {
        const color_one = herColor.first
        const color_two = herColor.second

        return regHex.test(color_one) && regHex.test(color_two) ? returnColor() : alert('there is no such color');
    }
    return (
        <div>
            <input type="text" value={herColor.first} onChange={e => setHexColor({...herColor, first: e.target.value})}/>
            <input type="text" value={herColor.second} onChange={e => setHexColor({...herColor, second: e.target.value})}/>
            <button onClick={push_color}>Edit</button>
        </div>
    );
};

export default New;
