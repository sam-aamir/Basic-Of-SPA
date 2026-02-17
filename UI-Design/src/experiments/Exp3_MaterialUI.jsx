import { Button, TextField, Card, CardContent } from '@mui/material'

export default function Exp3_MaterialUI() {
  return (
    <Card sx={{ width: 300, margin: '20px auto' }}>
      <CardContent>
        <h3>Experiment 3: Material UI</h3>
        <TextField label="Name" fullWidth margin="normal" />
        <Button variant="contained" fullWidth>Submit</Button>
      </CardContent>
    </Card>
  )
}
