import React, {useState} from "react";
import {Link} from "react-router-dom";
import ShoppingListForm from "./ShoppingListForm";

const ShoppingList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, name, updateShoppingList, deleteShoppingList} = props

const toggleForm = () => {
  setShowForm(!showForm);
};

  return (
    <div>
      <p>Name: {name}</p>
      <Link to={`/shoppinglists/${id}`}>View</Link>
      <button onClick ={toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </button>
      {showForm && <ShoppingListForm id = {id} name = {name} updateShoppingList = {updateShoppingList} deleteShoppingList = {deleteShoppingList}/>}
      <button onClick={() => deleteShoppingList(id)}>Delete</button>
    </div>
  );
};

export default ShoppingList;