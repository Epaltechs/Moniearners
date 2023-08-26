import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import copy from '../../../public/icons/copy.svg'
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
    '@media (max-width: 780px)': {
      fontSize: '10px',
      fontWeight: 500,
      fontStyle: 'bold',

    }

    },
    [`&.${tableCellClasses.body}`]: {
    color: '#6B7280',
    opacity: 0.7,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 450,
    fontSize: '17px',
    lineHeight: '20px',
    borderStyle: 'none',
    
    filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.02))',
    '@media (max-width: 950px)': {
      fontSize: 12,
    }
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: '1px',
    paddingTop: '20px',
    paddingBottom: '50px',
    height:55
}));


export default function MarketPlaceTable({ data, affiliate }) {
  const [open, setOpen] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState("");
  const [currentAffiliate, setCurrentAffiliate] = React.useState(affiliate ? affiliate : "");
  const [productName, setProductName] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function createData(productName, productCode, price, commission, vendor, link) {
    return { productName, productCode, price, commission, vendor, link };
  }

  let rowData = data.map((row,index) => createData(row.productName, row.productCode, row.price, row.commission, row.vendor, row.link ))

  const rows = [...rowData];

  const showLink = (row, currentAffiliate) => {
    setProductName(row.productName)
    setSelectedLink(row.link)
    // setCurrentAffiliate(currentAffiliate)
    handleOpen()
  }

  return (<>
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
              <StyledTableCell component="th" scope="row" style={{ color: '#374151', fontWeight: 600, fontSize: '14px', opacity: 0.8, fontFamily: 'Inter'  }}>
                {row.productName} <br /> {row.type}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.productCode}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.price}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.commission}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65 }}>{row.vendor}</StyledTableCell>
              <StyledTableCell align="right" style={{ color: 'black', opacity: 0.65, paddingRight: 50 }}>
                <Image src={eye} height="20" width="20" alt="show Link" style={{ color: 'black', opacity: 1, cursor:'pointer', marginRight: '10px', }} onClick={() => showLink(row, currentAffiliate)} />
                <Image src={copy} height="20" width="20" alt="copy link" style={{ color: 'black', opacity: 1,  cursor:'pointer' }} />
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
        
        affiliate={affiliate}
      />
    </TableContainer>
    </>
  );
}

MarketPlaceTable.propType = {
  data: PropTypes.exact({
    productName: PropTypes.string,
    productCode: PropTypes.string,
    price: PropTypes.string,
    commission: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
  })
}