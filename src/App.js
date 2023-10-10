import './App.css';
import Promises from './Promises';
import CallBack from './useCallback/CallBack';
import UseContext from './useContext/UseContext';
import Counter from './useMemo/Counter';
import CounterOne from './useReducer/CounterOne';
import FocusComponent from './useRefHook/FocusComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/useRef" element={<FocusComponent/>}/>
      <Route path="/useReducer" element={<CounterOne/>}/>
      <Route path="/useMemo" element={<Counter/>}/>
      <Route path="/useCallback" element={<CallBack/>}/>
      <Route path="/useContext" element={<UseContext/>}/>
      <Route path="/promise" element={<Promises/>}>
      </Route>
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
