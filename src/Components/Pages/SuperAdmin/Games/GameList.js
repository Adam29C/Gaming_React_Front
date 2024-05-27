import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link } from "react-router-dom";
import { getGame, getGameRule } from "../../../Redux/Slice/common/common.slice";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import GameAdd from "./GameAdd";
import { GameDeleteApi } from "../../../Service/admin.service";
import { GameRuleListStatus } from "../../../Service/superadmin.service";

const GameList = () => {
  const token = localStorage.getItem("token");
  const { getGameListState,isLoading } = useSelector((state) => state.CommonSlice);
const [show, setShow] = useState(false);
  const[updateData,setUpdateData]=useState()

  const dispatch = useDispatch();
  const columns = [
    {
      name: "Game Name",
      selector: (row) => row?.gameName,
    },


    {
      name: "Status",
      selector: (row) => (
        <>
          <Form.Check
            type="switch"
            id="custom-switch"
            defaultChecked={row?.isShow}
            onChange={(e) => handleStatusUpdate(e.target.checked , row?._id)}
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
            <Link onClick={() => handleUpdate(cell)}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1"></i>
              </span>
            </Link>

            <Link href="#" onClick={() => handleDeleteGame(cell?._id)}>
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
    dispatch(getGame(token));
  }, []);

  const data = getGameListState?.data;

  const handleDeleteGame = async (id) => {
    const confirmed = window.confirm(
      "Do You Really Want To Remove This Game"
    );
    if (confirmed) {
      const response = await GameDeleteApi(id, token);
   
      if (response?.data?.statusCode == 200) {
        toast.success(response?.data?.msg);
        dispatch(getGame(token));
      } else {
        toast.error(response.msg);
      }
    } 
  };

  const handleStatusUpdate = async(value,id)=>{
    // let data ={
    //   ruleId: id,
    //   status: value
    // }
    

    // const response = await GameRuleListStatus(data,token)
    // if(response?.statusCode===200){
    //   toast.success(response.msg);
    //   dispatch(getGameRule(token));
      
    // }else {
    //   toast.error(response.msg);
    // }

  }

  const handleAdd = () => {
    setShow(true)
    setUpdateData("")

  };
  const handleUpdate = (data)=>{
    setUpdateData(data)
    setShow(true)
   


  }
  return (
    <>
      <Content title="Game" addtitle="Add Game" handleAdd={handleAdd} col_size={12}>
        <Data_Table isLoading={isLoading} columns={columns} data={data} />
        <ToastButton />
      </Content>
      <GameAdd show={show} setShow={setShow} updateData={updateData} />
      
    </>
  );
};

export default GameList;
