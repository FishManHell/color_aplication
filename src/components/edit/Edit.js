import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

const Edit = ({changeColor, setChangeColor}) => {
    const params = useParams();
    const history = useHistory();
    const colors = useSelector(state => state.arrayHexColors);

    const changeColorPageNew = (params) => { // проверяет - если цвет у которого id такой удаляет и заменяет
        const index = colors.findIndex(item => item.id.includes(params))
        if (index > -1) {
            colors.splice(index, 1, changeColor);
            localStorage.setItem('arrayColors', JSON.stringify(colors));
            history.push('/home');
        }
    }

    const functionFindColor = useCallback(() => { // ищет obj
        const colors = JSON.parse(localStorage.getItem('arrayColors'))
        const findColor = colors.find(item => item.id === params.id)
        setChangeColor(findColor)
        return findColor
    }, [params.id, setChangeColor]);

    const check = (e, boolean) => { /// для контролируемого стейта func
        const value = e.target.value
        return boolean ? setChangeColor({...changeColor, color_one: value}) : setChangeColor({...changeColor, color_two: value})
    }

    useEffect(() => {
        functionFindColor()
    }, [])

    return (
        <div>
            Edit
            <input type="text" value={changeColor?.color_one} onChange={e => check(e, true)}/>
            <input type="text" value={changeColor?.color_two} onChange={e => check(e, false)}/>
            <h1 style={{background: `linear-gradient(${changeColor?.color_one}, ${changeColor?.color_two})`}}>
                asdasdasdasd
            </h1>
            <button onClick={() => changeColorPageNew(params.id)}>asdasdas</button>
        </div>
    );
};

export default Edit;
