import React, { useState } from "react";
import todologo from "../images/todologo.jfif";
import "./Todo.css";

const Todo = () => {
  //state variables
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //logic for add a todo in todoList
  const addTodo = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  //logic for deleting a todo from todo list
  const deleteTodo = (id) => {
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  //logic for deleting all todos from todoList
  const removeAllTodos = () => {
    setItems([]);
  };

    const itemShow = items.map((elem, index) => {
        return (
          <div className="eachItem" key={index}>
            <h3>{elem}</h3>
            <i
              className="far fa-trash-alt add-btn"
              title="Delete Item"
              onClick={() => deleteTodo(index)}
            ></i>
          </div>
        );
      });

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todologo} alt="" />
            <figcaption>Add Your list here </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addTodo}
            ></i>
          </div>
          <div className="showItems">
            {itemShow}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAllTodos}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
