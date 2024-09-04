import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
// import { colors } from '@mui/material';
// import { makeStyles } from '@mui/material';

function createData(name, TrackingId, date, status) {
    return { name, TrackingId, date, status };
}

const rows = [
    createData('Ciprofloxacin', 67498, '2nd Sep 2024', "Approved"),
    createData('Theophylline', 33424, '8th Aug 2024', "Pending"),
    createData('Pioglitazone', 24345, '1st Sep 2024', "Testing"),
    createData('Tramadol', 23344, '2nd Sep 2024', "Delivered"),
    createData('Atenolol', 24522, '3rd Sep 2024', "On Hold"),
];

const makeStyles=(status)=>{
    if(status ==='Approved'){
        return{
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if(status ==='Pending'){
        return{
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else if(status ==='Testing'){
        return{
            background: '#3AFFCB',
            color: 'black',
        }
    }
    else if(status ==='On Hold'){
        return{
            background: '#F34040',
            color: 'white',
        }
    }
    else{
        return{
            background: '#413AFF',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3 className='heading2'>Recent Orders</h3>

            <TableContainer component={Paper}
            style={{boxShadow:'0px 13px 20px 0px #80808029'}}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Tracking ID</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.TrackingId}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">
                                    <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="center" className='Details'><span>Details</span></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}