import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {ButtonRoute, NewPage, WrapperPages} from "../../styled_components/wrapper";
import ItemColor from "../Edit&New&Home/ItemColor";
import Inputs from "../Edit&New&Home/Inputs";

const Edit = ({changeColor, setChangeColor, dis}) => {
    const params = useParams();
    const history = useHistory();
    const colors = useSelector(state => state.arrayHexColors);

    const functionChangeColor = (params) => {
        const index = colors.findIndex(item => item.id.includes(params))
        if (index > -1) {
            colors.splice(index, 1, changeColor);
            localStorage.setItem('arrayColors', JSON.stringify(colors));
            history.push('/home');
        }
    }

    const functionFindColor = useCallback(() => {
        const colors = JSON.parse(localStorage.getItem('arrayColors'))
        const findColor = colors.find(item => item.id === params.id)
        setChangeColor(findColor)
        return findColor
    }, [params.id, setChangeColor]);

    const check = (e, boolean) => {
        const value = e.target.value
        return boolean ? setChangeColor({...changeColor, color_one: value}) : setChangeColor({
            ...changeColor,
            color_two: value
        })
    }

    useEffect(() => {
        functionFindColor()
    }, [])


    return (
        <WrapperPages>
            <NewPage>Edit</NewPage>
            <Inputs check={check} color={changeColor}/>
            <ItemColor color={changeColor}/>
            <ButtonRoute disabled={dis(changeColor.color_one, changeColor.color_two)} onClick={() => functionChangeColor(params.id)}>save_color</ButtonRoute>
        </WrapperPages>
    );
};

export default Edit;
