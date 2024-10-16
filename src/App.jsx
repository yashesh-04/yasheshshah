import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navigation from './components/Navigation'
import Main1 from './components/Main1'
import Main2 from './components/Main2'
import Main3 from './components/Main3'
import Main4 from './components/Main4'
import ContactForm from './components/Main5';





export default function App(){
  return (
    <>
      <Navigation/>
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <ContactForm />
      
    </>
  )
}