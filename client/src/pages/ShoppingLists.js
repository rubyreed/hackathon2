import React, {useEffect, useState} from "react";
import axios from "axios";
import ShoppingListForm from "./ShoppingListForm";
import ShoppingList from "./ShoppingList";

const ShoppingLists = () => {

  const [shoppingList, setShoppingList] = useState([]);

    console.log(shoppingList);

  useEffect(() => {
    console.log("mounted");
    getShoppingLists();
  },[])

   const getShoppingLists = async () => {
    let response = await axios.get("/api/shopping_lists");
    setShoppingList(response.data)
  };

  const renderShoppingLists = () => {
    if (shoppingList.length === 0) {
      return <p>No Shopping Lists</p>
    }
    return shoppingList.map((shoppinglist) => {
      return <ShoppingList key={shoppingList.id}{...shoppingList} updateShoppingList={updateShoppingList} deleteShoppingList = {deleteShoppingList}/>;
    });
  };

  const updateShoppingList = (changedShoppingList) => {
    let updatedShoppingLists = shoppingList.map((shoppinglist) => (shoppinglist.id === changedShoppingList.id ? changedShoppingList : shoppinglist));
  setShoppingList(updatedShoppingLists)
  };

  const displayNewShoppingList = (shoppinglist) => {
    setShoppingList([shoppingList,...shoppingList])
  };

  const deleteShoppingList = async (id) => {
    let response = await axios.delete(`/api/shoppinglists/${id}`);
    let filteredShoppingLists = shoppingList.filter((shoppinglist) => shoppinglist.id !== id);
    setShoppingList(filteredShoppingLists);
  }

  return (
    <div>
    <h1>Shopping List</h1>
    <ShoppingListForm newestShoppingList={displayNewShoppingList}/>
    {renderShoppingLists()}
    </div>
  )
}

export default ShoppingLists;
