import React, {useEffect, useState} from "react";
import axios from "axios";
import ShoppingListForm from "./ShoppingListForm";

const ShoppingLists = () => {

  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    console.log("mounted");
    getShoppingLists();
  },[])

   const getShoppingLists = async () => {
    let response = await axios.get("/api/shoppinglists");
    setShoppingLists(response.data)
  };

  const renderShoppingLists = () => {
    if (shoppinglists.length === 0) {
      return <p>No Shopping Lists</p>
    }
    return shoppinglists.map((shoppinglist) => {
      return <ShoppingList key={shoppinglist.id}{...shoppinglist} updateShoppingList={updateShoppingList} deleteShoppingList = {deleteShoppingList}/>;
    });
  };

  const updateShoppingList = (changedShoppingList) => {
    let updatedShoppingLists = shoppinglists.map((shoppinglist) => (shoppinglist.id === changedShoppingList.id ? changedShoppingList : shoppinglist));
  setShoppingLists(updatedShoppingLists)
  };

  const displayNewShoppingList = (shoppinglist) => {
    setShoppingLists([shoppinglist,...shoppinglist])
  };

  const deleteShoppingList = async (id) => {
    let response = await axios.delete(`/api/shoppinglists/${id}`);
    let filteredShoppingLists = shoppinglists.filter((shoppinglist) => shoppinglist.id !== id);
    setShoppingLists(filteredShoppingLists);
  }

  return (
    <>
    <h1>Shopping List</h1>
    <ShoppingListForm newestShoppingList={displayNewShoppingList}/>
    {renderShoppingLists()}
    </>
  )
}

export default ShoppingLists;
