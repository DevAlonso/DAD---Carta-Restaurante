import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMeals } from '../Api/ApiFetch';
import MenuItem from '../components/MenuItem';
import { Atom } from 'react-loading-indicators';

function Categorias() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');

  // Cargar los datos al montar el componente
  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      const data = await getMeals();
      setMeals(data);
      setLoading(false);
    };
    fetchMeals();
  }, []);

  // Ordenar meals alfabeticamente
  const sortedMeals = [...meals].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.strMeal.localeCompare(b.strMeal);
    }
    return b.strMeal.localeCompare(a.strMeal);
  });

  if (loading) {
    return (
      <div className="loading-container">
        <Atom color="#5a67d8" size="medium" text="Cargando postres..." />
      </div>
    );
  }

  return (
    <div className="categorias">
      <h1>Nuestros Postres</h1>
      
      <div className="controls">
        <button onClick={() => setSortOrder('asc')}>A-Z</button>
        <button onClick={() => setSortOrder('desc')}>Z-A</button>
      </div>

      <div className="cards-container">
        {sortedMeals.map((meal) => (
          <Link 
            key={meal.idMeal} 
            to={`/categorias/${meal.idMeal}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem 
              mealName={meal.strMeal}
              mealImg={meal.strMealThumb}
              precio={meal.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
