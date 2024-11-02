import Menu from "./components/Menu";
import Categories from "./components/Categories";
import item from "./Data/data";
import "./App.css";
import { useState } from "react";

const allCategories = ["all",...new Set(item.map((items) => items.category))]


function App() {
  const [menuItem, setMenuItem] = useState(item);
  const [categories, ] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(item);
      return;
    }

    const newItems = item.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu item={menuItem} />
      </section>
    </main>
  );
}

export default App;
