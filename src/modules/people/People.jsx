import { matchSorter } from "match-sorter";
import React, { useState } from "react";
import Select from "react-select";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Positions from "../../assets/positions.json";
import PeopleData from "./../../assets/people-data.json";

const People = () => {
  const [peopleData] = useState(PeopleData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [positions] = useState(Positions);

  const handleChange = (selectedPosition) => {
    setSelectedOption(selectedPosition);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "1.9rem",
      height: "1.9rem",
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "1.9rem",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "1.9rem",
    }),
  };

  return (
    <div className="min-h-100 w-95">
      <h3 className="card-title text-center mt-2 mb-3">People</h3>
      <ReactTable
        data={peopleData}
        filterable
        defaultPageSize={5}
        className="-striped -highlight"
        columns={[
          {
            Header: "ID",
            accessor: "id",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value) &&
              row[filter.id].endsWith(filter.value),
            width: 60,
            Cell: ({ value }) => <div className="text-center">{value}</div>,
          },
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                id: "firstName",
                accessor: (d) => d.firstName,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["firstName"] }),
                filterAll: true,
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: (d) => d.lastName,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["lastName"] }),
                filterAll: true,
              },
            ],
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age",
                width: 60,
              },
              {
                Header: "Over 25",
                accessor: "age",
                id: "over",
                Cell: ({ value }) => (value >= 25 ? "Yes" : "No"),
                filterMethod: (filter, row) => {
                  if (filter.value === "all") {
                    return true;
                  }
                  if (filter.value === "true") {
                    return row[filter.id] >= 25;
                  }
                  return row[filter.id] < 25;
                },
                Filter: ({ filter, onChange }) => (
                  <select
                    onChange={(event) => onChange(event.target.value)}
                    style={{ width: "100%" }}
                    value={filter ? filter.value : "all"}
                  >
                    <option value="all">Show All</option>
                    <option value="true">Can Drink</option>
                    <option value="false">Can't Drink</option>
                  </select>
                ),
              },
            ],
          },
          {
            Header: "Email",
            accessor: "email",
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["email"] }),
            filterAll: true,
          },
          {
            Header: "Position",
            accessor: "position",
            Cell: ({ value }) =>
              (positions || []).find((position) => position.id === value)
                ?.name || "N/A",
            Filter: ({ filter, onChange }) => (
              <Select
                options={positions}
                onChange={handleChange}
                value={selectedOption}
                isClearable
                isSearchable
                placeholder="Select position..."
                getOptionLabel={(position) => position["name"]}
                getOptionValue={(position) => position["id"]}
                menuPortalTarget={document.body}
                styles={customStyles}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default People;
