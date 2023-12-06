import React, { useState } from "react";
import Button from "../component/Button";
import Header from "../component/Header";
// import Editor from "../component/Editor";

const Home = () => {
  const today = new Date();
  const [pivotDate, setPivotDate] = useState(today);
  const pivotYear = pivotDate.getFullYear();
  const pivotMonth = pivotDate.getMonth();
  const onIncreseMonth = () => {
    setPivotDate(pivotYear, pivotMonth + 1);
  };
  const onDecreseMonth = () => {
    setPivotDate(pivotYear, pivotMonth - 1);
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} />}
        title={"2023년 12월"}
        rightChild={<Button text={">"} />}
      />
    </div>
  );
};

export default Home;
