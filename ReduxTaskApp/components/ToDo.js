import React, { useState } from "react";
import { addToDo, deleteToDo, removeToDo, removeTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";
const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.toDoReducers.list);
  const dispath = useDispatch();
  return (
    <div>
      <figcaption>Add Your List Here...</figcaption>
      <br />
      <div>
        <input
          type="text"
          placeholder="Add List Item"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => dispath(addToDo(inputData), setInputData(""))}>
          Add
        </button>
        <div>
          {list.map((elem) => {
            return (
              <div key={elem.id}>
                <span>{elem.data} </span>
                <button
                  onClick={() =>
                    dispath(deleteToDo(elem.id))
                  }
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <button style={{ marginTop: "20px" }} onClick={()=>dispath(removeToDo())}>Remove All</button>
    </div>
  );
};

export default ToDo;
