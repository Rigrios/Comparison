import * as React from "react";
import "./QuantityShow.css";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setQuantityShow } from "../../reducers/phone-reducer";

export default function QuantityShow() {
  const quantityShow = useAppSelector((state) => state.phonePage.quantityShow);
  const dispatch = useAppDispatch();

  const pages = [];
  for (let i: number = 2; i < 7; i++) {
    pages.push(i);
  }

  const setCurrentPage = (e: React.MouseEvent<HTMLSpanElement>) => {
    const current = (e.target as HTMLElement).textContent;
    dispatch(setQuantityShow(Number(current)));
  };

  return (
    <div className="QuantityShow">
      <div className="container">
        <div className="QuantityShow__body">
          <h1>Смартфоны</h1>
          <div>
            Отобразить товары :{" "}
            {pages &&
              pages.map((el) => (
                <span
                  key={el}
                  className={el === quantityShow ? "current-Page" : ""}
                  onClick={setCurrentPage}
                >
                  {el}
                </span>
              ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
