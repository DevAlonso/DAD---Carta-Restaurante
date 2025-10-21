async function getMeals(URL) {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export default getMeals;
