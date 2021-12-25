import './App.css';
import {Switch, Route, useHistory, Redirect} from "react-router-dom";
import {Container, Wrapper} from "./styled_components/wrapper";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {removeColor, returnColors} from "./redux/action/actionForColor";
import Home from "./components/home/Home";
import New from "./components/new/New";
import Edit from "./components/edit/Edit";
import {regHex} from "./utils/regHex";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [changeColor, setChangeColor] = useState({id: '', color_one: '', color_two: ''});

    const editColor = (color) => {
        history.push(`/edit/${color.id}`);
        setChangeColor(color)
    }

    const deleteColor = color => {
        dispatch(removeColor(color))
    }

    const funcDisabled = (hexOne, hexTwo) => {
        return !hexOne.match(regHex) || !hexTwo.match(regHex)
    }

    useEffect(() => {
        dispatch(returnColors())
    }, []);


    return (
        <Wrapper>
            <Container>
                <Switch>
                    <Route exact path={['/', '/home']} component={() => <Home edit={editColor} remove={deleteColor}/>}/>
                    <Route exact path={'/new'} component={() => <New dis={funcDisabled}/>}/>
                    <Route exact path={['/edit/:id']} render={() => <Edit changeColor={changeColor} setChangeColor={setChangeColor} dis={funcDisabled}/>}/>
                    <Redirect to={'/home'}/>
                </Switch>
            </Container>
        </Wrapper>
    );
}

export default App;
