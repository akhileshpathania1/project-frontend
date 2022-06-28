import Product from "./product";
import Shoppingcart from "./shoppingcart";
import Header from "./header";
import axios from "axios";
import { Component, useEffect, useState } from "react";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./cart";
import Navigationbar from "./navigationbar";
import { collection, setDoc, updateDoc } from "firebase/firestore";
import { createStore } from "redux";
import { db } from "./firebase";
import { doc, getDocs } from "firebase/firestore";

function Menu() {
  const allproducts = useSelector((state) => state.allproducts);
  const itemsadded = useSelector((state) => state.itemsadded);
  const totalprice = useSelector((state) => state.totalprice);

  const calculateprice = () => {
    let pp = 0;
    itemsadded.map((p) => {
      pp += p.price * p.quantity;
    });
    dispatch({
      type: "UPDATEPRICE",
      payload: pp.toFixed(2)
    });
    const cityRef = doc(db, "totalprice", "BJ");
    setDoc(cityRef, { totalprice: totalprice });
  };
  const dispatch = useDispatch();
  const addtocart = (index) => {
    const product = allproducts.find((x) => x.id === index);
    if (!itemsadded.find((x) => x.id === index)) {
      setDoc(doc(db, "cart", product.id), product);
      dispatch({
        type: "ADDTOCART",
        payload: product
      });
    } else {
      const userDoc = doc(db, "cart", index);
      updateDoc(userDoc, {
        quantity: itemsadded.find((x) => x.id === index).quantity + 1
      });
      itemsadded.find((x) => x.id === index).quantity++;
    }
    calculateprice();
  };

  /*
  onaddclickhandler = (productindex) => {
    const itemsadded = itemsadded;
    if (!itemsadded.includes(allproducts[productindex])) {
      itemsadded.push(allproducts[productindex]);
      let total = 0;
      itemsadded.map((product) => {
        total += product.price * (product.quantity == 0 ? 1 : product.quantity);
      });
      this.setState({
        totalprice: total
      });
      this.setState({ itemsadded: itemsadded });
    } else {
    }
  };
  */

  let products = null;
  products = (
    <>
      {allproducts.map((p, index) => {
        return (
          <Product
            name={p.name}
            description={p.Description}
            src={p.src}
            price={p.price}
            key={p.id}
            addtocartclicked={() => addtocart(p.id)}
          />
        );
      })}
    </>
  );

  return (
    <div>
      <Navigationbar />
      {/* Header*/}
      <Header />
      {/* Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Menu;
