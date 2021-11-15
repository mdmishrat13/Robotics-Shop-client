import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/Authprovider';
import Home from './Pages/Homepage/Home/Home';
import Login from './Pages/Login/Login';
import NavBar from "./Pages/Shared/NavBar/NavBar"
import GuestRoute from './PrivetRoutes/GuestRoute';
import UserRoute from './PrivetRoutes/UserRoute';
import Register from './Pages/Register/Register'
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';



function App() {
  return (
    <div style={{background:"#E3D5FB"}} className="App">
      <AuthProvider>
      <Router>
        <NavBar>
        </NavBar>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/explore" component={Explore} />
          <GuestRoute path="/login">
            <Login />
          </GuestRoute>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <GuestRoute path="/register">
            <Register />
          </GuestRoute>
          <UserRoute path="/purchase/:id">
            <Purchase />
          </UserRoute>
          <UserRoute path="/dashboard">
            <Dashboard />
          </UserRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
