import React, { useRef, useState } from "react";
import { arrayOf, shape, string, func } from "prop-types";
import axios from "axios";

import debounce from "../../utils/debounce";
import { SearchBox, UL, Li, NoOptions, Container } from "./styles";

const Typeahead = ({ placeholder, valueKey, labelKey, onSelect }) => {
  const inputRef = useRef();
  const [showList, setShowList] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  const onSetFilters = async () => {
    const { value } = inputRef.current;

    const res = await axios.get("https://jsonplaceholder.typicode.com/albums", {
      params: { q: value },
    });
    console.log("res", res, value);
    if (res.status === 200) {
      const filteredOptions = res.data.filter(
        (item) => item[labelKey].toLowerCase().indexOf(value) > -1
      );

      if (value) {
        setShowList(true);
        setFilterOptions(filteredOptions.slice(0, 10));
      } else {
        setShowList(false);
        setFilterOptions([]);
      }
    }
  };

  const onClick = (e) => {
    const desiredResult = filterOptions.find(
      (item) => item[labelKey] === e.currentTarget.innerText
    );
    onSelect(desiredResult);
    inputRef.current.value = desiredResult[labelKey];
    setShowList(false);
  };

  let optionList = null;

  if (showList) {
    if (filterOptions.length) {
      optionList = (
        <UL className="options">
          {filterOptions.map((item, index) => {
            let className;
            // if (index === activeOption) {
            //   className = "option-active";
            // }
            return (
              <Li className={className} key={item[valueKey]} onClick={onClick}>
                {item[labelKey]}
              </Li>
            );
          })}
        </UL>
      );
    } else {
      optionList = <NoOptions className="no-options">No Option!</NoOptions>;
    }
  }

  return (
    <Container>
      <SearchBox
        type="text"
        onChange={debounce(onSetFilters, 300)}
        ref={inputRef}
        placeholder={placeholder}
      />
      {optionList}
    </Container>
  );
};

Typeahead.propTypes = {
  options: arrayOf(shape({})).isRequired,
  labelKey: string,
  valueKey: string,
  value: shape({}),
  onSelect: func,
};

Typeahead.defaultProps = {
  labelKey: "title",
  valueKey: "id",
  value: {},
  onSelect: () => {},
};

export default Typeahead;
