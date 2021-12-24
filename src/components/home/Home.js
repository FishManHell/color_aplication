import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {removeColor} from "../../redux/action/actionForColor";

const Home = () => {
    const dispatch = useDispatch()
    const colors = useSelector(state => state.arrayHexColors);
    const history = useHistory();

    const remove = (color) => {
        dispatch(removeColor(color))
        console.log(colors)
    }

    const returnEdit= (color) => {
        history.push(`/edit:${color.first}`)
    }

    return (
        <div>
            <button onClick={() => history.push('/new')}>New</button>
          Home
            {colors.map(color => <div style={{background: `linear-gradient(${color.first}, ${color.second})`}} key={color.second} onClick={() => returnEdit(color)}>dddddddasdasdasdasdasdasd</div>)}
        </div>
    );
};

export default Home;
