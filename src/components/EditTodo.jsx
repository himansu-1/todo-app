import React from 'react';

function EditTodo({ isVisible, onClose, note, onChange, onSave }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded p-4 w-1/3">
        <h2 className="text-xl mb-4">Edit Todo</h2>
        <form onSubmit={onSave}>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            name="sub"
            placeholder="Enter a Subject of Todo"
            value={note.sub}
            onChange={onChange}
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            name="body"
            placeholder="Enter a Body of Todo"
            value={note.body}
            onChange={onChange}
          />
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded">
            Save
          </button>
          <button type="button" onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded ml-2">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTodo;
