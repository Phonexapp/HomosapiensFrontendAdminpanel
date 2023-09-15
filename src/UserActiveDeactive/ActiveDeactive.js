import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ActiveDeactive=(props)=>{
    return <>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color={"green"} fontSize={25} align='center'>
            Status:Active
          </Typography><br/>
        <Button variant="contained" style={{ marginRight: '20px' }}>Deactivate Account</Button>
        <Button variant="contained" style={{ marginRight: '10px' }}>Delete Account</Button>
        </Box>
      </Modal>
    </>
}


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

export default ActiveDeactive;