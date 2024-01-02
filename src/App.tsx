import Navbar from "./components/navbar/Navbar";
import MENU_ITEMS from "./components/navbar/menuItems";

function App() {
  return (
    <>
      <Navbar menuItems={MENU_ITEMS} />
      <h1>Actions App</h1>
    </>
  );
}

export default App;
