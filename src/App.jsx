import { useEffect, useState } from "react";
import "./App.css";
import groceryCartImg from "./assets/grocery-cart.jpg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    determineCompletedStatus();
  }, [groceryItems]);

  const handleChangeInputValue = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleAddGroceryItem = (e) => {
    if (e.key === "Enter") {
      // console.log("Enter was pressed");

      if (inputValue) {
        const updatedGroceryList = [...groceryItems];

        const itemIndex = updatedGroceryList.findIndex(
          (item) => item.name === inputValue
        );

        if (itemIndex === -1) {
          updatedGroceryList.push({
            name: inputValue,
            quantity: 1,
            completed: false,
          });
        } else {
          updatedGroceryList[itemIndex].quantity++;
        }

        setGroceryItems(updatedGroceryList);
        setInputValue("");
      }
    }
  };

  const handleRemoveGroceryItem = (name) => {
    // console.log(name);
    const updatedGroceryList = [...groceryItems].filter(
      (item) => item.name !== name
    );

    setGroceryItems(updatedGroceryList);
    determineCompletedStatus();
  };

  const handleUpdateCompleteStatus = (status, index) => {
    const updatedGroceryList = [...groceryItems];
    updatedGroceryList[index].completed = status;

    setGroceryItems(updatedGroceryList);
  };

  const determineCompletedStatus = () => {
    if (!groceryItems.length) {
      return setIsCompleted(false);
    }

    let isAllCompleted = true;

    groceryItems.forEach((item) => {
      if (!item.completed) isAllCompleted = false;
    });

    setIsCompleted(isAllCompleted);
  };

  return (
    <main className="app">
      <div>
        <div>
          {isCompleted && <h4 className="success">You're Done</h4>}
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
          {groceryItems.map((item, index) => (
            <li key={index}>
              <div className="container">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    handleUpdateCompleteStatus(e.target.checked, index);
                  }}
                  value={item.completed}
                  checked={item.completed}
                />
                <p>
                  {item.name}{" "}
                  {item.quantity > 1 && <span>x{item.quantity}</span>}
                </p>
              </div>
              <div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveGroceryItem(item.name)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
