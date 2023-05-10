import React, { useEffect, useMemo, useState } from 'react'
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { PageHeader } from '../../components/ui/page/PageHeader'
import { apiConstant, pathConstant } from '../../constants'
import { AdvanceDataTable } from '../../components/ui/table'
import { httpClient } from '../../lib'

const Roles = () => {
  const [data, setData] = useState<any>([])
  const [page, setPage] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [perPage, setPerPage] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
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
      .get(`/user?limit=${perPage}&page=${page}`)
      .then((res: any) => {
        setTotal(res.data.total)
        const resData = res.data.data.map((item: any) => {
          return { ...item }
        })
        setData(resData)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useMemo(() => {
    if (page || perPage) {
      fetchData()
    }
  }, [page, perPage])

  const handleTableChange = (state: any) => {
    console.log(state)
    setPerPage(state.rowsPerPage)
    setPage(state.page)
  }

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
              onTableChange={handleTableChange}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Roles
