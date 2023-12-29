import * as React from "react";
import "./Properties.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import sort from "../../utils/sort";
import { IState, IPhones } from "../../reducers/phone-reducer";
import trueImg from "../../img/true.png";
import falseImg from "../../img/false.png";

const Properties: React.FC = () => {
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  const showDifferences = useAppSelector(
    (state) => state.phonePage.showDifferences
  );

  return (
    <div className="properties">
      <div className="container">
        {showDifferences ? (
          <PropertyTrue title={"ПРОИЗВОДИТЕЛЬ"} property={"brandName"} />
        ) : (
          <PropertyFalse title={"ПРОИЗВОДИТЕЛЬ"} property={"brandName"} />
        )}
        {showDifferences ? (
          <PropertyTrue title={"ГОД РЕЛИЗА"} property={"releaseYear"} />
        ) : (
          <PropertyFalse title={"ГОД РЕЛИЗА"} property={"releaseYear"} />
        )}
        {showDifferences ? (
          <PropertyTrue
            title={"ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)"}
            property={"displaySize"}
          />
        ) : (
          <PropertyFalse
            title={"ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)"}
            property={"displaySize"}
          />
        )}
        {showDifferences ? (
          <PropertyTrue
            title={"СТРАНА-ПРОИЗВОДИТЕЛЬ"}
            property={"countryBrand"}
          />
        ) : (
          <PropertyFalse
            title={"СТРАНА-ПРОИЗВОДИТЕЛЬ"}
            property={"countryBrand"}
          />
        )}
        {showDifferences ? (
          <PropertyTrue title={"ОБЪЕМ ПАМЯТИ"} property={"memory"} />
        ) : (
          <PropertyFalse title={"ОБЪЕМ ПАМЯТИ"} property={"memory"} />
        )}
        {showDifferences ? (
          <PropertyTrue
            title={"ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА"}
            property={"ScreenRefreshRate"}
          />
        ) : (
          <PropertyFalse
            title={"ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА"}
            property={"ScreenRefreshRate"}
          />
        )}
        {showDifferences ? (
          <PropertyTrue title={"NFC"} property={"nfc"} />
        ) : (
          <PropertyFalse title={"NFC"} property={"nfc"} />
        )}
        {showDifferences ? (
          <PropertyTrue title={"ПОДДЕРЖКА ESIM"} property={"supportEsim"} />
        ) : (
          <PropertyFalse title={"ПОДДЕРЖКА ESIM"} property={"supportEsim"} />
        )}
        {showDifferences ? (
          <PropertyTrue
            title={"ПОДДЕРЖКА БЕЗПРОВОДНОЙ ЗАРЯДКИ"}
            property={"wirelessCharger"}
          />
        ) : (
          <PropertyFalse
            title={"ПОДДЕРЖКА БЕЗПРОВОДНОЙ ЗАРЯДКИ"}
            property={"wirelessCharger"}
          />
        )}
        {showDifferences ? (
          <PropertyTrue title={"СТОИМОСТЬ"} property={"price"} />
        ) : (
          <PropertyFalse title={"СТОИМОСТЬ"} property={"price"} />
        )}
      </div>
    </div>
  );
};

type PropertyProps = {
  title: string;
  property: keyof IPhones;
};

const PropertyTrue: React.FC<PropertyProps> = ({ title, property }) => {
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  return (
    <>
      {sort(phonesPreview, property) ? (
        ""
      ) : (
        <div className="property brand-name">
          <div className="property__brand-name">{title}</div>
          {phonesPreview.map((el) => {
            return (
              <div className="property__brand-name-phone">
                {el[property] === true ? (
                  <img src={trueImg} alt="" />
                ) : el[property] === false ? (
                  <img src={falseImg} alt="" />
                ) : (
                  el[property]
                )}{" "}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

const PropertyFalse: React.FC<PropertyProps> = ({ title, property }) => {
  const phonesPreview = useAppSelector(
    (state) => state.phonePage.phonesPreview
  );
  return (
    <div className="property brand-name">
      <div className="property__brand-name">{title}</div>
      {phonesPreview &&
        phonesPreview.map((el) => {
          return (
            <div className="property__brand-name-phone">
              {el[property] === true ? (
                <img src={trueImg} alt="" />
              ) : el[property] === false ? (
                <img src={falseImg} alt="" />
              ) : (
                el[property]
              )}{" "}
            </div>
          );
        })}
    </div>
  );
};

export default Properties;
