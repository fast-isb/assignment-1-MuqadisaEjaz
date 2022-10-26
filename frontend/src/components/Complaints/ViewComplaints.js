

import { Table } from "@nextui-org/react";

function ComplaintStatus() {
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
        <Table.Column> Comments </Table.Column>
      
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
          </Table.Cell>

        </Table.Row>
        <Table.Row key="2">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            
          </Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell ></Table.Cell>
          <Table.Cell>
           
          </Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell ></Table.Cell>
          <Table.Cell>
            
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
export default ComplaintStatus