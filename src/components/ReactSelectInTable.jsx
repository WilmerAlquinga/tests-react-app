import Select from "react-select";
import React from "react";
import PropTypes from "prop-types";

const ReactSelectInTable = (items, selectedItem, handleChange, optionLabel, optionValue) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "33px",
      height: "33px",
    }),

    valueContainer: (provided) => ({
      ...provided,
      height: "33px",
    }),

    input: (provided) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "33px",
    }),
  };

  const customFilter = (option, searchText) => {
    return !!(option?.data?.description?.toLowerCase().includes(searchText?.toLowerCase()));
  };

  return (
    <Select
      options={items}
      value={selectedItem}
      onChange={handleChange}
      isClearable
      isSearchable
      placeholder="Select position..."
      getOptionLabel={(item) => item[optionLabel]}
      getOptionValue={(item) => item[optionValue]}
      menuPortalTarget={document.body}
      styles={customStyles}
      filterOption={customFilter}
    />
  );
}

ReactSelectInTable.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  optionLabel: PropTypes.string.isRequired,
  optionValue: PropTypes.string.isRequired
};

export default ReactSelectInTable;
