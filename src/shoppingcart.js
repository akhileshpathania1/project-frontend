import Shoppingcartcss from "./shoppingcart.css";

const Shoppingcart = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={props.src} className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p id="productid" className="Shoppingcartcss">
            <strong>{props.name}</strong>
          </p>
          <p id="productid" className="Shoppingcartcss">
            Color: Pink
          </p>
          <div id="productidbtn" className="Shoppingcartcss">
            <button
              type="button"
              className="btn btn-primary btn-sm me-1 mb-2"
              data-mdb-toggle="tooltip"
              title="Remove item"
              onClick={props.onremoveclick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm mb-2"
              data-mdb-toggle="tooltip"
              title="Move to the wish list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="Shoppingcartcss" id="productidbtn">
            <div className="d-flex mb-4">
              <button
                className="btn btn-primary px-3 me-2"
                onClick={props.onleftclick}
              >
                -
              </button>
              <div className="form-outline">
                <input
                  id="form1"
                  min="0"
                  name="quantity"
                  value={props.quantity}
                  type="number"
                  className="form-control"
                  style={{ textAlign: "center" }}
                />
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  Quantity
                </p>
              </div>
              <button
                className="btn btn-primary px-3 ms-2"
                onClick={props.onrightclick}
              >
                +
              </button>
            </div>
          </div>
          <div className="Shoppingcartcss" id="productidbtn">
            <p className="Shoppingcartcss text-start text-md-center">
              <strong>${props.price}</strong>
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" id="productidhr" className="Shoppincartcss" />
    </div>
  );
};
export default Shoppingcart;
