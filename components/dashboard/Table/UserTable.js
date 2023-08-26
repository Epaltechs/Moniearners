import * as React from 'react';
import Link from 'next/link';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import copy from '../../../public/icons/trash.svg'
import eye from '../../../public/icons/eye.svg'
import Image from 'next/image';

import PropTypes from "prop-types";
import UserModal from '../modals/UserModal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const typeArr = [ "Ebook", "video", "book", "video", "book", "video", "book", "video" ]


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F9FAFB',
    color: '#6B7280',
    fontStyle: 'bolder',
    fontWeight: 600,
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
    paddingTop: '20px',
    paddingBottom: '50px',
    height:70
}));


export default function UserTable({ data })  {
  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({});
  const [productName, setProductName] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(name, email, userId, role, totalSales, totalCommission, type) {
    return { name, email, userId, role, totalSales, totalCommission, type};
  }

  let rowData = data.map((row,index) => createData( row.name, row.email, row.userId, row.role, row.totalSales, row.totalCommission, row.type ))

  const rows = [...rowData];

  const showLink = (row) => {
    setProductName(row.email)
    setSelectedUser(row)
    handleOpen()
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>USER NAME </StyledTableCell>
            <StyledTableCell align="right"> USER ID</StyledTableCell>
            <StyledTableCell align="right">ROLE</StyledTableCell>
            <StyledTableCell align="right">TOTAL SALES</StyledTableCell>
            <StyledTableCell align="right">TOTAL COMMISSION</StyledTableCell>
            <StyledTableCell align="right" style={{paddingRight: 50}}>ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.productCode}>
              <StyledTableCell component="th" scope="row" style={{ color: '#374151', fontWeight: 500, fontSize: '14px', opacity: 0.8  }}>
                <b> {row.name} </b> <br /> <f style={{ color: '#9CA3AF', fontWeight: 400, fontSize: '12px', opacity: 0.8  }}>{row.email}</f>
              </StyledTableCell>
            
              <StyledTableCell align="right" style={{ color: '#6B7280', fontWeight: 400, fontSize: '14px', opacity: 0.65 }}>{row.userId}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: '#6B7280', fontWeight: 400, fontSize: '14px', opacity: 0.65 }}>{row.role}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: '#6B7280', fontWeight: 400, fontSize: '14px', opacity: 0.65 }}>{row.totalSales}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: '#6B7280', fontWeight: 400, fontSize: '14px', opacity: 0.65 }}>{row.totalCommission}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: '#6B7280', fontWeight: 400, fontSize: '14px', opacity: 0.65, paddingRight: 50 }}>
              <Link href="/admin/UserDetails">   <Image src={eye} height="20" width="20" style={{ color: 'black', opacity: 1, cursor:'pointer', marginRight: '10px', }} /></Link>
                <Image src={copy} height="20" width="20" style={{ color: 'black', opacity: 1,  cursor:'pointer' }} onClick={() => showLink(row)} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <UserModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        user={selectedUser}
        productName={productName}
      />

      {/* modal */}
   

    </TableContainer>
  );
}

UserTable.propType = {
  data: PropTypes.exact({
    name: PropTypes.string,
    userId: PropTypes.string,
    role: PropTypes.string,
    totalSales: PropTypes.string,
    totalCommission: PropTypes.string,
  })
}