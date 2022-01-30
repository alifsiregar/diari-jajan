import { useState, useEffect } from "react";
import { Header, Drawer, Card } from "./components";
import Data from "./consts/data";

function App() {
  const [isDrawer, setIsDrawer] = useState(false);
  const [data, setData] = useState(Data.daily_expenses);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const triggerDrawer = (e) => {
    setIsDrawer(e);
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].products.reduce(
        (accum, item) => accum + parseInt(item.price),
        0
      );
    }
    return total;
  };

  const submitItem = () => {
    const isExist = data.filter((item) => {
      return item.date === parseInt(date);
    });

    const randomNum = Math.floor(Math.random() * 100 + 1);

    if (
      (parseInt(date) >= 1 &&
      parseInt(date) <= 28) &&
      time !== "" &&
      name !== "" &&
      price !== ""
    ) {
      if (isExist.length !== 0) {
        isExist[0].products.push({
          id: randomNum,
          time: time,
          name: name,
          price: price,
        });
        setData(
          data.map((item) => (item.date === parseInt(date) ? isExist[0] : item))
        );
      } else {
        setData([
          ...data,
          {
            date: parseInt(date),
            products: [
              {
                id: randomNum,
                time: time,
                name: name,
                price: price,
              },
            ],
          },
        ]);
      }
      setName("");
      setPrice("");
      setDate("");
      setTime("");
      setError("");
      setIsDrawer(false);
    } else {
      setError("Please fill all the field or date has to be between 1 and 28!");
    }
  };

  useEffect(() => {
    setTotal(getTotal());
  }, [data]);

  console.log(total)

  return (
    <>
      <div className="container">
        <Header
          total={total}
          triggerDrawer={(val) => triggerDrawer(val)}
        />
        <div className="body">
          {data
            .sort((a, b) => a.date - b.date)
            .map((item) => {
              return (
                <Card
                  data={item}
                />
              );
            })}
        </div>
      </div>
      {isDrawer && (
        <Drawer
          triggerDrawer={(val) => triggerDrawer(val)}
          date={date}
          setDate={(val) => setDate(val)}
          time={time}
          setTime={(val) => setTime(val)}
          name={name}
          setName={(val) => setName(val)}
          price={price}
          setPrice={(val) => setPrice(val)}
          error={error}
          setError={(val) => setError(val)}
          submitItem={() => submitItem()}
        />
      )}
      <style>
        {`
            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .body {
              margin: 32px 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 26px;
            }
          `}
      </style>
    </>
  );
}

export default App;
