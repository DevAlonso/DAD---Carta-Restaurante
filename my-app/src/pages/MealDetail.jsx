import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';
import './MealDetail.css';

function MealDetail() {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetail = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setMeal(data.meals[0]);
      setLoading(false);
    };
    fetchMealDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <Atom color="#5a67d8" size="medium" text="Cargando..." />
      </div>
    );
  }

  if (!meal) {
    return <div>Postre no encontrado</div>;
  }

  return (
    <div className="meal-detail">
      <Link to="/categorias" className="back-btn">← Volver a categorías</Link>
      
      <div className="detail-content">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="detail-info">
          <h1>{meal.strMeal}</h1>
          <p><strong>Categoría:</strong> {meal.strCategory}</p>
          <p><strong>Origen:</strong> {meal.strArea || 'Desconocido'}</p>
          
          <h3>Instrucciones:</h3>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default MealDetail;
