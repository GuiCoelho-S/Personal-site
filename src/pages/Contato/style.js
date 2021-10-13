import styled from "styled-components";
import { ContainerColor } from "components/common/container";

export const ContainerColorCenter = styled(ContainerColor)`
  margin: 0 auto;
`;

export const ContainerContato = styled.div`
  width: clamp(200px, 100%, 1280px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;

  h2 {
    padding-top: 20px;
  }
  form {
    width: clamp(200px, 100%, 600px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 40px;
    div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        color: #222222;
      }
      input {
        height: 35px;
        width: 100%;
        border: 1px solid #eb3838;
        border-radius: 6px;
        padding-left: 8px;
        font-size: 1rem;
        :focus {
          outline: 1px solid blue;
          border: 1px solid transparent;
        }
      }

      textarea {
        resize: none;
        width: 100%;
        min-height: 160px;
        border: 1px solid #eb3838;
        border-radius: 6px;
        padding-left: 8px;
        font-size: 1rem;
        font-family: "Roboto";
        color: #2c2e2e;
        :focus {
          outline: 1px solid blue;
          border: 1px solid transparent;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    box-sizing: border-box;
    input,
    textarea {
      width: 90% !important;
      align-self: center;
    }
  }
  h2 {
    color: #eb3838;
    font-size: 2rem;
    font-style: bold;
    font-weight: 400;
    font-family: "Orbitron", sans-serif;
    padding: 20px 0;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid transparent;
  color: white;
  background-color: red;
  align-self: center;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: white;
    color: red;
    border: 1px solid red;
  }
`;
