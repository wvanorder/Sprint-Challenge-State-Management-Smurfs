import React from 'react';
import SmurfCard from './SmurfCard';
import styled from 'styled-components';

const List = styled.div`
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`


const SmurfList = props => {
    return(
        <List>
           {props.smurfs.map(smurf => {
               return <SmurfCard key={smurf.id} smurf={smurf} deleteSmurf={props.deleteSmurf} updateSmurf={props.updateSmurf}/>
           })}
        </List>
    )
}

export default SmurfList;