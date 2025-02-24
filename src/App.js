import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Import par défaut
import Layout from './components/Layout/Layout'; // Import par défaut

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Utilisation du composant Home */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


