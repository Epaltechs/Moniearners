import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderColor } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

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

export default function ProductLinkModal({handleClose, handleOpen, open, user }) {

  const showLink = (row) => {
    handleClose()
  }

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
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize:20, fontWeight: 600, width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
              <CloseIcon onClick={() => showLink(handleClose)} style={{ cursor: 'pointer'}} />
            </div>
           <div style={{ width: '42px', background: '#FFEEEE', padding: '8px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            < DeleteOutlineIcon style={{ color: '#FF0000'}} />
           </div>
           <div>
            <b style={{ color: '#374151', fontWeight: 500, fontSize: '14px' }}>Delete User</b>
            <p style={{ color: '#949494', fontWeight: 400, fontSize: '12px' }}>Are you sure you want to delete Ralph Edward from users</p>
           </div>
           <div style={{ marginTop: '15px'}}>
            <button style={{ color: '#D19D3B', background: 'none', paddingLeft: '70px', cursor: 'pointer', fontWeight: '500', fontSize: '10px', borderRadius: '6px', paddingTop: '7px', paddingBottom: '7px', paddingRight: '70px', border: '1px solid #D19D3B', marginRight: '20px', }} >NO</button>
            <button style={{ color: '#FFF', background: '#D19D3B', paddingLeft: '70px', paddingTop: '7px', fontWeight: '500', fontSize: '10px', borderRadius: '6px', paddingBottom: '7px', paddingRight: '70px', border: '1px solid #D19D3B', marginRight: '20px', }} >YES</button>

           </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 4 }}>
            {/* Product Link: <a href={link} target="_blank" style={{ color: 'blue'}} >{link}</a> */}
          </Typography>

          {/* <Button variant='outlined' sx={{ width: 400, height: 40, borderColor: '#D19D3B', color: '#D19D3B'}} ><a href={link} target="_blank">Visit Link</a></Button> */}
        </Box>
      </Modal>
    </div>
  );
}