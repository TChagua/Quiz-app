import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import he from "he";

const Wrapper = styled.section`
  width: 100%;
  min-width: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 60px;
  padding: 0 20px;
  background: ${props => (props.dragging ? "aliceblue" : "#fff")}
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  border-top: 6px solid #40a4f4;
  border-radius: 0.5em;

  h3,
  ol {
    width: 100%;
  }

  ol {
    list-style: upper-alpha inside;
    padding: 0;
  }

  h3 {
    padding: 20px 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    text-align: center;
    font-size: 1.2rem;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    word-wrap: break-word;
  }

  li {
    padding: 20px 40px;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    box-shadow: 0 1px 0px 0 rgba(0, 0, 0, 0.05);
  }

  li:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .red {
    color: #ee3e37;
    position: relative;

    &:after {
      content:"❌";
      color: #ee3e37;
      position: absolute;
      top: 35%;
      right:20px;
    }
  }

  .green {
    color: #03d1ab;
    position: relative;

     &:after {
      content: "✔️";
      color: #03d1ab;
      position: absolute;
      top: 35%;
      right:20px;
     }
  }
  .disabled {
    pointer-events: none;
  }
`;
const QuestionItem = ({ item, index, count, onSetCount }) => {
  const handleClick = (e, answer) => {
    answer.correct
      ? (e.target.className = "green") &&
        (e.target.parentElement.className = "disabled")
      : (e.target.className = "red") &&
        (e.target.parentElement.className = "disabled");
    if (e.target.classList.contains("green")) onSetCount(count + 1);
  };

  return (
    <Draggable draggableId={`draggable-${index}`} index={index}>
      {(provided, snapshot) => (
        <div style={{ margin: "auto", width: "30%" }}>
          <Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            dragging={snapshot.isDragging}
          >
            <h3>{he.decode(item.text)}</h3>
            <ol>
              {item.answers.map(answer => (
                <li
                  key={answer.text + item.text}
                  onClick={e => handleClick(e, answer)}
                >
                  {he.decode(answer.text)}
                </li>
              ))}
            </ol>
          </Wrapper>
        </div>
      )}
    </Draggable>
  );
};
export default QuestionItem;
