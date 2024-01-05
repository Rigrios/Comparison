import "./Preview.css";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import {
  setPhonesPreview,
  setShowDifferences,
  setRemainder,
  setPhonesRemainderPreview,
  setPhonesRemainderPreviewNewElement,
  setChangePhones,
} from "../../reducers/phone-reducer";
import g from "../../img/chevron_small.png";
import o from "../../img/o.png";
import { IPhones } from "../../reducers/phone-reducer";

function Preview() {
  const dispatch = useAppDispatch();
  const quantityShow = useAppSelector((state) => state.phonePage.quantityShow);
  const phones = useAppSelector((state) => state.phonePage.phones);
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  const phonesRemainder = useAppSelector(
    (state) => state.phonePage.phonesRemainder
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

  useEffect(() => {
    const setRemainderPhones = () => {
      const newElement = [];
      for (let i = 0; i < phones.length; i++) {
        if (phones[i].id !== phonesPreview[i]?.id) {
          newElement.push(phones[i]);
        }
      }
      dispatch(setRemainder(newElement));
    };
    setRemainderPhones();
  }, [phonesPreview]);

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
            phonesPreview.map((el, index) => (
              <ShowPhone
                key={index}
                index={index}
                img={el.img}
                name={el.name}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

interface IShowPhoneProps {
  img: string;
  name: string;
  index: number;
}

const ShowPhone: React.FC<IShowPhoneProps> = (props) => {
  const phones = useAppSelector((state) => state.phonePage.phones);
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  const [activeWindow, setActiveWindow] = useState(true);

  const listShow = () => {
    if (phones.length > phonesPreview.length) {
      return "list";
    } else {
      return "list-none";
    }
  };

  const activate = () => {
    setActiveWindow(!activeWindow);
  };

  return (
    <div className="show-phone">
      <div className="block-img" data-previewphones={props.index}>
        <div className="img">
          <img src={`/src/img/${props.img}`} />
        </div>
        <div className={listShow()}>
          <img src={g} onClick={activate} />
        </div>
        <PopapWindow activeWindow={activeWindow} />
      </div>

      <div className="block-name">{props.name}</div>
    </div>
  );
};

interface IPopapWindow {
  activeWindow: boolean;
}

const filterPhones = (textSearch: string, phonesArr: any) => {
  if (!textSearch) return phonesArr;
  return phonesArr.filter((el: any) => el.name.includes(textSearch));
};

const PopapWindow: React.FC<IPopapWindow> = ({ activeWindow }) => {
  const dispatch = useAppDispatch();
  const phonesRemainder = useAppSelector(
    (state) => state.phonePage.phonesRemainder
  );
  const phonesRemainderPreview = useAppSelector(
    (state) => state.phonePage.phonesRemainderPreview
  );

  useEffect(() => {
    dispatch(setPhonesRemainderPreview());
  }, [phonesRemainder]);
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const filteres = filterPhones(value, phonesRemainder);
    dispatch(setPhonesRemainderPreviewNewElement(filteres));
  }, [value]);

  const showPopapWindow = () => {
    if (activeWindow) {
      return "popap-window diActive-window";
    } else {
      return "popap-window";
    }
  };

  const inputClassName = () => {
    if (phonesPreview.length < 3) {
      return "input input-active";
    } else {
      return "input";
    }
  };

  const chengePhone = (e: any) => {
    const indexB = e.target.dataset.phone;
    const parent =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    const indexA = parent.dataset.previewphones;

    dispatch(setChangePhones([indexA, indexB]));
    console.log(phonesPreview);
    console.log(phonesRemainderPreview);
  };

  return (
    <div className={showPopapWindow()}>
      <input
        className={inputClassName()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск"
      />
      {phonesRemainderPreview &&
        phonesRemainderPreview.map((el, index) => {
          return (
            <div className="popap-window__body" key={index}>
              <div className="el">
                <div className="o">
                  <img src={o} data-phone={index} onClick={chengePhone} />
                </div>
                <div className="image">
                  <img src={`./src/img/${el.img}`} alt="" />
                </div>
                <div className="name-photo">{el.name}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Preview;
