import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';
import './TodasCategorias.css';

function TodasCategorias() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      const data = await response.json();
      setCategories(data.categories);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Atom color="#5a67d8" size="medium" text="Cargando categorías..." />
      </div>
    );
  }

  return (
    <div className="todas-categorias">
      <h1>Todas las Categorías</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link 
            key={category.idCategory}
            to={`/categoria/${category.strCategory}`}
            className="category-card"
          >
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
            <p>{category.strCategoryDescription.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TodasCategorias;
