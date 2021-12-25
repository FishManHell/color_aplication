import './App.css';
import {Switch, Route, Redirect, useHistory} from "react-router-dom";
import {Container, Wrapper} from "./styled_components/wrapper";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addColor, removeColor, returnColors} from "./redux/action/actionForColor";
import Home from "./components/home/Home";
import New from "./components/new/New";
import Edit from "./components/edit/Edit";
import {regHex} from "./utils/reg/regHex";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    const colors = useSelector(state => state.arrayHexColors);
    const [herColor, setHexColor] = useState({id: Date.now().toString(), first: '', second: ''});
    const [test, setTest] = useState({id: '', first: '', second: ''});
    console.log(test);

    const pushColor = () => { // кидает в массив obj - цвет и перенаправляет на home
        dispatch(addColor(herColor))
        history.push('/home');
    }


    const checkReg = () => { // проверяет регуляркой подходит ли цвет или нет
        const color_one = herColor.first
        const color_two = herColor.second

        return regHex.test(color_one) && regHex.test(color_two) ? pushColor() : alert('there is no such color');
    }

    const editColor = (color) => { // кидает тебя в компонент edit
        history.push(`/edit/${color.id}`);
        setTest(color)
    }

    const deleteColor = color => { // удаляет obj из массива
        dispatch(removeColor(color))
    }

    const changeColorPageNew = (params) => { // проверяет - если цвет у которого id такой есть то удали и поставь другой
        const index = colors.findIndex(item => item.id.includes(params))
        if (index > -1) {
            colors.splice(index, 1, test);
            history.push('/home')
        }
        console.log(colors)
    }

    useEffect(() => { // из localStorage принимает в redux
        dispatch(returnColors())
    }, []);


    return (
        <Wrapper>
            <Container>
                <Switch>
                    <Route exact path={['/', '/home']} render={(props) => <Home routeProps={props} edit={editColor} remove={deleteColor}/>}/>
                    <Route exact path={'/new'} render={() => <New herColor={herColor} setHexColor={setHexColor} checkReg={checkReg}/>}/>
                    <Route exact path={['/edit/:id']} render={(props) => <Edit routeProps={props} test={test} setTest={setTest} change={changeColorPageNew}/>}/>
                    <Redirect to={'/home'}/>
                </Switch>
            </Container>
        </Wrapper>
    );
}

export default App;
