import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables'
import React, { useMemo, useState } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CircularProgress, Typography } from '@mui/material'

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
})

interface Props {
  title?: any
  data: any
  columns: any
  page?: any
  total?: number
  perPage?: number
  loading?: boolean
}

const AdvanceDataTable = ({
  title,
  columns,
  data,
  page,
  total,
  perPage,
  loading,
}: Props) => {
  const [responsive, setResponsive] = useState('simple')
  const [tableBodyHeight, setTableBodyHeight] = useState('400px')
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('')
  const [searchBtn, setSearchBtn] = useState(true)
  const [downloadBtn, setDownloadBtn] = useState(false)
  const [printBtn, setPrintBtn] = useState(false)
  const [viewColumnBtn, setViewColumnBtn] = useState(false)
  const [filterBtn, setFilterBtn] = useState(false)

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: 'dropdown',
    responsive,
    // tableBodyHeight,
    // tableBodyMaxHeight,
    rowsPerPage: perPage,
    rowsPerPageOptions: [5],
    serverSide: true,
    count: total,
    page,
    elevation: 0,
    onTableChange: (action: any, state: any) => {
      console.log(action)
      console.dir(state)
    },
  } as MUIDataTableOptions

  return (
    <CacheProvider value={muiCache}>
      <MUIDataTable
        title={
          <Typography variant="h6">
            {title}
            {loading && (
              <CircularProgress
                size={24}
                style={{
                  marginLeft: 15,
                  position: 'relative',
                  top: 4,
                  color: 'red',
                }}
              />
            )}
          </Typography>
        }
        data={data}
        columns={columns}
        options={options}
      />
    </CacheProvider>
  )
}

export default AdvanceDataTable
