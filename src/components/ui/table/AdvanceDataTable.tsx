import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables'
import React, { useMemo, useState } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@mui/material'

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
})

interface Props {
  title?: any
  data: any
  columns: any
  total?: number
  page?: any
  perPage?: number
  loading?: boolean
  onTableChange?: (tableState: object) => void
}

const AdvanceDataTable = ({
  title,
  columns,
  data,
  page,
  total,
  perPage,
  loading,
  onTableChange,
}: Props) => {
  const [responsive, setResponsive] = useState('simple')
  const [tableBodyHeight, setTableBodyHeight] = useState('400px')
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('')
  const [searchBtn, setSearchBtn] = useState(true)
  const [downloadBtn, setDownloadBtn] = useState(false)
  const [printBtn, setPrintBtn] = useState(false)
  const [viewColumnBtn, setViewColumnBtn] = useState(false)
  const [filterBtn, setFilterBtn] = useState(true)

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
    rowsPerPage: perPage || 5,
    rowsPerPageOptions: [5, 10, 20],
    serverSide: true,
    count: total,
    page: page || 0,
    elevation: 0,
    onTableChange: (action: string, tableState: object) => {
      if (onTableChange) {
        onTableChange(tableState)
      }
    },
  } as MUIDataTableOptions

  return (
    <CacheProvider value={muiCache}>
      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <MUIDataTable
        title={<Typography variant="h6">{title}</Typography>}
        data={data}
        columns={columns}
        options={options}
      />
    </CacheProvider>
  )
}

export default AdvanceDataTable
