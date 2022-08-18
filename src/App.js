import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Projects from './views/Projects'
import ErrorPage from './views/ErrorPage'
import Navbar from './components/Navbar';
import ProjectsApps from './components/ProjectsApps';
import ProjectsGames from './components/ProjectsGames'



function App() {
  return (
    
    <div className="App">
      <Navbar />
     <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects />}>
          <Route path='apps' element={<ProjectsApps />} />
          <Route path='games' element={<ProjectsGames />} />
        </Route>  
        <Route path='*' element={<ErrorPage />}/>
      </Routes>

    </div>
  );
}

export default App;
