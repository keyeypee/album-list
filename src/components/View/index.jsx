import React, { useState, useEffect } from "react";
import axios from "axios";

import GridView from "./GridView";
import TableView from "./TableView";
import { Container, Heading, Loading, SwitchView } from "./styles";

const View = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isListView, setListView] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id || 1}`)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setLoading(false);
        }
      });
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loading>Fetching Details...</Loading>
      ) : (
        <>
          <Heading>Showing Details of Album Id {id || 1}.</Heading>
          <SwitchView
            onClick={() => {
              setListView(!isListView);
            }}
          >
            {isListView ? "Switch To GridView" : "Switch To TableView"}
          </SwitchView>
          {isListView ? <TableView data={data} /> : <GridView data={data} />}
        </>
      )}
    </Container>
  );
};

export default View;
