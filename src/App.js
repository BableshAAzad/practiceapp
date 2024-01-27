// import { createContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './comReactRouterDom/Home';
import Navbar from './comReactRouterDom/Navbar';
import About from './comReactRouterDom/About';
import Contact from './comReactRouterDom/Contact';
import LoginForm from './comReactRouterDom/LoginForm';
import Pnf from './comReactRouterDom/Pnf';

import Laptop from "./comReactRouterDom/ProductsItems/Laptop"
// import Mobile from "./comReactRouterDom/ProductsItems/Mobile"
import Pendrive from "./comReactRouterDom/ProductsItems/Pendrive"
import Watches from "./comReactRouterDom/ProductsItems/Watches"
import Products from './comReactRouterDom/Products';
import HomeWorkTasks from './comReactRouterDom/HomeWorkTasks';
import ProductDetails from './comReactRouterDom/ProductDetails';
import { lazy } from 'react';
import Shoes from "./comReactRouterDom/ProductsItems/Shoes"
import ShoesDetails from './comReactRouterDom/ProductsItems/ShoesDetails';
import AuthProvider from './protectedRouter/AuthProvider';
let Mobile = lazy(() => import("./comReactRouterDom/ProductsItems/Mobile"))

// import UseIdHookExample from './comUsIdHook/UseIdHookExample';
// import UseMouseOverMain from './componentCustomHooks/UseMouseOverMain';
// import UseMouseOverMain2 from './componentCustomHooks/UseMouseOverMain2';
// import ParentDemoColor from './comChildToParentExmple/ParentDemoColor';
// import FilteredListMain from './componentMemoCallback/comUseMemo/FilteredListMain';
// import UseMemoDemo from './componentMemoCallback/comUseMemo/UseMemoDemo';
// import ParentKiran from './comKiranFandoApp/ParentKiran';
// import Cparent from './componentMemoCallback/comUseCallBack/Cparent';
// import Parent from './componentMemoCallback/comReactMemo/Parent';
// import ParentComponent from './componentMemoCallback/ParentComponent';
// import UseHoverDemo from './componentCustomHooks/UseHoverDemo';
// import UseKeyPressDemo from './componentCustomHooks/UseKeyPressDemo';
// import ChangeColor from './componentCustomHooks/ChangeColor';
// import useColorChange from './componentCustomHooks/useColorChange';
// import CalculatorUseReducer from './comUseReducer/CalculatorUseReducer';
// import TodoPopUp from './comUseReducer/TodoPopUp';
// import FetchApiUsingUseReducer from './comUseReducer/FetchApiUsingUseReducer';
// import TodoReducer2 from './comUseReducer/TodoReducer2';
// import MyComponent1 from "./componentCustomHooks/MyComponent1"
// import TodoUseReducerHook from './comUseReducer/TodoUseReducerHook';
// import FakeStoreProducts from './componentCustomHooks/FakeStoreProducts';
// import PicSlider from './componentSlider/PicSlider';
// import TodoApp from './componentsFiles/TodoApp';
// import StateWithInputs from './componentsFiles/StateWithInputs';
// import JsonPosts from './componentCustomHooks/JsonPosts';
// import SearchWhenClickButton from './componentFetchApi/SearchWhenClickButton';
// import FakeStoreProducts from './componentFetchApi/FakeStoreProducts';
// import Loader from './componentFetchApi/Loader';
// import SearchBox from './componentFetchApi/SearchBox';
// import AgeC from './componentAgeCalculator/AgeC';
// import AgeCalcutaltor from './componentAgeCalculator/AgeCalculator';
// import ReadMoreParent from './components/ReadMoreParent';
// import ReadLessMore from './componentsFiles/ReadLessMore';
// import CheckBox from './componentsFiles/CheckBox';
// import Accordion from './componentsFiles/Accordion';
// import Parent2 from './componentsFiles/Parent2';
// import UseStateDemo from './componentsFiles/UseStateDemo';
// import A from './componentsFiles/A';

// import CrudApp from "./componentCrud/CrudApp";
// import CrudComponent from './componentCrud/CrudComponent';

// import FetchApiAsyncAwait from "./componentFetchApi/FetchApiAsyncAwait";

// import UseEffectApp from "./componentUseEffect/UseEffectApp";

// export let DummiContext1 = createContext();
// export let DummiContext2 = createContext();

function App() {
  // let myName = {firstName : "Bablesh", lastName : "AAzad"};
  // let age = 49;
  // let temp = false;
  // useColorChange("green", "black")
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
    // <div >
    <BrowserRouter>

      {/* AgeCalculatorCSS */}
      {/* <Accordion></Accordion> */}
      {/* <CheckBox></CheckBox> */}
      {/* <ReadLessMore></ReadLessMore> */}
      {/* <ReadMoreParent/> */}
      {/* <UseEffectApp/> */}
      {/* <FetchApiAsyncAwait/> */}
      {/* <CrudApp/> */}
      {/* <CrudComponent/> */}
      {/* <AgeCalcutaltor/> */}
      {/* <AgeC /> */}
      {/* <SearchBox /> */}
      {/* <FakeStoreProducts /> */}
      {/* <Loader/> */}
      {/* <PicSlider />
      <TodoApp></TodoApp>
      <h2 style={{color : "blue", margin: "5px"}}>Form with useState</h2>
      <StateWithInputs></StateWithInputs> */}
      {/* <div style={{border : "2px solid black", margin: "5px"}}>
      <SearchWhenClickButton/>
      </div> */}
      {/* <JsonPosts/> */}
      {/* <TodoUseReducerHook /> */}
      {/* <FakeStoreProducts/> */}
      {/* <TodoReducer2/> */}
      {/* <MyComponent1 /> */}
      {/* <TodoPopUp/> */}
      {/* <FetchApiUsingUseReducer/> */}
      {/* <CalculatorUseReducer/> */}
      {/* <ChangeColor/> */}
      {/* <h3>App component</h3> */}
      {/* <UseKeyPressDemo /> */}
      {/* <UseHoverDemo/> */}
      {/* <ParentComponent /> */}
      {/* <Parent/> */}
      {/* <Cparent/> */}
      {/* <ParentKiran/> */}
      {/* <UseMemoDemo/> */}
      {/* <FilteredListMain/> */}


      {/* <ParentDemoColor/> */}
      {/* <UseIdHookExample titleHeading="Client" /><br/><br />
      <UseIdHookExample titleHeading="Server" /> */}
      {/* <UseMouseOverMain/> */}
      {/* <UseMouseOverMain2/> */}
      {/* </div> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homeWorkTasks' element={<HomeWorkTasks />} />
        <Route path='/about' element={<AuthProvider>
          <About />
        </AuthProvider>} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Shoes />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="pendrive" element={<Pendrive />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="shoes/:shoesId" element={<ShoesDetails />} />
          <Route path="watches" element={<Watches />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/loginForm' element={<LoginForm />} />
        <Route path="/products/mobile/:pid" element={<ProductDetails />} />
        <Route path='*' element={<Pnf />} />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
