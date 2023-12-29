import * as React from "react";
import "./Header.css";
import icons from "../../img/Vector.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__body">
          <div className="catalog" style={{ color: "blue" }}>
            Каталог
          </div>
          <nav className="nav">
            <p>СРАВНЕНИЕ</p>
            <p>Личный кабинет</p>
            <img src={icons} alt="" />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
