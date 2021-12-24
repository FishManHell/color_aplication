import './App.css';
import {Switch, Route} from "react-router-dom";
import {routing} from "./utils/routing/routing";
import {Container, Wrapper} from "./styled_components/wrapper";

function App() {
    return (
        <Wrapper>
            <Container>
                <Switch>
                    {routing.map(page => <Route exact={page.exact} key={page.title} component={page.component} path={page.path}/>)}
                </Switch>
            </Container>
        </Wrapper>
    );
}

export default App;
