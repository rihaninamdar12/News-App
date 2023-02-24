
import './App.css';
import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import NewsCollection from './Components/NewsCollection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  let pageSize=15;
  const [progress,setProgress]=useState(0)
 
  const updateProgress=(progress)=>{
    setProgress(progress)
  }

    return (
      <Router>
      <div>
      <LoadingBar color='#f11946' progress={progress}/>
        <Navbar/>
        <Routes>

          <Route path='/'  element={<NewsCollection setProgress={updateProgress} key='general' pageSize={pageSize} country='in' category='general'/>}/>

          <Route path='/home'  element={<NewsCollection setProgress={updateProgress} key='general' pageSize={pageSize} country='in' category='general'/>}/>

          <Route path='/business'  element={<NewsCollection setProgress={updateProgress} key='business' pageSize={pageSize} country='in' category='business'/>}/>

          <Route path='/entertainment'  element={<NewsCollection setProgress={updateProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>}/>

          <Route path='/general'  element={<NewsCollection setProgress={updateProgress} key='general' pageSize={pageSize} country='in' category='general'/>}/>

          <Route path='/health'  element={<NewsCollection setProgress={updateProgress} key='health' pageSize={pageSize} country='in' category='health'/>}/>
        
          <Route path='/science'  element={<NewsCollection setProgress={updateProgress} key='science' pageSize={pageSize} country='in' category='science'/>}/>

          <Route path='/sports'  element={<NewsCollection setProgress={updateProgress} key='sports' pageSize={pageSize} country='in' category='sports'/>}/>

          <Route path='/technology'  element={<NewsCollection setProgress={updateProgress} key='technology' pageSize={pageSize} country='in' category='technology'/>}/>

        </Routes>
      </div>
      </Router>
    )
}

export default App;