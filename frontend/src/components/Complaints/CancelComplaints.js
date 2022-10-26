

import { Table , Button} from "@nextui-org/react";

function CancelComplaints() {
  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Complaint ID</Table.Column>
        <Table.Column>Problem</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>  </Table.Column>
      
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <Button  size="xs" auto color="secondary" rounded flat> Cancel</Button>
          </Table.Cell>

        </Table.Row>
        <Table.Row key="2">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <Button  size="xs" auto color="secondary" rounded flat> Cancel</Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell ></Table.Cell>
          <Table.Cell>
            <Button  size="xs" auto color="secondary" rounded flat> Cancel</Button>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell ></Table.Cell>
          <Table.Cell>
            <Button  size="xs" auto color="secondary" rounded flat> Cancel</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
export default CancelComplaints