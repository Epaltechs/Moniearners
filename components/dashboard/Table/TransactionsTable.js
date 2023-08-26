import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F9FAFB',
    color: '#6B7280',
    fontStyle: 'bolder',
    fontWeight: 600,

    },
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#6B7280',
    opacity: 0.7,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 450,
    fontSize: '17px',
    lineHeight: '20px',
    borderStyle: 'none',
    filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.02))'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: '1px',
    paddingTop: '10px',
    paddingBottom: '30px',
    height:55,
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function TransactionTable({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(transactionId, fullName, email, transactionType, amount, status, date) {
    return { transactionId, fullName, email, transactionType, amount, status, date };
  }

  let rowData = data.map((row,index) => createData(row.transactionId, row.fullName, row.email, row.transactionType, row.amount, row.status, row.date ))

  const rows = [...rowData];


  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TRANSACTION ID </StyledTableCell>
            <StyledTableCell align="right"> NAME</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
            <StyledTableCell align="right">TRANSACTION TYPE</StyledTableCell>
            <StyledTableCell align="right">AMOUNT</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right">DATE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.transactionId}>
              <StyledTableCell component="th" scope="row" style={{ color: '#374151', fontWeight: 600, fontSize: '18px', opacity: 0.7  }}>
                {row.transactionId} <br /> {row.type}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: '#374151', opacity: 0.65 }}>{row.fullName}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.email}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.transactionType}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.amount}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65, color: `${row.status === 'Completed' ? '#27AE60' : '#FF9B26'}`}}>{row.status}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

TransactionTable.propType = {
  data: PropTypes.exact({
    transactionId: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    transactionType: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
  })
}