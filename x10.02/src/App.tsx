import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Categories from "./pages/Categories";
import Layout from "./components/Layout";

const App = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    </Layout>
);

export default App;
