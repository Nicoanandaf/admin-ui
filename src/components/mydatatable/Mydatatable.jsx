import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "cateName", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, cateName: "Makanan" },
  { id: 2, cateName: "Minuman" },
  { id: 3, cateName: "Cemilan" },
  { id: 4, cateName: "Paket" },
  { id: 5, cateName: "Buah" },
];

/*const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/categories/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
        </div>
      );
    },
  },
];*/

const Mydatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat()}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
