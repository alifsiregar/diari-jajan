import React from "react";
import { numberFormatter } from "../../helpers";

const Header = ({ total, triggerDrawer }) => {
  return (
    <>
      <div className="header">
        <h1>Diari Jajan Februari 2021</h1>
        <h2>Pengeluaran Bulan Ini: Rp. {numberFormatter(total)}</h2>
        <button onClick={() => triggerDrawer(true)}>TAMBAH ITEM</button>
      </div>
      <style>
        {`
            .header {
                margin-top: 24px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
  
              .header h1 {
                font-weight: 500;
                margin: 0;
              }
  
              .header h2 {
                font-weight: 400;
                margin: 0;
              }
  
              .header button {
                margin-top: 20px;
                color: #fff;
                background: #3730a3;
                border: 0;
                border-radius: 2px;
                padding: 8px;
                width: 125px;
                cursor: pointer;
                font: 500;
                height: 30px;
                transition: all 0.5s ease-in-out;
              }
        `}
      </style>
    </>
  );
};

export default Header;
