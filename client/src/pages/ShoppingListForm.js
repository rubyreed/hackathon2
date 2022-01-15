import React, {useState} from "react";
import axios from "axios";

const ShoppingListForm = (props) => {

  const {newestShoppingList} = props

  const [nameState, setNameState] = useState(initialName ? initialName : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newShoppingList = {name: nameState};

if (id) {
  let response = await axios.put(`/api/shoppinglists/${id}`, newShoppingList);
  }
  else {
    let response = await axios.post("/api/shoppinglists", newShoppingList);
    newestShoppingList(response.data)
  }
}

  return (
  <div>
    <h1>{id ? "Update" : "New"} Shopping List Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value = {nameState} onChange = {(e) => setNameState(e.target.value)}/>
       <br/>
        <button>{id ? "Update" : "Create"}</button>
      </form>
  </div>
  );
};


export default ShoppingListForm;