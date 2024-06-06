import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../features/todo/operation";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const [EditTodo, setEditTodo] = useState({
    id: null,
    sub: "",
    body: "",
  });

  const dispatch = useDispatch();
  const ref = useRef(null);
  const refClose = useRef(null);

  const updateTodo = (todo) => {
    ref.current.click();
    setEditTodo({
      id: todo.id,
      sub: todo.sub,
      body: todo.body,
    });
  };

  const onChange = (e) => {
    setEditTodo({ ...EditTodo, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    dispatch(editTodo(EditTodo));
    refClose.current.click();
  };

  
  return (
    <>
      <div className="container">
        <h2 className="my-3">Todos</h2>
        <div className="row p-3">
          {todos.map((todo) => (
            <div className="card col-3 m-2 rounded shadow" key={todo.id}>
              <div className="card-header d-flex">
                <h6>{todo.sub}</h6>
              </div>
              <div className="card-body">
                <p className="card-text my-3">{todo.body}</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                <button
                    className="btn-sm bg-danger  rounded "
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn-sm bg-success  rounded "
                    onClick={() => {
                      updateTodo(todo);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ~~~~~~~~ This is Editing Modal of Todo ~~~~~~~ */}
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Todo Edit Modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Todo
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="etitle" className="form-label">
                      Edit Subject of Todo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="sub"
                      placeholder="Enter Title Here"
                      value={EditTodo.sub}
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="edescription" className="form-label">
                      Edit Body of Todo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="body"
                      placeholder="Enter Description Here"
                      value={EditTodo.body}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  className="btn btn-primary"
                  disabled={EditTodo.body.length < 3 || EditTodo.sub.length < 3}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
