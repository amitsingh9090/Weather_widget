import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function MaterialUI(){

    let handleClick = () => {
    alert('Button clicked!');
  }
      return (
    <div>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick}>Click me! </Button>
      <Button variant="contained" onClick={handleClick} disabled >Click me2! </Button>
      <Button variant="contained" onClick={handleClick} color="error" >Click me3! </Button>
      <Button variant="contained" onClick={handleClick} color="success" >Click me4! </Button>
      <Button variant="outlined" onClick={handleClick} startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
      )
}