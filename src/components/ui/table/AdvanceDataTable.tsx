import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables'
import React, { useMemo, useState } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
})

interface Props {
  title?: any
  data: any
  columns: any
  page?: any
}

const AdvanceDataTable = ({ title, columns, data, page }: Props) => {
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
    rowsPerPage: 5,
    rowsPerPageOptions: [5],
    serverSide: true,
    count: 20, // Unknown number of items
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
        title={title && ''}
        data={data}
        columns={columns}
        options={options}
      />
    </CacheProvider>
  )
}

export default AdvanceDataTable
