/* import './App.css';

import Main from './components/pages/main';

function App() {
  return (
      
    <Main/>
    
  );
}

export default App; */
//https://reactstrap.github.io/?path=/docs/components-button--button
import React from 'react'
import Aside from './components/dashboardAdmin/Aside'
import Content from './components/dashboardAdmin/Content'
import Footer from './components/dashboardAdmin/Footer'
import Header from './components/dashboardAdmin/Header'

export default function App() {
  return (
    <div>
      <Header/>
      <Aside/>
      <Content/>
      <Footer/>
    </div>
  )
}
