import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/operation";

function AddTodo() {
  const dispatch = useDispatch();

  const [Todo, setTodo] = useState({ sub: "", body: "" });

  const onChange = (e) => {
    setTodo({ ...Todo, [e.target.name]: e.target.value });
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(Todo));
    setTodo({ sub: "", body: "" });
  };

  return (
    <div className="container">
      <h1 className="my-3">Create a Todo</h1>

      <form onSubmit={addTodoHandler} className="space-x-3 mt-12 border p-3 rounded card shadow">
        <div class="form-group">
          <label for="exampleInputEmail1">Todo Subject</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
          placeholder="Enter a Subject of Todo"
          name="sub"
          onChange={onChange}
          value={Todo.sub}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Todo Body</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          placeholder="Enter a Body of Todo"
          name="body"
          onChange={onChange}
          value={Todo.body}
          />
        </div>
        <button 
        type="submit" 
        class="btn btn-primary mt-3"
        disabled={Todo.body.length < 3 || Todo.sub.length < 3}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
