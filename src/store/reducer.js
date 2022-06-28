import { createStore } from "redux";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { useEffect } from "react";

const ref = collection(db, "Products");

const intialState = {
  users: [],
  loggedUser: null,
  allproducts: [],
  itemsadded: [],
  totalprice: 0,
  userprofile: [
    {
      firstname: "Enter First Name",
      surname: "Enter Surname",
      mobileNumber: "Enter Mobile Number",
      addressLine1: "Enter address line 1",
      addressLine2: "Enter address line 2",
      postCode: "Enter postcode",
      city: "Enter city",
      area: "Enter area",
      state: "State",
      country: "Country",
      emailId: "Enter email id"
    }
  ]
};

const getUsers = async () => {
  const data = await getDocs(ref);
  data.docs.map((doc) => {
    intialState.allproducts.push({ ...doc.data(), id: doc.id });
  });
};
getUsers();

const cartref = collection(db, "cart");
const getCart = async () => {
  const data = await getDocs(cartref);
  data.docs.map((doc) => {
    intialState.itemsadded.push({ ...doc.data() });
  });
};
getCart();

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        userprofile: [action.payload]
      };
    case "ADDTOCART":
      return {
        ...state,
        itemsadded: [...state.itemsadded, action.payload]
      };
    case "REMOVEFROMCART":
      return {
        ...state,
        itemsadded: [
          ...state.itemsadded.slice(0, action.payload),
          ...state.itemsadded.slice(action.payload + 1)
        ]
      };
    case "UPDATEPRICE":
      return {
        ...state,
        totalprice: action.payload
      };
    case "REDUCEQUANTITY":
      return {
        ...state,
        itemsadded: [
          ...state.itemsadded.slice(0, action.payload),
          ...state.itemsadded.slice(action.payload + 1)
        ]
      };
    case "INCREASEQUANTITY":
      return {
        ...state,
        itemsadded: [...state.itemsadded]
      };

    default:
      return state;
  }
};

export default createStore(reducer);
