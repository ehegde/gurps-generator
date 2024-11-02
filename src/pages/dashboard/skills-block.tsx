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
import { SkillType } from "../../common/types";

export default function SkillsBlock() {
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
          id: "adj",
          header: "Adj",
          cell: e => e.adj,
        },
        {
          id: "lvl",
          header: "Level",
          cell: e => e.lvl,
        },
        {
          id: "cost",
          header: "Point Cost",
          cell: e => `${e.pts}`
        },
        {
          id: "enery",
          header: "Energy Cost",
          cell: e => `${e.energy}`
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
          type: SkillType.SKILL,
          name: "Test 1",
          pts: 0,
          description: "-",
          adj: "DX+1",
          lvl: "11",
          energy: "-"
        },
        {
          type: SkillType.SPELL,
          name: "Test 2",
          pts: 0,
          description: "Yes",
          adj: "IQ+2",
          lvl: "17",
          energy: 3
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
            <Icon name="suggestions"></Icon>
              Skills and Spells
          </Header>
      }
    />
  );
}
