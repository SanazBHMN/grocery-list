import { useState } from "react";
import "./App.css";
import groceryCartImg from "./assets/grocery-cart.jpg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  const handleChangeInputValue = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleAddGroceryItem = (e) => {
    if (e.key === "Enter") {
      // console.log("Enter was pressed");
      if (inputValue) {
        setGroceryItems([
          ...groceryItems,
          {
            name: inputValue,
            quantity: 1,
            completed: false,
          },
        ]);
        setInputValue("");
      }
    }
  };

  return (
    <main className="app">
      <div>
        <div>
          <h4 className="success">You're Done</h4>
          {/* {JSON.stringify(groceryItems)} */}
          <div className="header">
            <h1>Shopping List</h1>
            <img src={groceryCartImg} alt="grocery cart" />
            <input
              type="text"
              placeholder="Add an item"
              className="item-input"
              value={inputValue}
              onChange={handleChangeInputValue}
              onKeyDown={handleAddGroceryItem}
            />
          </div>
        </div>
        <ul>
          {groceryItems.map((item) => (
            <li>
              <div className="container">
                <input type="checkbox" name="" id="" />
                <p>{item.name}</p>
              </div>
              <div>
                <button className="remove-button">X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
