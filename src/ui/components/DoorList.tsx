import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Door } from '@/models/Door';
import { DateTime } from '@/lib/dateTime';
import { ConnectionStatus } from '@/models/ConnectionStatus';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

interface DoorListProps {
  doors: Door[];
}

const columns: GridColDef<Door>[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1
  },
  {
    field: 'buildingName',
    headerName: 'Building',
    flex: 1
  },
  {
    field: 'apartmentName',
    headerName: 'Apartment',
    flex: 1
  },
  {
    field: 'connectionType',
    headerName: 'Connection type',
    flex: 1
  },
  {
    field: 'connectionStatus',
    headerName: 'Connection status',
    flex: 1,
    renderCell: ({ row: door }) => {
      return (
        <Typography
          color={door.connectionStatus === ConnectionStatus.Online ? 'success.main' : 'error.main'}
        >
          {door.connectionStatus}
        </Typography>
      );
    }
  },
  {
    field: 'lastConnectionStatusUpdate',
    headerName: 'Last connection status update',
    flex: 1,
    renderCell: ({ row: door }) => {
      return (
        <Typography>
          {DateTime.fromISO(door.lastConnectionStatusUpdate).toLocaleString(DateTime.DATETIME_MED)}
        </Typography>
      );
    }
  }
];

export function DoorList({ doors }: DoorListProps) {
  const router = useRouter();

  const onDoorRowClick = useCallback(
    (gridRow: GridRowParams<Door>) => {
      router.push({
        pathname: '/doors/[doorId]',
        query: { doorId: gridRow.id }
      });
    },
    [router]
  );

  return (
    <DataGrid
      autoHeight
      hideFooter
      rows={doors}
      columns={columns}
      disableRowSelectionOnClick
      onRowClick={onDoorRowClick}
    />
  );
}
