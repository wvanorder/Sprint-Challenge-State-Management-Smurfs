import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';

import 'antd/dist/antd.css';

import "./App.css";

const Card = styled.div`
    width: 400px;
    height: 400px;
    background-color: yellow;
    border: 3px solid white;
    margin: 15px 0px;
`

const ButtonHolder = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`

const Input = styled.input`
  color: black;
`

const SmurfCard = props => {

    const [modalVisible, setModalVisible] = useState(false);
    const [updatedSmurf, setUpdatedSmurf] = useState({name: props.smurf.name, age: props.smurf.age, height: props.smurf.height});

    const updateTitle = `Update ${props.smurf.name}'s information`;

    const handleChange = e => {
        e.preventDefault();
        setUpdatedSmurf({
          ...updatedSmurf,
          [e.target.name]: e.target.value
        })
      }

    const changeSmurf = (smurf, id) => {
        props.updateSmurf(smurf, id);
    }



    return(
        <>
        <Card>
            <h2>I am {props.smurf.name}</h2>
            <h3>I am {props.smurf.age} years old</h3>
            <h4>I am {props.smurf.height}cm short!</h4>
            <ButtonHolder>
                <Button onClick={() => setModalVisible(true)}>Edit Me!</Button>
                <Button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete Me!</Button>
            </ButtonHolder>
        </Card>
        <Modal
            title={updateTitle}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            okText="Update Smurf"
            onOk={() => changeSmurf(updatedSmurf, props.smurf.id)}
        >
            <form onSubmit={() => changeSmurf(updatedSmurf, props.smurf.id)}>
            <Input type='text' 
              name='name' 
              placeholder='' 
              value={updatedSmurf.name} 
              onChange={handleChange}
            />
            <Input type='number' 
              name='age' 
              placeholder='Age' 
              value={updatedSmurf.age} 
              onChange={handleChange}
            />
            <Input type='height' 
              name='height' 
              placeholder='Height' 
              value={updatedSmurf.height} 
              onChange={handleChange}
            />
            <button>Update Smurf</button>
          </form>
        </Modal>
    </>
    )
}

export default SmurfCard;