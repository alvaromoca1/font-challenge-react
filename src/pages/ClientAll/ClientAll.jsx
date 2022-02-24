import React, {useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
import Table from '@mui/material/Table';
import {Button,Modal,Box,FormGroup,TextField,FormControl,InputLabel} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import{AllClient,RegisterClient} from '../../services/service';
import { NavBar } from '../../components';
import './ClientAll.css';


const ClientAll = () => {
  const navigate = useNavigate();
    const[state,setState]= useState({
        clientsData:[],error:"",value:"",names:"",lastName:"",birthday:new Date('2014-08-18T21:11:54')
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(async() => {
      
      const allClient=async()=>{
          return await AllClient()
          .then(
              async(reponse)=>{
                  console.log("data of client ok");
                  return reponse;
              }
          );
      }
      const dClient = await allClient();
      setState({...state,clientsData: dClient});
    },[state.value]);

    const doRegisterClient= async(event)=>{
        event.preventDefault();
        handleClose();
        await RegisterClient(state.names,state.lastName,state.birthday)
            .then(
                ()=>{
                    setState({...state,value: "on"});
                },
                error => {
                    setState({error: "Al parecer ocurrio un error verifique su informacion, gracias",alerta:true});
                }
            );
    }

    const changeHandler = (event) => {
      try {
        let nam = event.target.name;
        let val = event.target.value;
        setState({...state,[nam]: val});
        
      } catch (error) {
        console.log(event);
        let val = event;
        setState({...state,["birthday"]: val});
        
      }
      
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:3,
    boxShadow: 24,
    p: 2,
  };
  return(
      <div>
        <NavBar/>
        <div className='app__container'>
          <div className='app__client-card' style={{display:"flex",justifyContent: "space-between"}}>
            <div>
              <h3>Clients</h3>
              <span>Te mostramos la lista de clientes</span>
            </div>
            <Button size="large" color="primary" variant="contained" onClick={handleOpen}><AddIcon/>cliente</Button>
          </div>
          <div className='app__client-card'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombres</TableCell>
                    <TableCell align="right">Apellidos</TableCell>
                    <TableCell align="right">Nacimento</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {state.clientsData.map(client=> (
                    <TableRow
                      key={client._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {client.name}
                      </TableCell>
                      <TableCell align="right">{client.lastName}</TableCell>
                      <TableCell align="right">{new Date(client.birthDay).toLocaleDateString()}</TableCell>
                    </TableRow>
                ))}
                  
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form" onSubmit={doRegisterClient}>
                    <div className="app__client-form_header">
                        <span className="app__client-form_header_title">Comencemos!!</span>
                        <span className="app__client-form_header_subtitle">Listo para agregar un nuevo usuario!</span>
                    </div>
                    <FormGroup style={{margin: "0 0 20px 0"}}>
                        <TextField
                            required
                            id="outlined-basic" 
                            label="nombres" 
                            variant="outlined" 
                            name="names" 
                            value={state.names || ''} 
                            onChange={changeHandler}/>
                    </FormGroup>
                    <FormGroup style={{margin: "0 0 20px 0"}}>
                        <TextField
                            required
                            id="outlined-basic" 
                            label="Apellidos" 
                            variant="outlined" 
                            name="lastName" 
                            value={state.lastName || ''} 
                            onChange={changeHandler}/>
                    </FormGroup>
                    <FormGroup style={{margin: "0 0 20px 0"}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            label="Fecha de nacimeinto"
                            inputFormat="MM/dd/yyyy"
                            value={state.birthday || ''} 
                            onChange={changeHandler}
                            renderInput={(params) => <TextField name="birthday" {...params} />}
                          />
                        </LocalizationProvider>
                    </FormGroup>
                    
                    <Button size="large" color="primary" variant="contained" type="submit" sx={{marginTop:"20px"}}>Agregar Cliente</Button>

                </Box>
            </Modal>
    </div>
  );
};

export default ClientAll;
