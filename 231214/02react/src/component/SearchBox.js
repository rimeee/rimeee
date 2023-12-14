import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState();
  const changeKeyword = (event) => {
    setKeyWord(event.target.value);
  };
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyWord } });
  };
  return (
    <div>
      <Form onSubmit={searchByName}>
        <Row className="searchBox">
          <Col>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={changeKeyword}
            />
          </Col>
          <Col>
            <Button variant="secondary" type="submit">
              검색
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
