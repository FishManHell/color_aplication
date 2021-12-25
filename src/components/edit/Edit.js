import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const Edit = ({test, setTest, change}) => {
    const params = useParams();
    const colors = useSelector(state => state.arrayHexColors);

    const returnEditColor = useMemo(() => {
        const idColor = params.id;
        return colors.find(item => item.id === idColor)
    }, [colors, params.id]);

    const check = (e, boolean) => { /// меняет значения при нажатие всегда
        const value = e.target.value
        return boolean ? setTest({...test, first: value}) : setTest({...test, second: value})
    }

    return (
        <div>
          Edit
            <input type="text" value={test?.first} onChange={e => check(e, true)}/>
            <input type="text" value={test?.second} onChange={e => check(e, false)}/>
            <div style={{background: `linear-gradient(${returnEditColor?.first}, ${returnEditColor?.second})`}}>
                asdasdasdasdaddddddddddddddddddddddddddddddddd
            </div>
            <button onClick={() => change(params.id)}>asdasdas</button>
        </div>
    );
};

export default Edit;
