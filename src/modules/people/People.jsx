import { matchSorter } from "match-sorter";
import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Positions from "../../assets/positions.json";
import PeopleData from "./../../assets/people-data.json";
import YearsOfHire from "./../../assets/years-of-hire.json";
import ReactSelectInTable from "./../../components/ReactSelectInTable";

const People = () => {
  const peopleData = PeopleData;
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const positions = Positions;
  const yearsOfHire = YearsOfHire;

  const handleChange = (selectedPosition) => {
    setSelectedPosition(selectedPosition);
  };

  const handleChangeYear = (selectedYear) => {
    setSelectedYear(selectedYear);
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
            Cell: ({value}) => <div className="text-center">{value}</div>,
          },
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                id: "firstName",
                accessor: (d) => d.firstName,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {keys: ["firstName"]}),
                filterAll: true,
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: (d) => d.lastName,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {keys: ["lastName"]}),
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
                Cell: ({value}) => (value >= 25 ? "Yes" : "No"),
                filterMethod: (filter, row) => {
                  if (filter.value === "all") {
                    return true;
                  }
                  if (filter.value === "true") {
                    return row[filter.id] >= 25;
                  }
                  return row[filter.id] < 25;
                },
                Filter: ({filter, onChange}) => (
                  <select
                    onChange={(event) => onChange(event.target.value)}
                    style={{width: "100%"}}
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
              matchSorter(rows, filter.value, {keys: ["email"]}),
            filterAll: true,
          },
          {
            Header: "Position",
            accessor: "position",
            Cell: ({value}) =>
              (positions || []).find((position) => position.id === value)
                ?.name || "N/A",
            Filter: () => ReactSelectInTable(positions, selectedPosition, handleChange, 'name', 'id'),
          },
          {
            Header: "Hired in",
            accessor: "yearOfHire",
            Cell: ({value}) =>
              (yearsOfHire || []).find((yearOfHire) => yearOfHire.id === value)
                ?.description || "N/A",
            Filter: () => ReactSelectInTable(yearsOfHire, selectedYear, handleChangeYear, 'description', 'id'),
          },
        ]}
      />
    </div>
  );
};

export default People;
