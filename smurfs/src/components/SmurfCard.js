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


const SmurfCard = props => {

    const [modalVisible, setModalVisible] = useState(false);

    const updateTitle = `Update ${props.smurf.name}'s information`;



    return(
        <>
        <Card>
            <h2>I am {props.smurf.name}</h2>
            <h3>I am {props.smurf.age} years old</h3>
            <h4>I am {props.smurf.height}cm short!</h4>
            <ButtonHolder>
                <Button onClick={() => setModalVisible(true)}>Edit Me!</Button>
                <Button onClick={() => setModalVisible(true)}>Delete Me!</Button>
            </ButtonHolder>
        </Card>
        <Modal
            title={updateTitle}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            okText="Update Smurf"
        >
            <p>Howdy</p>
            <p>Doody</p>
        </Modal>
    </>
    )
}

export default SmurfCard;