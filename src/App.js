import logo from './logo.svg';
import './App.css';
import FuncComp from './componets/FuncComp';
import TarunFuncComp from './task/TarunFuncComp';
import ClassComp from './componets/ClassComp';
import EventComp from './componets/EventComp';
import MystateComp from './componets/MystateComp';
import Task2 from './task/TaskFile';
import TaskFile from './task/TaskFile';
import Conditionalrencomp from './componets/ConditionalRenComp';
import ConditionalrenComp from './componets/ConditionalRenComp';
import CssComp from './componets/CssComp';
import ParentComp from './componets/ParentComp';
import ClickCounterComp from './componets/ClickCounterComp';
import HoverCounterComp from './componets/HoverCounterComp';
import MyImagesComp from './componets/MyImagesComp';
import UserComp from './componets/UserComp';
import ErrorBoundaryComp from './componets/ErrorBoundaryComp';
import VirtualDom from './componets/VirtualDom';
import Toggletask from './task/Toggletask';
import MultipleImageComp from './task/MultipleImageComp';
import EmployeesTask from './task/EmployeesTask';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <h1> welcome to react session</h1> 
      {/* <FuncComp fname='tarun' post='python devloper'></FuncComp>
      <TarunFuncComp></TarunFuncComp>
      <ClassComp fname='tarun' lname ='kumar' gender='Male' salary={30000} contact=  {123456789}></ClassComp>  
      <EventComp></EventComp> 
      <MystateComp></MystateComp> 
      <TaskFile></TaskFile> 
      <ConditionalrenComp></ConditionalrenComp>
      <CssComp></CssComp> */}
      {/* <ParentComp gender='male' contact={12345678}></ParentComp> */}
      {/* <ClickCounterComp></ClickCounterComp>
      <HoverCounterComp></HoverCounterComp>
      <MyImagesComp></MyImagesComp> */}
      
      {/* <ErrorBoundaryComp>
        <UserComp name='tarun'></UserComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp name='arun'></UserComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp name='santo'></UserComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <UserComp name='sanjay'></UserComp>
      </ErrorBoundaryComp> */}

      {/* <VirtualDom></VirtualDom> */}
      <Toggletask></Toggletask>
      <hr/>
      <MultipleImageComp></MultipleImageComp>
      <hr/>
      <EmployeesTask></EmployeesTask>
    </div>
  );
}

export default App;
