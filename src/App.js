import './App.css';

// react-router-dom Uses
import { Routes, Route} from "react-router-dom";

// Component Uses

import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import AllReviews from './component/AllReviews/AllReviews';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';

function App() {
  return (
    <section className="color-[#e5e7eb] h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/allreviews" element={<AllReviews/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </section>
  );
}

export default App;
