import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../redux/redux";

export interface IPhones {
  id: number;
  name: string;
  brandName: string;
  releaseYear: number;
  displaySize: string;
  countryBrand: string;
  memory: string;
  ScreenRefreshRate: string;
  nfc: boolean;
  supportEsim: boolean;
  wirelessCharger: boolean;
  price: number;
  img: string;
}

export interface IState {
  phones: IPhones[];
  phonesPreview: IPhones[];
  phonesRemainder: IPhones[];
  phonesRemainderPreview: IPhones[];
  quantityShow: number;
  showDifferences: boolean;
}

const initialState: IState = {
  phones: [
    {
      id: 1,
      name: "Apple iPhone 12",
      brandName: "Apple",
      releaseYear: 2020,
      displaySize: "6,1",
      countryBrand: "Китай",
      memory: "128 гб",
      ScreenRefreshRate: "60 Гц",
      nfc: false,
      supportEsim: true,
      wirelessCharger: true,
      price: 81990,
      img: "iPhone-12.jpg",
    },
    {
      id: 2,
      name: "Xiaomi Mi 11 Lite",
      brandName: "Xiaomi",
      releaseYear: 2021,
      displaySize: "6,55",
      countryBrand: "Китай",
      memory: "128 гб",
      ScreenRefreshRate: "90 Гц",
      nfc: true,
      supportEsim: true,
      wirelessCharger: false,
      price: 27490,
      img: "Xiaomi Mi 11 Lite 1.jpg",
    },
    {
      id: 3,
      name: "Samsung Galaxy A72",
      brandName: "Samsung",
      releaseYear: 2021,
      displaySize: "6,7",
      countryBrand: "Вьетнам",
      memory: "128 гб",
      ScreenRefreshRate: "90 Гц",
      nfc: true,
      supportEsim: false,
      wirelessCharger: true,
      price: 32890,
      img: "A72 1.jpg",
    },
    {
      id: 4,
      name: "Samsung Galaxy S21",
      brandName: "Samsung",
      releaseYear: 2020,
      displaySize: "6,7",
      countryBrand: "Вьетнам",
      memory: "128 гб",
      ScreenRefreshRate: "90 Гц",
      nfc: true,
      supportEsim: false,
      wirelessCharger: true,
      price: 44890,
      img: "image 13.jpg",
    },
    {
      id: 5,
      name: "Apple iPhone Xr",
      brandName: "Apple",
      releaseYear: 2021,
      displaySize: "8,2",
      countryBrand: "Китай",
      memory: "128 гб",
      ScreenRefreshRate: "90 Гц",
      nfc: true,
      supportEsim: false,
      wirelessCharger: true,
      price: 81490,
      img: "image 14.jpg",
    },
    {
      id: 6,
      name: "Realme 8 Pro",
      brandName: "Realme",
      releaseYear: 2022,
      displaySize: "6,7",
      countryBrand: "Китай",
      memory: "128 гб",
      ScreenRefreshRate: "90 Гц",
      nfc: true,
      supportEsim: false,
      wirelessCharger: true,
      price: 62890,
      img: "image 15.jpg",
    },
  ],
  phonesPreview: [],
  phonesRemainder: [],
  phonesRemainderPreview: [],
  quantityShow: 3,
  showDifferences: false,
};

export const phoneReducer = createSlice({
  name: "phonePage",
  initialState,
  reducers: {
    setQuantityShow: (state, action: PayloadAction<number>) => {
      state.quantityShow = action.payload;
    },
    setPhonesPreview: (state, action: PayloadAction<IPhones[]>) => {
      state.phonesPreview = action.payload;
    },
    setShowDifferences: (state) => {
      state.showDifferences = !state.showDifferences;
    },
    setRemainder: (state, action: PayloadAction<IPhones[]>) => {
      state.phonesRemainder = action.payload;
    },
    setPhonesRemainderPreview: (state) => {
      state.phonesRemainderPreview = state.phonesRemainder;
    },
    setPhonesRemainderPreviewNewElement: (
      state,
      action: PayloadAction<IPhones[]>
    ) => {
      state.phonesRemainderPreview = action.payload;
    },
    setChangePhones: (state, action: PayloadAction<number[]>) => {
      const arr = action.payload.map((el) => Number(el));
      const [indexA, indexB] = arr;
      [state.phonesRemainderPreview[indexB], state.phonesPreview[indexA]] = [
        state.phonesPreview[indexA],
        state.phonesRemainderPreview[indexB],
      ];
    },
  },
});

export const {
  setQuantityShow,
  setPhonesPreview,
  setShowDifferences,
  setRemainder,
  setPhonesRemainderPreview,
  setPhonesRemainderPreviewNewElement,
  setChangePhones,
} = phoneReducer.actions;

export default phoneReducer.reducer;
