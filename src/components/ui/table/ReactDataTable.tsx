import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TablePagination,
} from '@mui/material'

const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Alice', age: 27 },
  { id: 5, name: 'Tom', age: 40 },
  { id: 6, name: 'Mary', age: 32 },
  { id: 7, name: 'David', age: 38 },
  { id: 8, name: 'Sara', age: 29 },
  { id: 9, name: 'Peter', age: 41 },
  { id: 10, name: 'Emma', age: 36 },
]

const rowsPerPageOptions = [5, 10, 25]

const PaginatedTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value)
    setPage(0)
  }

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const startIndex = page * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const paginatedData = filteredData.slice(startIndex, endIndex)

  return (
    <>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleChangeSearchTerm}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  )
}

export default PaginatedTable
