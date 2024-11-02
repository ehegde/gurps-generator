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
import { ArmorPieces } from "../../common/types";

export default function ArmorBlock() {
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
          id: "locs",
          header: "Locations",
          cell: e => `${e.locs.join(', ')}`
        },
        {
          id: "cost",
          header: "$",
          cell: e => `${e.cost}`
        },
        {
          id: "dr",
          header: "DR",
          cell: e => `${e.dr}`
        },
        {
          id: "notes",
          header: "Notes",
          cell: e => e.notes
        }
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: "Helmet",
          locs: [ArmorPieces.HEAD],
          cost: 0,
          dr: 1,
          notes: "-"
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
            <Icon name="treeview-expand"></Icon> Armor and Shields
          </Header>
      }
    />
  );
}
