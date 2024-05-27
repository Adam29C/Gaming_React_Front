import React from 'react'

const TransactionInfo = ({amount}) => {
  return (
    <div className="col-md-6">
    <form
      id="phonepeForm16485"
      method="post"
      encType="multipart/form-data"
      noValidate="novalidate"
    >
      <input
        type="hidden"
        name="_token"
        defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
      />
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="transactionId">
            Unique Transaction
            Reference
            <small
              style={{ color: "red" }}
            >
              *
            </small>
          </label>
          <input
            type="text"
            className="form-control"
            name="transaction_id"
            id="transactionId"
            placeholder="6 to 12 Digit UTR Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="proofOfDeposit16485">
            Upload Your Payment Proof
            <small
              style={{ color: "red" }}
            >
              [Required]
            </small>
          </label>
          <input
            type="file"
            className="form-control"
            name="deposit_proof"
            id="proofOfDeposit16485"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Amount
            <small
              style={{ color: "red" }}
            >
              *
            </small>
          </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            defaultValue={amount}
            disabled
            id="amount16485Input"
            
          />
          <div
            className="btn-group"
            style={{
              display: "none",
            }}
          >
            <button
              type="button"
              className="amount-shortcut"
              data-id={16485}
              data-amount={500}
              data-original-title=""
              title=""
            >
              +500
            </button>
            <button
              type="button"
              className="amount-shortcut"
              data-id={16485}
              data-amount={1000}
              data-original-title=""
              title=""
            >
              +1000
            </button>
            <button
              type="button"
              className="amount-shortcut"
              data-id={16485}
              data-amount={5000}
              data-original-title=""
              title=""
            >
              +5,000
            </button>
            <button
              type="button"
              className="amount-shortcut"
              data-id={16485}
              data-amount={10000}
              data-original-title=""
              title=""
            >
              +10,000
            </button>
            <button
              type="button"
              className="amount-shortcut"
              data-id={16485}
              data-amount={50000}
              data-original-title=""
              title=""
            >
              +50,000
            </button>
            <button
              type="button"
              className="amount-shortcut"
              data-id={16485}
              data-amount={100000}
              data-original-title=""
              title=""
            >
              +1,00,000
            </button>
          </div>
        </div>
        <input
          type="hidden"
          id="accountId"
          name="account_id"
          defaultValue={16485}
        />
        <div className="custom-control custom-checkbox d-flex">
          <input
            type="checkbox"
            className="custom-control-input"
            name="terms_condition"
            id="termsCheck16485"
          />
          <div>
          <label
            className="custom-control-label"
            htmlFor="termsCheck16485"
          >
            I have read and agree with
            <a
              href="#"
              data-toggle="modal"
              data-target="#termsAndCondition"
              className="terms-condition"
            >
              the terms of payment and
              withdrawal policy.
            </a>
          </label>
          </div>
        </div>
             {/* <div className='d-flex' >
          <input
            type="checkbox"
           
            name="terms_condition"
            id="termsCheck16485"
          />
         <div>
         <label
          
          htmlFor="termsCheck16485"
        >
          I have read and agree with
          <a
            href="#"
            data-toggle="modal"
            data-target="#termsAndCondition"
           
          >
            the terms of payment and
            withdrawal policy.
          </a>
        </label>
         </div>
        </div> */}
      </div>
      <div className="modal-footer">
        <button
          disabled=""
          type="submit"
          id="depositBtn"
          className="btn btn-info depositBtn"
          data-id={16485}
          data-original-title=""
          title=""
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default TransactionInfo