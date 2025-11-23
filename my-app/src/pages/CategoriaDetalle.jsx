import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';
import MenuItem from '../components/MenuItem';
import './CategoriaDetalle.css';

function CategoriaDetalle() {
  const { categoria } = useParams(); // ← Captura el parámetro dinámico
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
      );
      const data = await response.json();
      
      // Añadir precios aleatorios
      const mealsWithPrice = data.meals.map(meal => ({
        ...meal,
        price: Math.floor(Math.random() * 20) + 5
      }));
      
      setMeals(mealsWithPrice);
      setLoading(false);
    };
    fetchMealsByCategory();
  }, [categoria]);

  if (loading) {
    return (
      <div className="loading-container">
        <Atom color="#5a67d8" size="medium" text="Cargando..." />
      </div>
    );
  }

  return (
    <div className="categoria-detalle">
      <Link to="/todas-categorias" className="back-btn">← Volver a categorías</Link>
      <h1>Categoría: {categoria}</h1>
      
      <div className="cards-container">
        {meals.map((meal) => (
          <Link 
            key={meal.idMeal}
            to={`/categoria/${categoria}/${meal.idMeal}`}
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

export default CategoriaDetalle;
