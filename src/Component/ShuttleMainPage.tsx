import "../App.css";
import { useState, useEffect, useRef } from "react";

function SuttleMainPage() {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.039587, 127.050191);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  let [carByTime, setCarByTime] = useState([
    "1시 차량",
    "2시 차량",
    "3시 차량",
  ]);
  let [peopleRideCar, setPeopleRideCar] = useState(0);
  let [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          ref={mapElement}
          style={{
            width: "400px",
            height: "400px",
          }}
        />
      </div>

      {carByTime.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setNumber((number = i));
              }}
            >
              {carByTime[i]}
            </h4>
            {peopleRideCar}
            <br />
            <button
              className="spanBoundary"
              onClick={(e) => {
                e.stopPropagation();
                setPeopleRideCar(peopleRideCar + 1);
              }}
            >
              🚗 차량 탑승 신청 🚗
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
}

function Modal(props: any) {
  return (
    <div className="modal">
      <h4>{props.carByTime[props.number]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.setCarByTime(props.carByTime[0]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default SuttleMainPage;
