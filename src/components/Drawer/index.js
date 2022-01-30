import React from "react";

const Drawer = ({
  triggerDrawer,
  name,
  setName,
  date,
  setDate,
  price,
  setPrice,
  time,
  setTime,
  error,
  setError,
  submitItem,
  numberFormatter,
}) => {
  return (
    <div className="drawer">
      <div className="background-drawer" onClick={() => triggerDrawer(false)} />
      <div className="container-drawer">
        <h2>Tambah Entri</h2>
        <div className="body-drawer">
          <div className="input-container">
            <label>Tanggal:</label>
            <input
              onChange={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
                setDate(e.target.value);
              }}
              value={date}
              type="number"
              placeholder="Masukkan tanggal"
            />
          </div>
          <div className="input-container">
            <label>Waktu:</label>
            <input
              onChange={(e) => setTime(e.target.value)}
              type="time"
              placeholder="Masukkan waktu"
              value={time}
            />
          </div>
          <div className="input-container">
            <label>Nama:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Masukkan nama"
            />
          </div>
          <div className="input-container">
            <label>Harga:</label>
            <input
              onChange={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
                setPrice(e.target.value);
              }}
              value={price}
              type="number"
              placeholder="Masukkan harga"
            />
          </div>
        </div>
        {error !== "" && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}
        <div className="buttons-container">
          <button
            style={{
              background: "#6b7280",
            }}
            onClick={() => {
              triggerDrawer(false);
              setError("");
              setDate("");
              setName("");
              setPrice("");
              setTime("");
            }}
          >
            BATAL
          </button>
          <button
            style={{
              background: "#3730a3",
            }}
            onClick={() => submitItem()}
          >
            KIRIM
          </button>
        </div>
      </div>
      <style>
        {`
          .background-drawer{
            position: absolute;
            opacity: 0.75;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background: #000;
            z-index: 0;
          }

          .container-drawer{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            z-index: 999;
            background: white;
            width: 300px;
            padding: 16px;
          }

          .container-drawer h2 {
            margin: 0;
            font-weight: 500;
          }

          .body-drawer {
            margin: 14px 0;
          }

          .input-container{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .input-container:not(:last-child){
            margin-bottom: 12px;
          }

          .input-container label {
            margin-bottom: 5px;
          }

          .input-container input {
            width: 100%;
          }

          .buttons-container {
            display: flex;
            justify-content: flex-end;
          }

          .buttons-container button:not(:last-child) {
            margin-right: 10px;
          }

          .error-message {
            margin-bottom: 14px;
            color: red;
            font-size: 12px;
          }

          .buttons-container button {
            border: 0;
            padding: 10px;
            color: #fff;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Drawer;
