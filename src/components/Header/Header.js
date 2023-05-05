import "../Header/Header.css";

export default function Header({ handleFilter }) {
  return (
    <header>
      <h1>Horned Beast Lab</h1>
      <form>
        <span className="header-span">Filter beast by the number of horns</span>
        <select name="hornFilter" onChange={handleFilter}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </header>
  );
}
