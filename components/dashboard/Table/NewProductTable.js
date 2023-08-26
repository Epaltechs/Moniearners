import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import copy from '../../../public/icons/copyi.svg'
import eye from '../../../public/icons/eye.svg'
import Image from 'next/image';

import PropTypes from "prop-types";
import ProductLinkModal from '../modals/ProductLinkModal';


const typeArr = [ "Ebook", "video", "book", "video", "book", "video", "book", "video" ]


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
    paddingTop: '20px',
    paddingBottom: '50px',
    height:70
}));


export default function NewProductTable({ data }) {
  const [open, setOpen] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(productName, productCode, price, commission, vendor, link) {
    return { productName, productCode, price, commission, vendor, link };
  }

  let rowData = data.map((row,index) => createData(row.productName, row.productCode, row.price, row.commission, row.vendor, row.link ))

  const rows = [...rowData];

  const showLink = (row) => {
    setProductName(row.productName)
    setSelectedLink(row.link)
    handleOpen()
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PRODUCT NAME </StyledTableCell>
            <StyledTableCell align="right"> PRODUCT CODE</StyledTableCell>
            <StyledTableCell align="right">PRICE</StyledTableCell>
            <StyledTableCell align="right">COMMISSION</StyledTableCell>
            <StyledTableCell align="right">VENDOR</StyledTableCell>
            <StyledTableCell align="right" style={{paddingRight: 50}}>ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.productCode}>
              <StyledTableCell component="th" scope="row" style={{ color: 'black', fontWeight: 600, fontSize: '18px', opacity: 0.8  }}>
                {row.productName} <br /> {row.type}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.productCode}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.price}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.commission}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.vendor}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65, paddingRight: 50 }}>
                <Image src={eye} height="20" alt="open link" width="20" style={{ color: 'black', opacity: 1, cursor:'pointer', marginRight: '10px', }} onClick={() => showLink(row)} />
                <Image src={copy} height="20" alt="copy link" width="20" style={{ color: 'black', opacity: 1,  cursor:'pointer' }} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ProductLinkModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        link={selectedLink}
        productName={productName}
      />
    </TableContainer>
  );
}

NewProductTable.propType = {
  data: PropTypes.exact({
    productName: PropTypes.string,
    productCode: PropTypes.string,
    price: PropTypes.string,
    commission: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
  })
}
