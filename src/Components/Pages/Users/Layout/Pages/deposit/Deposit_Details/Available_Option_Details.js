import React from 'react'

const Available_Option_Details = ({ displayData }) => {


  return (
    <div className="col-md-6">
      <div className="row justify-content-center">
        <div className="col-md-11">
          <div className="account-data">
            <p className="card-text">
              <b>{displayData.isBank === "true" ? "Name" : "Upi Name"}</b>: {displayData.isBank === "true" ? displayData.accountHolderName : displayData.upiName}
              <button
                className="btn btn-sm btn-success"
                data-clipboard-text="Swami cake and pastry"
                data-original-title=""
                title=""
              >
                <i className="fa-solid fa-copy" />
              </button>
            </p>
            <p className="card-text">
              <b>{displayData.isBank === "true" ? "Account Number" : "Upi Id"}</b>: {displayData.isBank === "true" ? displayData.accountNumber : displayData.upiId}
              <button
                className="btn btn-sm btn-success"
                data-clipboard-text="Q066817666"
                data-original-title=""
                title=""
              >
                <i className="fa-solid fa-copy" />
              </button>
            </p>
            <p className="card-text">
              <b> Min Amount </b>
              : {displayData.minAmount ? displayData.minAmount : 0}
              <button
                className="btn btn-sm btn-success"
                data-clipboard-text={
                  100
                }
                data-original-title=""
                title=""
              />
              <br />
            </p>

            <p className="card-text">
              <b> Max Amount </b>
              :{displayData.maxAmount ? displayData.maxAmount : 0}
              <button
                className="btn btn-sm btn-success"
                data-clipboard-text={displayData.maxAmount ? displayData.maxAmount : 0}
                data-original-title=""
                title=""
              />
              <br />
            </p>
            {
              (displayData.bankImage || displayData.barCodeImage) && (<img
                className="qr-code"
                src={displayData.isBank === "true" ? displayData.bankImage : displayData.barCodeImage}
              />)
            }

          </div>
        </div>
        <div className="col-md-11">
          <a
            href="https://www.upitobank.com"
            target="_blank"
          >
            <div className="card">
              <div className="card-body upi-bank">
                <p>
                  <b>
                    How To Transfer Upi
                    To Bank <br />
                    CLICK HERE
                    WWW.UPITOBANK.COM
                  </b>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-11">
          <a
            href="https://wa.link/dujjncd6942tunbfb52"
            target="_blank"
          >
            <div className="card">
              <div className="card-body payment-issues">
                <p>
                  <b>
                    FOR PAYMENT RELATED
                    ISSUES CLICK HERE
                  </b>
                  &nbsp;&nbsp;
                  <i className="fa-brands fa-whatsapp my-float" />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Available_Option_Details