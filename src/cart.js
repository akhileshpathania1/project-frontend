import { useDispatch, useSelector } from "react-redux";
import Footer from "./footer";
import Shoppingcart from "./shoppingcart";
import Navigationbar from "./navigationbar";
import { Navigate, useNavigate } from "react-router";

import { db } from "./firebase";
import { deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";

function cart() {
  const itemsadded = useSelector((state) => state.itemsadded);
  const totalprice = useSelector((state) => state.totalprice);
  const allproducts = useSelector((state) => state.allproducts);

  let navigate = useNavigate();
  const dispatch = useDispatch();

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

  const onleftclickhandler = (id, index) => {
    if (itemsadded.find((x) => x.id === id).quantity >= 1) {
      const userDoc = doc(db, "cart", id);
      updateDoc(userDoc, {
        quantity: itemsadded.find((x) => x.id === id).quantity - 1
      });
      itemsadded.find((x) => x.id === id).quantity--;
      dispatch({
        type: "INCREASEQUANTITY",
        payload: itemsadded
      });
    }
    if (itemsadded.find((x) => x.id === id).quantity === 0) {
      onremoveclickhandler(id, index);
      const userDoc = doc(db, "cart", id);
      deleteDoc(userDoc);
    }
    calculateprice();
  };

  const onrightclickhandler = (id, index) => {
    const userDoc = doc(db, "cart", id);
    updateDoc(userDoc, {
      quantity: itemsadded.find((x) => x.id === id).quantity + 1
    });
    itemsadded.find((x) => x.id === id).quantity++;
    dispatch({
      type: "INCREASEQUANTITY",
      payload: itemsadded
    });

    calculateprice();
  };

  const onremoveclickhandler = (id, index) => {
    const userDoc = doc(db, "cart", id);
    deleteDoc(userDoc);
    itemsadded.find((x) => x.id === id).quantity = 1;
    dispatch({
      type: "REMOVEFROMCART",
      payload: index
    });
    let price = totalprice - itemsadded.find((x) => x.id === id).price;
    dispatch({
      type: "UPDATEPRICE",
      payload: price
    });
    calculateprice();
  };

  let shoppingcartcards = null;
  shoppingcartcards = (
    <div>
      {itemsadded.map((item, index) => {
        return (
          <Shoppingcart
            name={item.name}
            desc={item.Description}
            src={item.src}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
            onrightclick={() => onrightclickhandler(item.id, index)}
            onleftclick={() => onleftclickhandler(item.id, index)}
            onremoveclick={() => onremoveclickhandler(item.id, index)}
          />
        );
      })}
    </div>
  );

  return (
    <div>
      <Navigationbar />
      <section className="h-100 gradient-custom">
        <div className="container py-1">
          <div className="row  my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0" style={{ textAlign: "center" }}>
                    Cart - {itemsadded.length} items
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    {shoppingcartcards}

                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <p style={{ textAlign: "center" }}>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0" style={{ textAlign: "center" }}>
                    12.10.2020 - 14.10.2020
                  </p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p style={{ textAlign: "center" }}>
                    <strong>We accept</strong>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{itemsadded.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Free</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${totalprice}</strong>
                      </span>
                    </li>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={() => navigate("/checkout")}
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default cart;
