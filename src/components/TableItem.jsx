import { TableCell, TableRow } from "@mui/material";

const TableItem = ({ name, type }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{type}</TableCell>
    </TableRow>
  );
};

export default TableItem;
