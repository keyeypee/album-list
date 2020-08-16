import React, { useState } from "react";

import Typeahead from "./components/Typeahead";
import View from "./components/View";
import { Container } from "./styles";

const App = () => {
  const [albumId, setAlbumId] = useState(null);

  return (
    <Container>
      <Typeahead
        placeholder="Type an Album Title"
        onSelect={(v) => {
          setAlbumId(v.id);
        }}
      />
      <View id={albumId} />
    </Container>
  );
};

export default App;
