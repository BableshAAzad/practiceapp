// import { createContext } from 'react';
// import './App.css';
import ReadMoreParent from './components/ReadMoreParent';
// import ReadLessMore from './componentsFiles/ReadLessMore';
// import TodoApp from './componentsFiles/TodoApp';
// import CheckBox from './componentsFiles/CheckBox';
// import StateWithInputs from './componentsFiles/StateWithInputs';
// import Accordion from './componentsFiles/Accordion';
// import Parent2 from './componentsFiles/Parent2';
// import UseStateDemo from './componentsFiles/UseStateDemo';
// import A from './componentsFiles/A';

// export let DummiContext1 = createContext();
// export let DummiContext2 = createContext();

function App() {
  // let myName = {firstName : "Bablesh", lastName : "AAzad"};
  // let age = 49;
  // let temp = false;
  return (
    // <div className="App">
    //   <h1>Hello App Component</h1>
    //   <DummiContext1.Provider value={myName}>
    //     <DummiContext2.Provider value={age}>
    //       <A></A>
    //     </DummiContext2.Provider>
    //   </DummiContext1.Provider>
    // </div>


    // <>
    //   <h1>Hello or : {"Bablesh" || temp}</h1>
    //   <h1>Hello or : {temp || "Bablesh"}</h1>
    //   <hr />
    //   <h1>Hello and : {"Bablesh" && temp}</h1>
    //   <h1>Hello and : {temp && "Bablesh"}</h1>
    // </>

    // <>
    //   <Parent2></Parent2>
    // </>
    
    // <UseStateDemo></UseStateDemo>
    <div >
      {/* <Accordion></Accordion> */}
      {/* <StateWithInputs></StateWithInputs> */}
      {/* <CheckBox></CheckBox> */}
      {/* <TodoApp></TodoApp> */}
      {/* <ReadLessMore></ReadLessMore> */}
      <ReadMoreParent/>
    </div>
  );
}

export default App;
