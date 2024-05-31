import React from "react";
import Rules from "./Rules";

const Deposite_request = ({handleTransactionSubmit,setAmount,error}) => {




  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div>
            <div
              className="col-md-12 card amount-div"
              style={{ marginTop: 10 }}
            >
              <div className="card-body">
                <div id="amountForm"  >
                  <div className="form-group">
                    <label className="d-flex">Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        name="amount"
                        id="amount"
                        placeholder="Enter amount"
                        onChange={(e) => setAmount(e.target.value)}

                      />
                           

                      <div className="input-group-append">
                        <button
                          type="button"
                          onClick={(e)=>handleTransactionSubmit(e)}
                          className="input-group-text amountBtn"
                          data-wp-add=""
                          id="basic-addon2"
                        >
                          SUBMIT
                        </button>
                      </div>
                     
                    </div>
                  </div>
                 {error && <div style={{ color: 'red', marginTop: '5px',textAlign:"left" }}>{error}</div>}
                </div>
              </div>
            </div>
          </div>
          <Rules />
        </div>
      </div>
    </div>
  );
};

export default Deposite_request;
