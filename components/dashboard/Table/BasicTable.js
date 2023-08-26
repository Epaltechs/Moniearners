import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from "prop-types";
import Cookies from 'js-cookie';
// import TablePagination from '@mui/material/TablePagination';

const typeArr = [ "Ebook", "video", "book", "video", "book", "video", "book", "video" ]

export default function BasicTables({ data, darkMode}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(id,productSold, paymentDate, amount, commission, status) {
    return { id, productSold, paymentDate, amount, commission, status };
  }

  let rowData = data.map((row,index) => createData(row.id, row.productSold, row.paymentDate, row.amount, row.commission, row.status))

  const rows = [...rowData];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: darkMode ?  '#0F0F0F' :'#F9FAFB',
      color: '#6B7280',
      fontStyle: 'bolder',
      fontWeight: 600,
      width: 300,
      '@media (max-width: 800px)': {
        fontSize:12,
        fontWeight: 500,
        fontStyle: 'bold',
      }
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: '#6B7280',
      opacity: 0.7,
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 450,
      fontSize: '17px',
      lineHeight: 0,
      borderStyle: 'none',
      filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.02))',
      '@media (max-width: 950px)': {
        fontSize: 14,
      }
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: darkMode ? '#0D0D0D' :'#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: '1px',
    paddingTop: 0,
    paddingBottom: '20px',
    height:56
}));


  return (
    <>
      <TableContainer component={Paper} sx={{ height:'auto', backgroundColor: darkMode ? 'black' : 'white'}}>
        <Table sx={{ minWidth: 700, height: "auto" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ minWidth: 200}} >PRODUCT SOLD </StyledTableCell>
              <StyledTableCell align="right" style={{ minWidth: 200}}> PAYMENT DATE</StyledTableCell>
              <StyledTableCell align="right">AMOUNT</StyledTableCell>
              <StyledTableCell align="right">COMMISSION</StyledTableCell>
              <StyledTableCell align="right">STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" style={{ color: '#374151', fontWeight: 600}}>
                  {row.productSold} - {row.type}
                </StyledTableCell>
                <StyledTableCell align="right">{row.paymentDate}</StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.commission}</StyledTableCell>
                <StyledTableCell align="right" style={{ color: '#27AE60'}}>{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      */}
    </>
  );
}

BasicTables.propType = {
  data: PropTypes.exact({
    id: PropTypes.string,
    productSold: PropTypes.string,
    paymentDate: PropTypes.string,
    amount: PropTypes.string,
    commission: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
  })
}