import React,{ useState,useEffect,useMemo} from "react";
import {useTable,useSortBy,usePagination,useFilters} from 'react-table';
import axios from "axios";
import './Table.css';
import { Pencil,Trash ,ThreeDotsVertical} from 'react-bootstrap-icons';
import {format} from 'date-fns';
import {Link} from 'react-router-dom';
import { ColumnFilter } from "./ColumnFilter";
import Box from './Modal';

 const Table = () => {
    const Columns =[
        {
           width: 200,
           Header:'ID', 
           accessor:'id',
           Filter :ColumnFilter
           
        },
        {
            Header:'FIRST NAME',
            accessor:'firstName',
            Filter :ColumnFilter,
            disableFilters:true

    
         },
         {
            Header:'LAST NAME', 
            accessor:'lastName',
            Filter :ColumnFilter,
            disableFilters:true
    
         },
         {
            Header:'ROLE', 
            accessor:'role',
            Filter :ColumnFilter,
            disableFilters:true

         },
         {
            Header:'DESIGNATION', 
            accessor:'designation',
            Filter :ColumnFilter,
            disableFilters:true
    
         },
         {
            Header:'SALARY', 
            accessor:'salary',
            Filter :ColumnFilter,
            disableFilters:true
    
         },
         {
            Header:'DOJ', 
            accessor:'doj',
            Cell:({value})=>{
                return format(new Date(value),'dd-MM-yyyy')
            },
            Filter :ColumnFilter,
            disableFilters:true

         },
         {
            Header:'ADDRESS', 
            accessor:'address',
            Filter :ColumnFilter,
            disableFilters:true
         },
         {
            width: 400,
            Header: "Actions",
            Cell: ({ cell }) => (
                <div>
                <span><Link  to={`/edit/${cell.row.original.id}`}>< Pencil 
                style={{ fontSize: 20 }}
                color="disabled"/></Link>
                </span>
                <span>
                <ThreeDotsVertical  onClick ={ ()=>{modalBox(cell.row.original.id)}}
                style={{ fontSize: 20 }} 
                color="disabled" />
                </span>
                <span>
                < Trash onClick ={ ()=>{handleClick(cell.row.original.id)}}
                 style={{ fontSize: 20 }}
                 color="disabled" /> 
                </span>
                </div> 
            )
          }
    ]
    const [empList,setEmpList] = useState([]);
    const [empId,setEmpId] = useState([]);
    const [modalShow,setModalShow] =useState(false);

    useEffect(()=>{
        getEmployees();
    },[]);

    const getEmployees =() =>{
        axios.get("http://localhost:8080/api/v1/employeeserv/employees").then(response =>{
            console.log(response.data)
        setEmpList( response.data) ;
    }
    )
    .catch(error=>console.log(error));
    }

    const columns = useMemo(()=>Columns,[]);
    const data = useMemo(()=>empList);

    const tableInstance = useTable({
        columns,
        data
    },useFilters,useSortBy,usePagination);

    const {getTableProps,getTableBodyProps,headerGroups,page,nextPage,previousPage,prepareRow} = tableInstance ;

    const handleClick = (id) => {
        alert("clicked");
        axios.delete(`http://localhost:8080/api/v1/employeeserv/employees/${id}`).then(response =>{
           console.log(response.data)
            getEmployees();
           }
        )
        .catch(error=>console.log(error));
      }
    
    const modalBox = (id) =>{
        setEmpId(id);
        setModalShow(!modalShow);
    }
    
    return (
        <div >
           
            { modalShow &&(<Box data={empId}/>)}
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) =>(
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter'):null}</div>
                                    </th>
                                ))
                            }
                           
                        </tr>
                        ))
                    }
                
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row =>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                   
                                </tr>
                            )
                        })
                    }
                  
                </tbody> 
            </table>
            <div id="btn_align">
                <button onClick={()=>previousPage()}>Previous</button>
                <button onClick={()=>nextPage()}>Next</button>
            </div>
        </div>
    )
}

export default Table ;