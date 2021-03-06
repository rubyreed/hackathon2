import "./App.css";
import Home from "./pages/Home";
// import Protected from "./pages/Protected";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import AboutUs from "./pages/AboutUs";
import RecipeBook from "./pages/RecipeBook";
import ShoppingLists from "./pages/ShoppingLists";
import Profile from "./pages/Profile";
import FindRecipes from "./pages/FindRecipes"
import ShoppingListForm from "./pages/ShoppingListForm";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        {/* public routes go here */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      <Route element={<RequireAuth />}>
          {/* protected routes go here */}
        <Route path="/shoppinglists" element={<ShoppingLists />} />
        <Route path="/shoppinglists/:id/edit" element={<ShoppingListForm />} />
        <Route path="/recipebook" element={<RecipeBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/find" element={<FindRecipes />} />
        {/* <Route path="/protected" element={<Protected />} /> */}
        </Route>
    </Routes>
    </div>
  );
}

export default App;