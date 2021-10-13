import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 
import GlobalStyles from './styles/GlobalStyles';
import Start from './pages/Start'
import Cart from './pages/Cart'
import { Provider } from 'react-redux';
import store from './store'

const Routes = () => (
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Start} />
            <Route path = "/cart" component = {Cart} />
        </Switch>
        <GlobalStyles/>
    </BrowserRouter>
    </Provider>
    
);
 
export default Routes;