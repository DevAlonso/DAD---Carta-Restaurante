import { useEffect, useState, useMemo } from 'react' // ← Importa useMemo
import './App.css'
import Header from './components/Header';
import MenuList from './components/MenuList';
import Footer from './components/Footer'

function App() {
  const [meals, setMeals] = useState([]);
  const [sortOrder, setSortOrder] = useState('Default');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMeals = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setMeals(data.meals ?? []);
    } catch (err) {
      setMeals([]);
      setError('No se han podido cargar los platos. Inténtalo de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    getMeals();
  }, [])

  const mealsWithPrices = useMemo(() => {
    return meals.map(meal => ({
      ...meal,
      price: Math.floor(Math.random() * (20 - 8 + 1)) + 8
    }));
  }, [meals]);

  return (
    <>
      <Header sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <MenuList meals={mealsWithPrices} sortOrder={sortOrder} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
