import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { Generate_Token } from "../../../../../Redux/Slice/Auth/auth.slice";
import Loader from "../../../../../Helpers/Loader";
import { v4 } from "uuid";
import { getGameRule } from "../../../../../Redux/Slice/common/common.slice";
export const Rule = ({ setShow }) => {

  const [token, setToken] = useState("");
  const { getGameRuleState, isLoading } = useSelector(
    (state) => state.CommonSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const request1 = { deviceId: v4() };
      try {
        const res1 = await dispatch(Generate_Token(request1)).unwrap();
        if (res1.statusCode === 200) {
          const token = res1.data;
          setToken(token);
          await  dispatch(getGameRule(token));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className="user-modal-content">
      <app-rules-page _nghost-ket-c52="">
        <div _ngcontent-ket-c52="" className="user-card rules-container">
          <div _ngcontent-ket-c52="" className="card-header">
            <h4 _ngcontent-ket-c52="" className="mb-0">
              Rules
              <button
                _ngcontent-ket-c52=""
                type="button"
                aria-label="Close"
                className="btn-close close"
                onClick={() => setShow(false)}
              >
                <span _ngcontent-ket-c52="" aria-hidden="true">
                  ×
                </span>
              </button>
            </h4>
          </div>
          <div
            _ngcontent-ket-c52=""
            className="card-body container-fluid container-fluid-5"
          >
            <div _ngcontent-ket-c52="" className="row row5">
              <div _ngcontent-ket-c52="" className="col-12">
                <div _ngcontent-ket-c52="" role="tablist">
                  <div _ngcontent-ket-c52="" id="accordion">
                    <Accordion
                      defaultActiveKey={getGameRuleState?.data?.[0]?._id}
                      aria-multiselectable="true"
                    >
                      {isLoading ? (
                        <div className="user-loading-main">
                          <Loader lodersize={25}/>
                        </div>
                      ) : 
                      getGameRuleState?.data?.length > 0 ? 
                      (
                        getGameRuleState?.data?.map((item, index) => (
                          <Accordion.Item eventKey={item?._id} key={index}>
                            <Accordion.Header>{item?.title}</Accordion.Header>
                            <Accordion.Body>{item?.description}</Accordion.Body>
                          </Accordion.Item>
                        ))
                      ) 
                      : 
                      (
                        <div className="user-loading-main">
                        <p className="no-record-text">No records found</p></div>
                      )
                      }
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-rules-page>
    </div>
  );
};
