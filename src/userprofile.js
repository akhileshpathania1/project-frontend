import { useDispatch, useSelector } from "react-redux";
import Navigationbar from "./navigationbar";

const Userprofile = () => {
  const userprofile = useSelector((state) => state.userprofile);
  const user = {
    firstname: "Akhilesh",
    surname: "Pathania",
    mobileNumber: "7888876773",
    addressLine1: "",
    addressLine2: "",
    postCode: "141015",
    city: "Ludhiana",
    area: "Mundian Kalan",
    state: "Punjab",
    country: "India",
    emailId: "akhileshpathania01@gmail.com"
  };
  const dispatch = useDispatch();
  const saveprofile = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        firstname: "Akhilesh",
        surname: "Pathania",
        mobileNumber: "7888876773",
        addressLine1: "",
        addressLine2: "",
        postCode: "141015",
        city: "Ludhiana",
        area: "Mundian Kalan",
        state: "Punjab",
        country: "India",
        emailId: "akhileshpathania01@gmail.com"
      }
    });
  };
  return (
    <>
      <Navigationbar />
      <div className="userprofile">
        <div class="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span className="font-weight-bold">
                  {userprofile[0].firstname} {userprofile[0].surname}
                </span>
                <span class="text-black-50">{userprofile[0].emailId}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-9 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].firstname}
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">{userprofile[0].surname}</label>
                    <input
                      type="text"
                      class="form-control"
                      value=""
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].mobileNumber}
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].addressLine1}
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].addressLine2}
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Postcode</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].postCode}
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Area</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].area}
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].emailId}
                      value=""
                    />
                  </div>
                </div>
                <div claclassNamess="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder={userprofile[0].country}
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      class="form-control"
                      value=""
                      placeholder={userprofile[0].state}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={() => {
                      saveprofile();
                    }}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Userprofile;
