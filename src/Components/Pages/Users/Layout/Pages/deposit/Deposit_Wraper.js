import React, { useState } from "react";
import Transaction_Table from "./Transaction_Table";
import { Link } from "react-router-dom";
import Deposite_request from "./Deposite_request";
import Available_Option from "./Deposit_Details/Available_Option";
import Available_Option_Details from "./Deposit_Details/Available_Option_Details";
import TransactionInfo from "./Deposit_Details/TransactionInfo";
const Deposit = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleTransactionSubmit = () => {
    if (!amount) {
      setError("Amount is required.");
      return;
    } else if (amount <= 0) {
      setError("Please enter a valid positive number.");
      return;
    }
    setShow(true);
    setError("");
    setAmount(amount);
  };

  return (
    <>
      <main _ngcontent-fig-c57="" id="main" className="main">
        <router-outlet _ngcontent-fig-c57="" />
        <app-deposit-withdraw _nghost-fig-c63="">
          <div className="deposit_withdrawal">
            <h2 className="userscreen-title">
              <Link to="/" className="btn-xs deposit-btn">
                Back
              </Link>
            </h2>
            <div className="bankingUi">
              <div className="container-fluid">
                <div className="row ">
                  <div className="col-md-8 account-list">
                    <div className="row ">
                      {!show ? (
                        <div>
                          <Deposite_request
                            handleTransactionSubmit={handleTransactionSubmit}
                            setAmount={setAmount}
                            error={error}
                          />
                        </div>
                      ) : (
                        <div className="col-md-12">
                          <div>
                            <div className="col-md-12 account-list">
                              <nav>
                                <button
                                  className="btn  btn_color rules back_to_amount my-2"
                                  onClick={() => setShow(false)}
                                >
                                  &lt; Back
                                </button>

                                <Available_Option />
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                             
                             
                                <div
                                  className="tab-pane fade active show"
                                  id="nav-phonepe-16485"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={100.0}
                                            data-max={5000.0}
                                            id="account-name-16485"
                                          >
                                            PhonePe
                                          </h5>
                                          <div className="row">
                                            <Available_Option_Details/>
                                            <TransactionInfo  amount={amount}/>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-phonepe-16485"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                           
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <Transaction_Table />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </app-deposit-withdraw>
      </main>
    </>
  );
};

export default Deposit;
