import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/blogs/add" element={<AddBlog />} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;
