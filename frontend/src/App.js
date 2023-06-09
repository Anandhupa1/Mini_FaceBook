import Topbar from './components/topbar/Topbar'

import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';


function App() {
  return (
    
    <Router>
    {/* <Topbar/> */}
    <Switch>
      <Route exact path='/' ><Home/> </Route>
      <Route path='/login' ><Login/> </Route>
      <Route path='/register' ><Register/> </Route>
      <Route path='/profile' ><Profile/> </Route>
      
    </Switch>



   </Router>
   
  );
}





export default App;
