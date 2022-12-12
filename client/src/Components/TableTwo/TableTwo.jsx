import "./TableTwo.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableTwo = () => {
  const rows = [
    {
      Company: "Hipi",
      Profile: "Product Manager",
      ID: "59"
    },
    {
      Company: "Newgen",
      Profile: "Python Developer",
      ID: "32"
    },
    {
      Company: "Celonis",
      Profile: "HRBP",
      ID: "165"
    },
    {
      Company: "Hipi",
      Profile: "Company Operation",
      ID: "104"
    }
  ];
  return (
    <div className="table-group">
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
            <TableRow style={{backgroundColor: "black"}}>
                <TableCell className="table-header">Company</TableCell>
                <TableCell className="table-header">Ownership</TableCell>
                <TableCell className="table-header">ID</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID}>
              <TableCell className="tableCell">{row.Company}</TableCell>
              <TableCell className="tableCell">{row.Profile}</TableCell>
              <TableCell className="tableCell">{row.ID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell className="table-header">Company</TableCell>
                <TableCell className="table-header">Sourcing</TableCell>
                <TableCell className="table-header">ID</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID}>
              <TableCell className="tableCell">{row.Company}</TableCell>
              <TableCell className="tableCell">{row.Profile}</TableCell>
              <TableCell className="tableCell">{row.ID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TableTwo;