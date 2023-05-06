import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { PageHeader } from '../../components/ui/page/PageHeader'
import { apiConstant, pathConstant } from '../../constants'
import { AdvanceDataTable } from '../../components/ui/table'
import { httpClient } from '../../lib'
import { setLoading } from '../../store/slices/auth/authSlice'

const Roles = () => {
  const [data, setData] = useState<any>([])
  const [page, setPage] = useState<number>(0)
  const [total, setTotal] = useState<number>()
  const [perPage, setPerPage] = useState<number>(10)
  const [loading, setloading] = useState<boolean>(false)
  const columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Name' },
    { name: 'description', label: 'Description' },
    { name: 'price', label: 'Price' },
    { name: 'brand', label: 'Brand' },
  ]

  const fetchData = () => {
    setLoading(true)
    httpClient
      .get(`/products?limit=${perPage}&skip=${page}`)
      .then((res: any) => {
        setTotal(res.data.total)
        setPage(res.data.skip)
        setPerPage(res.data.limit)
        const resData = res.data.products.map((item: any) => {
          return { ...item }
        })
        console.log(resData)
        setData(resData)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    fetchData()
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
            <AdvanceDataTable
              columns={columns}
              data={data}
              page={page}
              perPage={perPage}
              total={total}
              loading={loading}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Roles
