import React from "react";

import { GridCover, Box, Id, Title, Thumbnail } from "../styles";

const GridView = ({ data }) => {
  return (
    <GridCover>
      {data.map((item) => (
        <Box key={item.id}>
          <Title>{item.title}</Title>
          <Thumbnail src={item.thumbnailUrl} />
          <Id>#{item.id}</Id>
        </Box>
      ))}
    </GridCover>
  );
};

export default GridView;
