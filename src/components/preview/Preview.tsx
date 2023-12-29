import "./Preview.css";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import {
  setPhonesPreview,
  setShowDifferences,
} from "../../reducers/phone-reducer";
import g from "../../img/chevron_small.png";

function Preview() {
  const dispatch = useAppDispatch();
  const quantityShow = useAppSelector((state) => state.phonePage.quantityShow);
  const phones = useAppSelector((state) => state.phonePage.phones);
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  useEffect(() => {
    function setNewArrayPhones() {
      const newArray = [];
      for (let i: number = 0; i < quantityShow; i++) {
        newArray.push(phones[i]);
      }
      dispatch(setPhonesPreview(newArray));
    }
    setNewArrayPhones();
  }, [quantityShow]);

  //   Показываем различия свойств
  const showCheck = (e: React.MouseEvent) => {
    if ((e.target as HTMLInputElement).checked) {
      dispatch(setShowDifferences());
    } else {
      dispatch(setShowDifferences());
    }
  };
  return (
    <div className="preview">
      <div className="container">
        <div className="preview__body">
          <div className="show-differences">
            <label>
              <input type="checkbox" onClick={showCheck} />
              Показать различия
            </label>
          </div>
          {phonesPreview &&
            phonesPreview.map((el) => (
              <ShowPhone img={el.img} name={el.name} />
            ))}
        </div>
      </div>
    </div>
  );
}

interface IShowPhoneProps {
  img: string;
  name: string;
}

const ShowPhone: React.FC<IShowPhoneProps> = (props) => {
  return (
    <div className="show-phone">
      <div className="block-img">
        <div className="img">
          <img src={`/src/img/${props.img}`} alt="" />
        </div>
      </div>

      <div className="block-name">{props.name}</div>
    </div>
  );
};

export default Preview;
