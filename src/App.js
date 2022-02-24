import './App.css';
import ClientAll from './pages/ClientAll/ClientAll';
import Avg from './pages/Avg/Avg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" caseSensitive={false} element={<ClientAll />}/>
          <Route path="/avg" caseSensitive={false} element={<Avg />}/>
      </Routes>
    </Router>
  );
}

export default App;
