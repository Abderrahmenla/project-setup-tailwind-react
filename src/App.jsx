import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL + '/'}`}
            exact
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
