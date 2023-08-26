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
    fontWeight: '500',
    fontSize: '12px',

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

  function createData( productname, type, name, commission, transactionType, amount, status, date) {
    return { productname, type, name, commission, transactionType, amount, status, date };
  }

  let rowData = data.map((row,index) => createData(row.productname, row.type, row.name, row.commission, row.transactionType, row.amount, row.status, row.date ))

  const rows = [...rowData];

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> <b>PRODUCT SOLD</b> </StyledTableCell>
            <StyledTableCell align="left"> <b>PAYMENT DATE</b></StyledTableCell>
            <StyledTableCell align="left"><b>AMOUNT</b></StyledTableCell>
            <StyledTableCell align="left"><b>COMMISSION</b></StyledTableCell>
            {/* <StyledTableCell align="left">AMOUNT</StyledTableCell> */}
            <StyledTableCell align="left"><b> STATUS </b></StyledTableCell>
            {/* <StyledTableCell align="left">DATE</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.productname}>
              <StyledTableCell component="th" scope="row" style={{ color: '#374151', fontWeight: 600, fontSize: '14px', opacity: 0.7  }}>
                {row.productname} <br /> <f style={{ color: '#9CA3AF', fontWeight: 400, fontSize: '12px', opacity: 0.8  }}>{row.type}</f>
              </StyledTableCell>
              <StyledTableCell align="left" style={{ color: '##6B7280', opacity: 0.65, fontWeight: '400', fontSize: '14px' }}>{row.date}</StyledTableCell>
              <StyledTableCell align="left" style={{ color: '#6B7280', opacity: 0.65, fontWeight: '400', fontSize: '14px' }}>{row.amount}</StyledTableCell>
              <StyledTableCell align="left" style={{ color: '#6B7280', opacity: 0.65, fontWeight: '400', fontSize: '14px' }}>{row.commission}</StyledTableCell>
              {/* <StyledTableCell align="left" style={{ color: 'black', opacity: 0.65 }}>{row.amount}</StyledTableCell> */}
              <StyledTableCell align="left" style={{ color: '#6B7280', opacity: 0.65, fontWeight: '400', fontSize: '14px', color: `${row.status === 'Completed' ? '#27AE60' : '#FF9B26'}`}}>{row.status}</StyledTableCell>
              {/* <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.date}</StyledTableCell> */}
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
    productname: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    transactionType: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
  })
}