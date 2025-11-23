import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import MealDetail from './pages/MealDetail';
import TodasCategorias from './pages/TodasCategorias';
import CategoriaDetalle from './pages/CategoriaDetalle';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="categorias/:id" element={<MealDetail />} />
          <Route path="todas-categorias" element={<TodasCategorias />} />
          <Route path="categoria/:categoria" element={<CategoriaDetalle />} />
          <Route path="categoria/:categoria/:id" element={<MealDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
