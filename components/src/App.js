import FunCom from "./components/FunctionCompo";
import {ClassCompo, ClassCompo2} from "./components/ClassCompo";
import { Click } from "./components/Click";
import Counter from "./components/Counter";
function App() {
  return <>
    <h1>Hello this is Faizal</h1>
    <h2>I am lerning react</h2>
    <FunCom />
    <hr/>
    <ClassCompo />
    <hr/>
    <ClassCompo2 />
    <hr/>
    <Click />
    <hr />
    <Counter/>
  </>
}

export default App;
