import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav.js';
import Home from './example/Home.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ListUsers from './Users/ListUsers.js';
import DetailUser from './Users/DetailUser.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/todo'>
              <ListTodo />
            </Route>
            <Route path='/about'>
              <MyComponent />
            </Route>
            <Route path='/users' exact>
              <ListUsers />
            </Route>
            <Route path='/users/:id'>
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
