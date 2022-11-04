import React from "react";
import moment from "moment-timezone";
import "moment/locale/ko";
import { useState } from "react";
import { useRef } from "react";

export default function MomentExample() {
  const [day, setDay] = useState("");
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");
  return (
    <div>
      <h1>Moment</h1>
      <div>Imutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
      </div>
      <br />
      <div>Summer Time (New - york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기 :{" "}
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기 :{" "}
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hours")
          .format()}
      </div>
      <br />
      <div>Loop Year (Korea)</div>
      <div>
        2017년 1월 1일 1년 빼기 :{" "}
        {moment("2017-01-01").subtract(1, "years").format()}
      </div>
      <div>
        2017년 1월 1일 365일 빼기 :{" "}
        {moment("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어로 표기 : 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{moment("07-17-2021").format("YYYY년 MM월 DD일")}</div>
      <br />
      <div>생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <br />
        <br />
        <div>무슨 요일이었을까요?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00 는 몇 시간 차이일까?</div>
      <div>
        {moment("2021-07-17 03:00").diff("2021-07-18 02:00", "hours")}시간
      </div>
    </div>
  );
}
