import { Card, CardHeader, Alert } from '@mui/material';

export default function AppCurrentSubject(props) {
  const { data } = props;

  console.log(props);

  const text_data = JSON.stringify(data);

  return (
    <Card>
      <CardHeader title="Current Subject" />
      <Alert severity="info">{text_data}</Alert>
    </Card>
  );
}
