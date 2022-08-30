import './App.css';

// react-router-dom Uses
import { Routes, Route} from "react-router-dom";

// Component Uses
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  );
}

export default App;
