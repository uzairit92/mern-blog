import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import MyPage from "./pages/Mypage";

export default function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
        <Routes>         
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About />} />       
        <Route path="/sign-in" element={ <Signin />} />
        <Route path="/sign-up" element={ <SignUp />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path="/projects" element={ <Projects />} />

        <Route path="/mypage" element={ <MyPage />} />
       </Routes>
     </BrowserRouter>
     </>
  );
}

// Example

// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <h1>Hello Mern Project </h1>
//     </div>
//   )
// }
