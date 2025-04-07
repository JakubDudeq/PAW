import { Link } from "react-router-dom";
import "../styles/layout.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="layout">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
        </nav>
        <main>{children}</main>
    </div>
);

export default Layout
