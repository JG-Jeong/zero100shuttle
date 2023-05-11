import "./../App.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface QustionsId {
  [key: string]: string;
}

function Answers() {
  let { id } = useParams<QustionsId>();
  let [answerPage, setAnswerPage] = useState<string | undefined>("0");

  useEffect(() => {
    setAnswerPage(id);
  }, [id]);

  switch (answerPage) {
    case "0":
      return (
        <>
          <Answers0 />
        </>
      );
    case "1":
      return <Answers1 />;
    case "2":
      return <Answers2 />;
    case "3":
      return <Answers3 />;
    case "4":
      return <Answers4 />;
    case "5":
      return <Answers5 />;
    case "6":
      return <Answers6 />;
    case "7":
      return <Answers7 />;
    case "8":
      return <Answers8 />;
    default:
      return <>잘못된 접근입니다.</>;
  }
}

function Answers0() {
  return <div>어떤 도움이 필요하신가요!?</div>;
}

function Answers1() {
  return (
    <>
      아래 카카오톡 친구추가 후 쿠폰을 발급해주세요!
      <br />s ---카카오톡 링크---
    </>
  );
}

function Answers2() {
  return (
    <>
      그럼요😆
      <br />
      <br />
      확인 부탁드립니다! <br />
      🚫 양면프린트는 안돼요😭 <br />
      🚫 정부 민원 서류 프린트 안돼요😱
      <br />
      <br />
      ⭐⭐가격표⭐⭐ <br />
      🔹흑백/컬러/사진 상관없이 : 1장당 500원
    </>
  );
}

function Answers3() {
  return <>피시방 사양 물어보는 질문임. </>;
}

function Answers4() {
  return (
    <>
      <br />
      아주 좋은 모니터가 준비되어있답니다🤗 <br />- 25인치 BENQ XL2546 (240hz){" "}
      <br />- 27인치 LG 27GL850 (NanoIPS, 144hz) <br />- 27인치 삼성 스페이스
      (QHD+144hz) <br />- 27인치 삼성 커브드 (1500R + 240hz) <br />이 외에도
      와이드 34인치, 32인치, 초대형 39인치도 구비되어있습니다 ^0^
    </>
  );
}

function Answers5() {
  return (
    <>
      <br />
      YES!! 건물 지하에 주차됩니다🙋‍♂ <br />
      🔥주차요금🔥
      <br /> ✅ 나가실때 카운터에 말씀해주시면 최대 3시간 무료! <br />✅ 3시간
      이후부터 10분 당 2,000원! <br />✅ 고덕 주차난때문에 주차요금이 비싸요
      ㅠㅠ <br />
      (건물 요금 정책이 바뀌었어요😞)
    </>
  );
}
function Answers6() {
  return <>매장 연락처</>;
}

function Answers7() {
  return (
    <>
      <br />
      연중무휴 24시 정상영업합니다❤
      <br />
      <br />밤 12시 - 아침 7시까지는 무인운영합니다!
    </>
  );
}
function Answers8() {
  return (
    <>
      <br />✅ 주소는 평택시 고덕여염9길 26 헤리움 프라자4차 지하1층
      <br />
      <br />✅ 라인에서 걸어서 5분거리!
      <br />
      <br />
      아래 버튼 클릭해서 지도로 확인해보세요👇
    </>
  );
}

export default Answers;
