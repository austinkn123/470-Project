import './uni.css';
import React, {useState} from 'react';
import Navbar from './navbar';
//import { useNavigate } from "react-router-dom";
//import {Navigate} from 'react-router-dom';


function unis() {

    return (
        <div className="uni">
        <Navbar/>

        <center>
        <h2>Universities</h2>

        <div className='search'>
            <input type="search" className="search-bar form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="search" className="search-button btn btn-outline-primary">search</button>
        </div>

            <div className="tableDiv">
                <Table striped bordered hover size="sm">
                <thead align="center">
                    <tr className = "tableTop">
                        <th>UNIVERSITY:</th>
                        <th>PROGRAMS:</th>
                        <th>MAJORS:</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td>UNI1</td>
                        <td>Program 1, Program 2, Program 3</td>
                        <td>Major 1, Major 2, Major 3</td>
                    </tr>
                    <tr>
                        <td>UNI2</td>
                        <td>Program 1, Program 2, Program 3</td>
                        <td>Major 1, Major 2, Major 3</td>
                    </tr>
                    <tr>
                        <td>UNI3</td>
                        <td>Program 1, Program 2, Program 3</td>
                        <td>Major 1, Major 2, Major 3</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </center>
        
        </div>
    );
}
    
export default unis;