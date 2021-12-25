import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import ItemColor from "../Edit&New&Home/ItemColor";
import Error from "../emptyArray/Error";
import {ButtonRoute, NewPage, WrapperPages} from "../../styled_components/wrapper";

const Home = ({edit, remove}) => {
    const colors = useSelector(state => state.arrayHexColors);
    const history = useHistory();

    const pushNew = () => {
        history.push('/new');
    }

    return (
        <WrapperPages>
            <NewPage>Home</NewPage>
            <ButtonRoute onClick={pushNew}>new_color</ButtonRoute>
            {colors.length ? colors.map(color => <ItemColor key={color.id} color={color} edit={edit} remove={remove}/>) : <Error/>}
        </WrapperPages>
    );
};

export default Home;














