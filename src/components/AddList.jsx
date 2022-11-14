import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/action";
import { v4 as uuid } from "uuid";

function AddList() {
  //const edit_todos = useSelector((state) => state.add.data);
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTodo !== "") {
      dispatch(
        addTodo({
          id: uuid(),
          title: inputTodo,
          done: false,
        })
      );

      console.log(addTodo);

      setInputTodo("");
    }
  };

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div className="AddList">
      <div className="add-box">
        <input type="text" name="inputTodo" value={inputTodo} onChange={handleChange} />
      </div>
      <div className="add-button">
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default AddList;
