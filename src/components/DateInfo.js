import { Container, Row, Col } from "reactstrap";
import React, { useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import FuelProgressbar from "./FuelProgressbar";
import ElecProgressbar from "./ElecProgressbar";
import { PowerData } from "../data/data";

const DateInfo = () => {
  //const [value, onChange] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState(new Date(), []);
  //預設顯示資料
  const defaultData = [
    {
      totalFuel: "",
      totalPower: ""
    }
  ];
  const [allData, setData] = useState(defaultData);

  const handleOnclick = (date) => {
    //console.log(dayjs(selectedValue).format("YYYY-MM-DD"));
    const filteredData = PowerData.filter((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });
    setData(filteredData);
  };
  return (
    <div className="dateInfo">
      <Container>
        <Row>
          <Col>
            <Calendar
              calendarType="US"
              onChange={setSelectedValue}
              value={selectedValue}
              onClickDay={handleOnclick}
              maxDate={new Date()} // will not allow date later than today
              minDate={new Date(2022, 9, 1)} // will not allow date before 1st Oct 2022
              formatDay={(locale, date) => dayjs(date).format("D")} //移除後面的日期及顯示移除數字前方的0
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>燃料</h4>
            {allData.map((value) => (
              <FuelProgressbar value={value} />
            ))}
          </Col>
          <Col>
            <h4>發電量</h4>
            {allData.map((value) => (
              <ElecProgressbar value={value} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default DateInfo;
