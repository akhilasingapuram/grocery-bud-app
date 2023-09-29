import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <table className="grocery-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <tr className="grocery-item" key={id}>
            <td>{title}</td>
            <td>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
export default List;
