import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/layout';
import Dashboard from './pages/Home';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
