// import {React, useState, useContext} from 'react';
// import {Button} from '@mui/material';
// import {Dialog} from '@mui/material';
// import {DialogActions} from '@mui/material';
// import {DialogContent} from '@mui/material';
// import {DialogContentText} from '@mui/material';
// import {DialogTitle} from '@mui/material';
// import {CartContext} from './CartContext';

// const AddToCart = ({fn, message, btnContent, count, item}) => {
//     const [open, setOpen] =useState (false);
//     const {AddToCart} = useContext(CartContext);
    
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             <button onClick={handleClickOpen}>{btnContent}</button>
//             <Dialog 
//             open={open}
//             onClose={handleClose}
//             aria-labelledby='alert-dialog-title'
//             aria-describedby='alert-dialog-description'>
//                 <DialogTitle id='alert-dialog-title'> {message} </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id='alert-dialog-description'>Are you sure about that?</DialogContentText>

//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Disagree</Button>
//                     <Button onClick={ ()=> {
//                         handleClose();
//                         AddToCart({...item, count});
//                     }}
//                     autoFocus>Agree</Button>
//                 </DialogActions>
//             </Dialog>

//         </div>
//     );

// };

// export default AddToCart;