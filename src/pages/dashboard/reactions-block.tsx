import {
  Container,
  Header,
  ColumnLayout,
  Box,
  Input,
  Textarea,
  Button,
  Icon,
  Table,
  Link,
  SpaceBetween,
} from "@cloudscape-design/components";
import React from "react";

export default function ReactionsBlock() {
  const [value, setValue] = React.useState("");
  const [
    selectedItems,
    setSelectedItems
  ] = React.useState([]);

  return (
    <Table
      renderAriaLive={({
        firstIndex,
        lastIndex,
        totalItemsCount
      }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      onSelectionChange={({ detail }) =>
        {
          setSelectedItems(detail.selectedItems)
          console.log(detail.selectedItems);
        }
      }
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: () => "select all",
        itemSelectionLabel: ({ selectedItems }, item) =>
          item.name
      }}
      resizableColumns={true} 
      columnDefinitions={[
        {
          id: "name",
          header: "Name",
          cell: e => e.name,
          isRowHeader: true
        },
        {
          id: "val",
          header: "Value",
          cell: e => `${e.value}`,
          isRowHeader: true
        }
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: "Test 1",
          value: -1
        },
        {
          name: "Test 2",
          value: 2
        },
      ]}
      loadingText="Loading resources"
      selectionType="single"
      trackBy="name"
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={
          <Header actions={
            <SpaceBetween direction="horizontal" size="m">
              <Button variant="primary">Create</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </SpaceBetween>
          }>
            <Icon name="star"></Icon>
              Reactions
          </Header>
      }
    />
  );
}
