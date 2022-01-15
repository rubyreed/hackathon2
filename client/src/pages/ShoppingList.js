import React, {useState} from "react";
import {Link} from "react-router-dom";
import ShoppingListForm from "./ShoppingListForm";

const ShoppingList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, name, updateShoppingList, deleteShoppingList} = props[0]
console.log(id)

const toggleForm = () => {
  setShowForm(!showForm);
};

const renderIngredientsList = () => {
  
}

  return (
    <div>
      {/* <p>Name: {name}</p>
      {/* <Link to={`/shopping_lists/${id}`}>View</Link> */}
      {/* <button onClick ={toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </button>
      {showForm && <ShoppingListForm id = {id} name = {name} updateShoppingList = {updateShoppingList} deleteShoppingList = {deleteShoppingList}/>}
      <button onClick={() => deleteShoppingList(id)}>Delete</button> */} */}
    </div>
  );
};

export default ShoppingList;