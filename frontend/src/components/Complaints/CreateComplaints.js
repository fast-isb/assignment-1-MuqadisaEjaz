

import { Input, Grid, Button, Textarea } from "@nextui-org/react";
function CreateComplaints() {
    return (

    <Grid.Container gap={10}>
      <Grid>
        <Input 
          bordered 
          labelPlaceholder="House No" 
          color="default" />
      </Grid>
      <Grid>
        <Input 
          bordered 
          labelPlaceholder="Email" 
          color="primary" />
      </Grid>
      <Grid>
        <Textarea
      
      bordered 
  
          color="primary" 
      
          labelPlaceholder="Problem"
        
        />
      </Grid>
      <Grid> <Button auto color="secondary" rounded flat> Submit </Button></Grid>
      
    </Grid.Container>
    
  );
}

  
  export default CreateComplaints;
  