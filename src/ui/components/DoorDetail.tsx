import Typography from '@mui/material/Typography';
import { Door } from '@/models/Door';
import { DetailPageContainer } from '@/ui/layout/DetailPageContainer';
import { DetailPageItem } from '@/ui/layout/DetailPageItem';
import { DateTime } from '@/lib/dateTime';

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  return (
    <DetailPageContainer>
      <DetailPageItem label="ID">
        <Typography>{door.id}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Building">
        <Typography>{door.buildingName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection type">
        <Typography>{door.connectionType}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection status">
        <Typography color="success.main">online</Typography>
      </DetailPageItem>
      <DetailPageItem label="Last connection status update">
        <Typography>
          {DateTime.fromISO(door.lastConnectionStatusUpdate).toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}
        </Typography>
      </DetailPageItem>
    </DetailPageContainer>
  );
}
