import matchSorter from "match-sorter";
import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PeopleData from "./../../assets/people-data.json";

const People = () => {
  const [peopleData] = useState(PeopleData);
  const [columns] = useState([
    {
      Header: "ID",
      accessor: "id",
      filterMethod: (filter, row) =>
        row[filter.id].startsWith(filter.value) &&
        row[filter.id].endsWith(filter.value),
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
  ]);

  return (
    <>
      <ReactTable
        data={peopleData}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id] === filter.value)
        }
        columns={columns}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    </>
  );
};

export default People;
