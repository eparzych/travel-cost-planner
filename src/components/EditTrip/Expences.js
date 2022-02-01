import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';


export const expenceCategories = [
    "transport",
    "accomodation",
    "ticket",         
    "food",
    "other"
]

export default function Expences(props) {
    const { expences, setExpences } = props;

    // const handleDateChange = (id, name, value) => {
    //     setExpences(expences.map(expence => {
    //         if (expence.id == id) {
    //             return { ...expence, [name]:value }
    //         } else {
    //             return expence
    //         }
    //     }))
    //     console.log(expences)
    // }

    const handleCommit = (e) => {
        setExpences(expences.map(expence => {
            if (expence.id == e.id) {
                return { ...expence, [e.field]:e.value }
            } else {
                return expence
            }
        }))
    }
    
    const columns = [
        { 
            field: 'date', 
            headerName: 'Date', 
            editable: true, 
            type: 'date',
            width: 200,
        //     renderCell: (params) =>
        //         <DatePicker
        //             value={params.value}
        //             // onChange={value => {handleDateChange(params.id, "date", value)}}
        //             renderInput={(params) => <TextField {...params} />} 
        //     />
        },
        {
            field: 'categoryId',
            headerName: 'Category',
            width: 250,
            editable: true,
            type: 'singleSelect',
            valueOptions: expenceCategories,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 400,
            editable: true,
        },
        {
            field: 'cost',
            headerName: 'Cost [zł]',
            type: 'number',
            width: 200,
            editable: true,
        },
    ];
    
    return (
        <div style={{height: "350px"}}>
            <DataGrid onCellEditCommit = {handleCommit}
                rows={expences}
                rowHeight= {35}
                columns={columns}
                pageSize={40}
                disableSelectionOnClick
            /> 
        </div>
    )
}