import React, {useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
import { NavBar } from '../../components';
import{Average} from '../../services/service';

import './Avg.css';


const Avg = () => {
  const navigate = useNavigate();
    const[state,setState]= useState({
        average:0,clientCount:0,value:""
    });
    useEffect(async() => {
      
      const average=async()=>{
          return await Average()
          .then(
              async(reponse)=>{
                  console.log("data Average ok");
                  return reponse;
              }
          );
      }
      const daverage = await average();
      setState({clientCount: daverage.clientCount,average: daverage.avg});
    },[state.value]);



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
              <h3>Promedio</h3>
              <span>Te damos el promedio de edad</span>
            </div>
          </div>
          <div className='app__client-card'>
            <div>existen {state.clientCount} clientes  y el promedio de edades es <span style={{color: "rgb(94, 53, 177)",fontWeight: 900}}>{state.average}</span></div>
          </div>
        </div>
    </div>
  );
};

export default Avg;
