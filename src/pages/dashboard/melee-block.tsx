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

export default function MeleeBlock() {
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
        },
        {
          id: "type",
          header: "Dmg Type",
          cell: e => e.type,
          isRowHeader: true
        },
        {
          id: "dmg",
          header: "Dmg Amount",
          cell: e => e.dmg,
        },
        {
          id: "reach",
          header: "Reach",
          cell: e => e.reach,
        },
        {
          id: "lvl",
          header: "Lvl (Roll Against)",
          cell: e => `${e.lvl}`
        },
        {
          id: "qty",
          header: "Qty",
          cell: e => `${e.qty}`
        },
        {
          id: "parry",
          header: "Parry",
          cell: e => `${e.parry}`
        },
        {
          id: "cost",
          header: "$",
          cell: e => `${e.cost}`
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
          name: "Punch (DX)",
          type: "cr",
          dmg: "1d-4",
          reach: "C,1",
          lvl: 10,
          qty: 1,
          parry: "-",
          cost: 0,
          notes: "-"
        },
        {
          name: "Kick (DX-2)",
          type: "cr",
          dmg: "1d-2",
          reach: "1",
          lvl: 8,
          qty: 1,
          parry: "-",
          cost: 0,
          notes: "On fail, test DX to avoid falling."
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
            <Icon name="flag"></Icon>
              Melee Weapons
          </Header>
      }
    />
  );
}
