import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import EasyWay from './Pages/EasyWay/EasyWay'
import HardWay from './Pages/HardWay/HardWay'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/proud-way" element={<EasyWay />} />
        <Route path="/shameless-way" element={<HardWay />} />
      </Routes>
    </>
  )
}

export default App
