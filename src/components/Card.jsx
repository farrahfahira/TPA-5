import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action/action";

function Card() {
  const todos = useSelector((state) => state.add.data);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((item) => (
        <div className="Card" key={item.id}>
          <div className="box-checklist">
            <input type="checkbox" />
          </div>

          <div className="text-list">
            <h5>{item.title}</h5>
          </div>

          <div className="icon">
            <div className="edit">
              <button>edit</button>
            </div>
            <div className="remove">
              <button onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
