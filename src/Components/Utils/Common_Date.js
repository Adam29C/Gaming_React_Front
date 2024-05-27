import moment from "moment/moment";


export const show = (cell) => {
  return moment(cell).format("DD MMM hh:mm A");
};
