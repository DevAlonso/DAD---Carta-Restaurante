function Header({ sortOrder, setSortOrder }) {
  
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  }
  
  return (
    <header>
      <h1>Restaurant Menu</h1>
      <h2 className="Category">Seafood</h2>
      <select 
        className="sortButton"
        value={sortOrder}
        onChange={handleSortChange}
      >
        <option value="Default">Recomendados</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </header>
  )
}

export default Header
