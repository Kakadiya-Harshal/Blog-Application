import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";
import { useSelector } from "react-redux";

function App() {
  //To grab the value of the 'isLoggedIN' we used 'useSelector'
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
