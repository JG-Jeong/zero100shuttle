import "../App.css";
import { useEffect, useState } from "react";

function HomeMainPage() {
  //현재 접속 시간을 알려주는 코드
  const [connectTime, setConnectTime] = useState(new Date());

  useEffect(() => {
    setConnectTime(new Date());
  }, []);

  return (
    <div>
      '제로백 PC방 고덕삼성점'을 방문해 주셔서 감사합니다.
      <br />
      앞으로 다양한 소식과 혜택/정보를 받으실 수 있습니다.
      <br />
      -------------------------------
      <br />
      반가워요 (๑˃̵ᴗ˂̵)و
      <br />
      -------------------------------
      <br />
      <p>접속 시간 - {connectTime.toLocaleString()}</p>
    </div>
  );
}

export default HomeMainPage;
