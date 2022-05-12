import { Card, CardContent, CardHeader } from "@mui/material";
import Link from 'next/link'

export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>
        <Link href="/">Go back to the main page</Link>
    </CardContent>
  </Card>
);
