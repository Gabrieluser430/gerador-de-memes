import React from "react"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import "./App.sass"


export default function App() {
  return (
    <div className="app-container">
        <Header/>
        <Main />
    </div>
  )
}