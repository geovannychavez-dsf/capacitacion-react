import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
}
export default function AlertDialog({ open, setOpen, onConfirm }: Readonly<AlertDialogProps>) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">"Deseas Borrar este personaje?"</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Una vez borrado no se puede recuperar
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>Aceptar</Button>
        <Button onClick={handleClose} autoFocus>
          cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
