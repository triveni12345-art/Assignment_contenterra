import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Courselist from './day4/Courselist';
import EmployeeList from './day4/EmployeeList';
import Emplyee from './day4/Emplyee';
import StylingDemo from './day4/StylingDemo';
import InlineStyling from './day4/InlineStyling';
// import './day4/styling.css';
import styles from './day4/styling.module.css'
import BootstrapDemo from './day4/BootstrapDemo';
import Formhandling from './Day5/Formhandling';
import Classcomp from './Assignment/Classcomp';
// import Counter from './Assignment/Counter';
import FuncClick from './Assignment2/FuncClick';
import ClassClick from './Assignment2/ClassClick';
import Bindinrender from './Assignment2/Bindinrender';
import Arrowbind from './Assignment2/Arrowbind';
import Bindclasscons from './Assignment2/Bindclasscons';
import Login from './Login/Login';
import CurrentTime from './Assignment2/CurrentTime';
import OnOff from './Assignment2/OnOff';
import Nums from './Assignment3/Nums';
import NameForm from './FormWithRef/NameForm';
import FragmentEx from './Day6/FragmentEx';
import TableExample from './Day6/TableExample';
import FormwithRef from './AdditionalTask/FormwithRef';
import RefsExample from './Day6/RefsExample';
import CallbackRefs from './Day6/CallbackRefs';
import DynamicButton from './AdditionalTask/DynamicButton';
import Forwardinginput from './Day6/Forwardinginput';
import ClickcounterusingHOC from './Day6/ClickcounterusingHOC';
import Hovercounterusinghoc from './Day6/Hovercounterusinghoc';
import Refeg from './AdditionalTask/Refeg';
import MouseTracker from './AdditionalTask/MouseTracker';
import { UserProvider } from './Context/UserContext';
// import { ComponentC } from './Context/ComponentC';
import Calc from './Calculator/Calc'
import Crudex from './CRUD/Crudex'

import { Component } from 'react';
import Hook_prevstate from './Hooks/Hook_prevstate';
import UseState_obj from './Hooks/UseState_obj';
import Usestate_array from './Hooks/Usestate_array';
import Document_title from './Hooks/Document_title';
import HookMousedemo from './Hooks/HookMousedemo';
import Containermouse from './Hooks/Containermouse';
import Fetchdata from './Hooks/Fetchdata';
import FocusElement from './Usememo/FocusElement';
import Count2 from './useredu/Count2';
import CounterThree from './useredu/CounterThree';
import DAtafetching from './DataFetch/DAtafetching';
import Datafetch_useReducer from './DataFetch/Datafetch_useReducer';
import Document_titleChange from './CustomHook/Document_titleChange';
import DocumentTitlechangeTwo from './CustomHook/DocumentTitlechangetwo';
import Counter from './CustomHook/Counter'
import CounterOne from './CustomHook/CounterOne';
import UserForm from './CustomHook/UserForm';

// import Q4 from './HookAss1/Q4';
import Q1 from './HooksAss3/Q1';
import Q6 from './HookAss4/Q6';
import Q8 from './HooksAss3/Q8';
import Q5 from './HooksAss3/Q5';
import Home from './Routing/Home';
import About from './Routing/About';
import ContactUs from './Routing/ContactUs';
import Pagenotfound from './Routing/Pagenotfound'
import Q4 from './HookAss4/Q4';


import Layout from "./HookAss2/Layout"
import { Main } from "./HookAss2/Main"
import ThemeContext from "./HookAss2/ThemeContext"
import Q7 from './HooksAss3/Q7';
import RollDice from './AdditionalTask/RollDice';
import Employee from './Routing/Employee';
import  SignUp  from './SignUp/SignUp';
import Admin from './Login/Admin';
import Posttask from './Posttask/Posttask';
// import EmployeeDetails from './Routing/EmployeeDetails';
function App() {
  
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <Admin/> */}
      {/* <PostList/> */}
      {/* <Q5/> */}
      {/* <RollDice/> */}
      {/* <ThemeContext.Provider value={'red'}>
        <Layout>
          <Main />
        </Layout>
      </ThemeContext.Provider> */}



      {/* <Q8/> */}
      {/* <Q4/> */}
     

      {/* <Document_titleChange/>
      <DocumentTitlechangeTwo/> */}
      {/* <FirstContext.Provider value={'tqpp'}>
      <Electrical/>

      </FirstContext.Provider> */}

      {/* <UserProvider value="TQPP">
  
      </UserProvider> */}




      {/* <Formhandling/> */}
      {/* <Hovercounterusinghoc/> */}

      {/* <Classcomp name="Jay" heroName="Batman"/> */}
      {/* <Classcomp name="Ansh" heroName="Superman"/> */}
      {/* <Classcomp name="Sara" heroName="Wonder Women"/> */}
      {/* <Functionalcomp id="101" name="Raj"/> */}
      {/* <Lifecycle/>  */}
      {/* <Formhandling/> */}
      {/* <h1 className='danger'>  Hello Welcome to React</h1>
    <h1 className={styles.success}>  Hello Welcome to React</h1> */}
      {/* <Courselist/> */}
      {/* <Emplyee/> */}
      {/* <EmployeeList/> */}
      {/* <StylingDemo default={false}/> */}
      {/* <InlineStyling/> */}
      

       <Router>
         <h3 style={{float:'start'}}>
           <center>
             <NavLink exact to='/'>Home</NavLink>
             <NavLink style={{padding:'10x'}} exact to='/SignUp'>SignUp</NavLink>
             <NavLink style={{padding:'10x'}} exact to='/Login'>Login</NavLink>
             <NavLink style={{padding:'10x'}} exact to='/Posttask'></NavLink>
              

           </center>
         </h3>
    
    <Switch>
      <Route path='/SignUp' exact component={SignUp}/>
      <Route path='/Login' exact component={Login}/>
      <Route path='/Posttask' exact component={Posttask}/>
      <Route path='/' exact component={Home}/>

    </Switch>
       </Router>
</div>

  );
}

export default App;
