import "./App.css";
import groceryCartImg from "./assets/grocery-cart.jpg";

function App() {
  return (
    <main className="app">
      <div>
        <div>
          <h4 className="success">You're Done</h4>
          <div className="header">
            <h1>Shopping List</h1>
            <img src={groceryCartImg} alt="grocery cart" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Add an item"
              className="item-input"
            />
          </div>
        </div>
        <ul>
          <li>
            <div className="container">
              <input type="checkbox" name="" id="" />
              <p>Carrots</p>
            </div>
            <div>
              <button className="remove-button">X</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
