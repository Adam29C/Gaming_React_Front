import React, { useEffect } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link, useNavigate } from "react-router-dom";
import { getGameRule } from "../../../Redux/Slice/common/common.slice";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import { GameRuleDeleteApi , GameRuleListStatus } from "../../../Service/superadmin.service";

const GameRuleList = () => {
  const token = localStorage.getItem("token");
  const { getGameRuleState, isLoading } = useSelector(
    (state) => state.CommonSlice
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },

    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <Form.Check
            type="switch"
            id="custom-switch"
            defaultChecked={row?.status}
            onChange={(e) => handleStatusUpdate(e.target.checked, row?._id)}
            className="custom-switch"
          />
        </>
      ),
    },
    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <Link to={`/super/rules/add`} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1"></i>
              </span>
            </Link>

            <Link href="#" onClick={() => handleDeleteGameRule(cell?._id)}>
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1"></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getGameRule(token));
  }, []);

  const data = getGameRuleState?.data;

  const handleDeleteGameRule = async (id) => {
    const confirmed = window.confirm(
      "Do You Really Want To Remove This  Game Rule"
    );
    if (confirmed) {
      const response = await GameRuleDeleteApi(id, token);
      if (response.statusCode == 200) {
        toast.success(response.msg);
        dispatch(getGameRule(token));
      } else {
        toast.error(response.msg);
      }
    } else {
      console.log("");
    }
  };

  const handleStatusUpdate = async (value, id) => {
    let data = {
      ruleId: id,
      status: value,
    };

    const response = await GameRuleListStatus(data, token);
    if (response?.statusCode === 200) {
      toast.success(response.msg);
      dispatch(getGameRule(token));
    } else {
      toast.error(response.msg);
    }

  };
  const handleAdd = () => {
    navigate("/super/bankdetail/add");
  };
  return (
    <>
      <Content
        title="Bank Details"
        addtitle="Add Bank"
        handleAdd={handleAdd}
        col_size={12}
      >
        <Data_Table isLoading={isLoading} columns={columns} data={data} />
        <ToastButton />
      </Content>
    </>
  );
};

export default GameRuleList;
