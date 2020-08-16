import React from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TableView = ({ data }) => {
  const columnDefs = [
    {
      headerName: "Id",
      field: "id",
    },
    {
      headerName: "Title",
      field: "title",
    },
    {
      headerName: "Thumbnail",
      field: "thumbnailUrl",
      valueFormatter: (v) => v.thumbnailUrl,
    },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "460px",
        width: "80%",
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={data}></AgGridReact>
    </div>
  );
};

export default TableView;
