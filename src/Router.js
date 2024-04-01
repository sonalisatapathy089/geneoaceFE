import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import MainContentLayout from "../src/DashBoardLayout/index"
import DashBoard from './DashBoardLayout/DashBoard';
import TestFrom from './DashBoardLayout/TestFrom';
const Router = () => {
  return (
    <Routes>
         <Route path="/" element={<MainContentLayout/>}>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path='/test-form' element={<TestFrom/>}/>
         </Route>
    </Routes>
  )
}

export default Router