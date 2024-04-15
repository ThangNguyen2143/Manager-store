import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ProductCart() {
  const [amount, setAmount] = useState(1);
  return (
    <div className=" align-middle border ">
      <div className="flex">
        <div className="my-12 ml-2 mr-4">
          <Form.Check aria-label="option 1" />
        </div>
        <div className="my-2 w-8 sm:w-auto">
          <img src="/images/Spcart.png"></img>
        </div>
        <div className="my-12 ml-10 -mr-7 ">Đám Trẻ Ở Đại Dương Đen</div>
        <div className=" my-12 ml-6 sm:ml-96">99.000đ</div>
        <div className="my-12 ml-44 mr-5 ">
          <button className="py-0.5 px-2 border " onClick={() => setAmount((prev) => prev - 1)}>
            -
          </button>
          <span className="p-2 ">{amount}</span>
          <button className=" py-0.5 px-2 border " onClick={() => setAmount((prev) => prev + 1)}>
            +
          </button>
        </div>
        <div>
          <div className=" my-12 ml-6 sm:ml-36">99.000đ</div>
        </div>
        <div className=" my-12 ml-6 sm:ml-44">Xóa</div>
      </div>
    </div>
  );
}

export default ProductCart;
