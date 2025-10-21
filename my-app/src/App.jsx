import { useEffect, useState, useMemo } from 'react'
import './App.css'
import Header from './components/Header';
import MenuList from './components/MenuList';
import Footer from './components/Footer'
import { Atom } from 'react-loading-indicators';

function App() {
  const [meals, setMeals] = useState([]);
  const [sortOrder, setSortOrder] = useState('Default');
  const [loading, setLoading] = useState(true);

  useEffect(function () {

    async function cargarDatos() {
      setLoading(true);

      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
      const data = await response.json();

      setMeals(data.meals);
      setLoading(false);
    }

    cargarDatos();

  }, [])

  const mealsWithPrices = useMemo(function () {
    return meals.map(function (meal) {
      return {
        ...meal,
        price: Math.floor(Math.random() * (20 - 8 + 1)) + 8
      };
    });
  }, [meals]);

  if (loading) {
    return <div className='loading-container'><Atom color="#32cd32" size="medium" text="Cargando platos..." textColor="#333" /></div>
  }

  return (
    <>
      <Header sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <main>
        <MenuList meals={mealsWithPrices} sortOrder={sortOrder} />
      </main>
      <Footer />
    </>
  )
}

export default App
