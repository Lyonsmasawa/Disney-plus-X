import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
