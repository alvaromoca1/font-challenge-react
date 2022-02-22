import './App.css';
import ClientAll from './pages/ClientAll/ClientAll';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" caseSensitive={false} element={<ClientAll />}/>
      </Routes>
    </Router>
  );
}

export default App;
