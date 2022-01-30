import React from "react";
import {numberFormatter} from '../../helpers';

const Card = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <h2>{data.date} Februari</h2>
        <div className="body-card">
          {data.products
            .sort(function (a, b) {
              return a.time.localeCompare(b.time);
            })
            .map((item) => {
              return (
                <div className="item-container">
                  <div className="time">
                    <span>{item.time}</span>
                  </div>
                  <div className="name">
                    <span>{item.name}</span>
                  </div>
                  <div className="price">
                    <span>Rp {numberFormatter(item.price)}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="total-price">
          <span>Total</span>
          <span>
            Rp{" "}
            {numberFormatter(
              data.products.reduce(
                (accum, item) => accum + parseInt(item.price),
                0
              )
            )}
          </span>
        </div>
      </div>
      <style>
        {`
          .card-container {
            width: 400px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 5px;
            padding: 16px;
            height: min-content;
          }

          .card-container h2 {
            margin: 0;
            font-weight: 700;
          }

          .body-card {
            margin: 10px 0;
            overflow-y: scroll;
          }

          .item-container {
            display: grid;
            grid-template-columns: 15% 60% 25%;
            padding: 10px 0;
            border-top: 1px solid #D3D3D3;
          }

          .item-container:last-child {
            border-bottom: 1px solid #878787;
          }

          .item-container .price {
            text-align: end;
          }
          
          .total-price {
            text-align: end;
            font-weight: 700;
          }

          .total-price span:last-child {
            margin-left: 26px;
          }
        `}
      </style>
    </>
  );
};

export default Card;
