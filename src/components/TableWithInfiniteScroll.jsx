import React from "react";
import TableItem from "./TableItem";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useGetDataByInfiniteScroll from "../hooks/useGetDataByInfiniteScroll";
import { tableStyles } from "../assets/tableStyles";

const TableWithInfiniteScroll = () => {
  const { rows, loading, tableEl } = useGetDataByInfiniteScroll();

  return (
    <TableContainer style={tableStyles.tableContainer} ref={tableEl}>
      {loading && <CircularProgress style={tableStyles.circualProggress} />}
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, type }) => (
            <TableItem key={id} name={name} type={type} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWithInfiniteScroll;
