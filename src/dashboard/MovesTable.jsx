import * as React from 'react'
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import { Alert } from '@material-ui/lab'

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'name', headerName: 'NAME', width: 300 },
  { field: 'levelLearned', headerName: 'LEVEL', width: 150 },
  { field: 'learnMethod', headerName: 'LEARN METHOD', width: 300 }
  // { field: 'versionName', headerName: 'VERSION NAME', width: 200 }
]

export default function MovesTable ({ moves, showTable }) {
  console.log(moves)

  if (showTable) {
    return (
      <div style={{ width: '70%', margin: 'auto' }}>
        <DataGrid
          rows={moves} columns={columns}
          pageSize={8} autoHeight
          disableColumnSelector
          disableSelectionOnClick
          align='center'
          alignItems='center'
          justifyContent='center'
          display='flex'
          components={{
            Toolbar: GridToolbar
          }}
          disable
        />
      </div>
    )
  }
  return <Alert severity='warning'>No records...</Alert>
}
