import styled from "styled-components";

export const SearchBox = styled.input`
  box-sizing: border-box;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  height: 40px;
  font-size: 16px;
  padding: 4px;
  transition: width 0.3s;
  text-indent: 8px;
  width: 100%;
  &:focus {
    width: 100%;
    outline: none;
    border: 1px solid #08a1b6;
  }
`;

export const UL = styled.ul`
  border: 1px solid #e7e7e7;
  outline: none;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 360px;
`;

export const Li = styled.li`
  padding: 8px;
  border-bottom: 1px solid #e7e7e7;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
  &.last-child {
    border-bottom: none;
  }
`;

export const NoOptions = styled.div``;

export const Container = styled.div`
  max-width: 280px;
`;
