import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import mainQuestions from "../data/mainQuestions";

function MainQuestionsDropdown() {
  let [questionsId, setQuestionsId] = useState(0);
  let [mainQuestion, setMainQuestions] = useState(mainQuestions);

  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/answer/${id}`);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          🙋 어떤 도움이 필요하신가요??
        </Dropdown.Toggle>

        <Dropdown.Menu variant="grey">
          {mainQuestion.map((a, index) => {
            return (
              <Dropdown.Item
                id="dropdown-button-dark-example1"
                onClick={async () => {
                  setQuestionsId(index);
                  handleItemClick(index);
                }}
                key={index}
                active
              >
                {mainQuestion[index].title}
              </Dropdown.Item>
            );
          })}
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">
            🚘︎ 셔틀 운행은 어떻게 되는건가요?
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default MainQuestionsDropdown;
