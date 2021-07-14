import logo from "./Olive_vector_logo_white.svg";

const Header = () => (
    <header className="row header">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo"/>
        </div>
    </header>
);

export default Header;