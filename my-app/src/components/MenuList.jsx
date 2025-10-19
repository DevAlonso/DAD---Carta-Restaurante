import MenuItem from "./MenuItem";

function MenuList({ meals, sortOrder }) {
    let displayedMeals = [...meals];
    
    if (sortOrder === 'Ascendente') {
        displayedMeals.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'Descendente') {
        displayedMeals.sort((a, b) => b.price - a.price);
    }
    
    return (
        <main className='cards-container'>
            {displayedMeals.map(function (meal) {
                return (
                    <MenuItem
                        key={meal.idMeal}
                        mealName={meal.strMeal}
                        mealImg={meal.strMealThumb}
                        precio={meal.price}
                    />
                )
            })}
        </main>
    )
}

export default MenuList
