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
import { AdvantageType } from "../../common/types";

export default function AdvantagesBlock() {
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
          id: "type",
          header: "Type",
          cell: e => e.type,
          isRowHeader: true
        },
        {
          id: "name",
          header: "Name",
          cell: e => e.name,
        },
        {
          id: "cost",
          header: "Point Cost",
          cell: e => `${e.pts}`
        },
        {
          id: "description",
          header: "Description",
          cell: e => e.description
        }
      ]}
      enableKeyboardNavigation
      items={[
        {
          type: AdvantageType.ADVANTAGE,
          name: "Test 1",
          pts: 0,
          description: "-",
        },
        {
          type: AdvantageType.DISADVANTAGE,
          name: "Test 2",
          pts: 0,
          description: "Yes",
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
            <Icon name="caret-up-filled"></Icon>
            <Icon name="caret-down-filled"></Icon>
              Advantages, Disadvantages, Perks, Quirks
          </Header>
      }
    />
  );
}
