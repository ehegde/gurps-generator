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
import { BlockProps } from "../../common/types";
import { produce } from "immer";

export default function AttributesBlock(props: BlockProps) {
  const [value, setValue] = React.useState("");

  return (
    <Container header={<Header variant="h2"><Icon name="gen-ai" /> Attributes</Header>}>
      <SpaceBetween direction="vertical" size="s">
        <ColumnLayout columns={2} variant="text-grid">
          <ColumnLayout columns={2}>
            <div>
              <Box variant="awsui-key-label">ST (Points: 0)</Box>
              <Input
                onChange={({ detail }) => props.setCharacter(
                  produce(props.character, next => {
                    next.atts.st = Number(detail.value);
                  })
                )}
                value={`${props.character.atts.st}`}
                type="number"
                placeholder="10"
              />
            </div>
            <div>
              <Box variant="awsui-key-label">HT (Points: 0)</Box>
              <Input
                onChange={({ detail }) => props.setCharacter(
                  produce(props.character, next => {
                    next.atts.ht = Number(detail.value);
                  })
                )}
                value={`${props.character.atts.ht}`}
                type="number"
                placeholder="10"
              />
            </div>
          </ColumnLayout>
          <ColumnLayout columns={2}>
            <div>
              <Box variant="awsui-key-label">DX (Points: 0)</Box>
              <Input
                onChange={({ detail }) => props.setCharacter(
                  produce(props.character, next => {
                    next.atts.dx = Number(detail.value);
                  })
                )}
                value={`${props.character.atts.dx}`}
                type="number"
                placeholder="10"
              />
            </div>
            <div>
              <Box variant="awsui-key-label">IQ (Points: 0)</Box>
              <Input
                onChange={({ detail }) => props.setCharacter(
                  produce(props.character, next => {
                    next.atts.iq = Number(detail.value);
                  })
                )}
                value={`${props.character.atts.iq}`}
                type="number"
                placeholder="10"
              />
            </div>
          </ColumnLayout>
        </ColumnLayout>

        <Table
          renderAriaLive={({
            firstIndex,
            lastIndex,
            totalItemsCount
          }) =>
            `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
          }
          columnDefinitions={[
            {
              id: "name",
              header: "Characteristic",
              cell: item => item.name || "-",
              isRowHeader: true
            },
            {
              id: "mod",
              header: "Modifier",
              cell: item => (
                <Input
                  onChange={({ detail }) => setValue(detail.value)}
                  value={value}
                  placeholder="10"
                />
              )
            },
            {
              id: "cost",
              header: "Point Cost",
              cell: item => `${item.cost}` || "-"
            },
            {
              id: "result",
              header: "Result Value",
              cell: item => item.result ?? "-"
            }
          ]}
          enableKeyboardNavigation
          items={[
            {
              name: "DMG (ST) - Thrust / Swing",
              mod: 0,
              cost: 0,
              result: "1d-2 / 1d"
            },
            {
              name: "HP",
              mod: 0,
              cost: 0,
              result: 10
            },
            {
              name: "Will",
              mod: 0,
              cost: 0,
              result: 10
            },
            {
              name: "Per",
              mod: 0,
              cost: 0,
              result: 10
            },
            {
              name: "Basic Speed",
              mod: 0,
              cost: 0,
              result: 10
            },
            {
              name: "Basic Move",
              mod: 0,
              cost: 0,
              result: 10
            },
            {
              name: "Size",
              mod: 0,
              cost: 0,
              result: 10
            },
            {
              name: "Magery Bonus",
              mod: 0,
              cost: 0,
              result: 0
            },
          ]}
          loadingText="Loading resources"
          sortingDisabled
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
          header={<Header> Secondary Characteristics </Header>}
        />
      </SpaceBetween>
    </Container>
  );
}
