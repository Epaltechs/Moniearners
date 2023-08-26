import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderColor } from '@mui/system';
import Link from 'next/link'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function ProductLinkModal({handleClose, handleOpen, open, link, productName, affiliate }) {


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', fontSize:20, fontWeight: 600 }}>
           Product Name: {productName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 4 }}>
            Product Link: <a href={link} target="_blank" style={{ color: 'blue'}} >{link}</a>
          </Typography>

          <Button variant='outlined' sx={{ width: 400, height: 40, borderColor: '#D19D3B', color: '#D19D3B'}}  >
          <Link
              href={{
                pathname: `${link}`,
                query: {
                  productName,
                  affiliate
                }
              }}
            >
            Visit Link
            </Link>
            </Button>
        </Box>
      </Modal>
    </div>
  );
}