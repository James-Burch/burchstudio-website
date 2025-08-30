import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import TemplatePage from './pages/TemplatePage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Portal from './pages/Portal';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:templateId" element={<TemplatePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Layout>
  );
}

export default App;