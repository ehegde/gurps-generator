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

export default function RangedBlock() {
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
      resizableColumns={true} 
      columnDefinitions={[]}
      enableKeyboardNavigation
      items={[]}
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
            <b>To be implemented in the future</b>
            <Button disabled>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={
          <Header>
            <Icon name="video-on"></Icon>
              Ranged Weapons
          </Header>
      }
    />
  );
}
