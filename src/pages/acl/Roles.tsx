import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { PageHeader } from '../../components/ui/page/PageHeader'
import { apiConstant, pathConstant } from '../../constants'
import { AdvanceDataTable } from '../../components/ui/table'
import { httpClient } from '../../lib'

const Roles = () => {
  const [data, setData] = useState<any>([])
  const [page, setPage] = useState<number>(1)
  const columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Name' },
    { name: 'description', label: 'Description' },
    { name: 'price', label: 'Price' },
    { name: 'brand', label: 'Brand' },
  ]

  useEffect(() => {
    httpClient
      .get('/products')
      .then((res: any) => {
        const resData = res.data.products.map((item: any) => {
          return { ...item }
        })
        console.log(resData)
        setData(resData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <PageHeader
        title="Roles"
        paths={[pathConstant.HOME, pathConstant.ACL_ROLES]}
        rightSection={<Button>Add</Button>}
      />
      <div>
        <Grid container>
          <Grid item md={12}>
            <AdvanceDataTable columns={columns} data={data} page={page} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Roles
