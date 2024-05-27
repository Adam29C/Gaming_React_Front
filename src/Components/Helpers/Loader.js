import { React, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loader = ({lodersize}) => {

  const override = {
    display: "block",
    margin: "auto",
  };

  return (
    <div>
      <ClipLoader margin={5} color="#4bb6b9" size={lodersize ? lodersize : 15} cssOverride={override} />
    </div>
  );
};

export default Loader;
