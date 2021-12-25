import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import ItemColor from "./ItemColor";

const Home = ({edit, remove}) => {
    const colors = useSelector(state => state.arrayHexColors);
    const history = useHistory();
    return (
        <div>
            <button onClick={() => history.push('/new')}>New</button>
            Home
            {colors?.map(color => <ItemColor key={color.id} color={color} edit={edit} remove={remove}/>)}
        </div>
    );
};

export default Home;














