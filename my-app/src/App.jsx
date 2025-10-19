import { useEffect, useState, useMemo } from 'react' // ← Importa useMemo
import './App.css'
import Header from './components/Header';
import MenuList from './components/MenuList';
import Footer from './components/Footer'

function App() {
  const [meals, setMeals] = useState([]);
  const [sortOrder, setSortOrder] = useState('Default');

  const getMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    const data = await response.json();
    setMeals(data.meals);
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
      <Header sortOrder={sortOrder} setSortOrder={setSortOrder}/>
      <MenuList meals={mealsWithPrices} sortOrder={sortOrder}/>
      <Footer />
    </>
  )
}

export default App
