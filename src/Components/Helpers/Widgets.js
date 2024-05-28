import React from "react";

const Widgets = ({ sm  ,color ,  title,value}) => {
  return (
    <>
    
      <div class={sm}>
        <div class={`widget-content-style ${color} full-height`}>
          <div class="row align-items-center p-20">
            <div class="col-4">
              <i class="ti-stats-up"></i>
            </div>
            <div class="col-8 text-right">
              <span class="text-white">{title}</span>
              <h2 class="mb-0 widget-content-text text-white">{value}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widgets;
