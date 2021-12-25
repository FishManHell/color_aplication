import './App.css';
import {Switch, Route, useHistory} from "react-router-dom";
import {Container, Wrapper} from "./styled_components/wrapper";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {removeColor, returnColors} from "./redux/action/actionForColor";
import Home from "./components/home/Home";
import New from "./components/new/New";
import Edit from "./components/edit/Edit";

function App() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [changeColor, setChangeColor] = useState({id: '', color_one: '', color_two: ''});
    console.log(changeColor)

    const editColor = (color) => { // кидает тебя в компонент edit
        history.push(`/edit/${color.id}`);
        setChangeColor(color)
    }

    const deleteColor = color => { // удаляет obj из массива
        dispatch(removeColor(color))
    }

    useEffect(() => { // из localStorage принимает в redux
        dispatch(returnColors())
    }, []);


    return (
        <Wrapper>
            <Container>
                <Switch>
                    <Route exact path={['/', '/home']} component={() => <Home edit={editColor} remove={deleteColor}/>}/>
                    <Route exact path={'/new'} component={New}/>
                    <Route exact path={['/edit/:id']} render={() => <Edit changeColor={changeColor} setChangeColor={setChangeColor} />}/>
                </Switch>
            </Container>
        </Wrapper>
    );
}

export default App;
