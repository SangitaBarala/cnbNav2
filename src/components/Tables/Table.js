import React, {useMemo} from "react";
import TableData from './TableData.json'
import {COLUMN} from "./Columns";
import {useTable} from "react-table";
import './Table.css'

const Table = () => {
    const columns = useMemo(()=> COLUMN, [])
    const data = useMemo(()=> TableData, [])
    const tableInstance = useTable({ columns, data })
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    return(
        <div>
           <table {...getTableProps}>
               <thead>
               {
                   headerGroups.map((headerGroup)=>(
                       <tr {...headerGroup.getHeaderGroupProps()}>{
                               headerGroup.headers.map((column)=>(
                                   <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                               ))}
                       </tr>
                   ))}
               </thead>
               <tbody {...getTableBodyProps}>
               {rows.map((row)=>{
                   prepareRow(row)
                   return(
                       <tr {...row.getRowProps()}>{
                           row.cells.map((cell)=>{
                               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                           })
                       }
                       </tr>
                   )
               })}
               </tbody>
           </table>
        </div>
    )
}
export default Table