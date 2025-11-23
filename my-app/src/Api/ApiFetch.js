async function getMeals() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
  
  return data.meals.map(meal => ({
    ...meal,
    price: Math.floor(Math.random() * 20) + 5
  }));
}

export { getMeals };
