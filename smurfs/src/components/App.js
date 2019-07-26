import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../store/actions';

import Loader from 'react-loader-spinner';
import { Button } from 'antd';

import "./App.css";

import SmurfList from './SmurfList';


const Input = styled.input`
  color: black;
`


const App = props => {
  const [newSmurf, updateNewSmurf] = useState({ name:'', age: '', height: ''});

  const handleChange = e => {
    e.preventDefault();
    updateNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    })
  }


    return (
      <div className="App">
        <div className="Header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <Button onClick={() => props.fetchSmurfs()}>Get Blue</Button>
          <form onSubmit={() => props.addSmurf(newSmurf)}>
            <Input type='text' 
              name='name' 
              placeholder='New Smurfs name' 
              value={newSmurf.name} 
              onChange={handleChange}
            />
            <Input type='number' 
              name='age' 
              placeholder='Age' 
              value={newSmurf.age} 
              onChange={handleChange}
            />
            <Input type='height' 
              name='height' 
              placeholder='Height' 
              value={newSmurf.height} 
              onChange={handleChange}
            />
            <button>Submit newSmurf</button>
          </form>
        </div>
        {props.isLoading && <Loader type="TailSpin" color="tomato" height={300} width={300} />}
        {props.smurfs && <SmurfList smurfs={props.smurfs} updateSmurf={props.updateSmurf} deleteSmurf={props.deleteSmurf}/>}
      </div>
    );
}

const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
