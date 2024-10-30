import {
  Container,
  Header,
  ColumnLayout,
  Box,
  Input,
  Textarea,
  Button,
  Icon,
} from "@cloudscape-design/components";
import React from "react";

export default function BasicDetailsBlock() {
  const [value, setValue] = React.useState("");

  return (
    <Container header={<Header variant="h2"><Icon name="user-profile" /> Basic Details</Header>}>
      <ColumnLayout columns={2} variant="text-grid">
        <div>
          <Box variant="awsui-key-label">Unspent Points</Box>
          <Input
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            placeholder="0"
          />
        </div>
        <div>
          <Box variant="awsui-key-label">Total Points</Box>
          <Input
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            placeholder="0"
            disabled
          />
        </div>
        <ColumnLayout columns={2}>
          <div>
            <Box variant="awsui-key-label">Name</Box>
            <Input
              onChange={({ detail }) => setValue(detail.value)}
              value={value}
              placeholder="Hendrix"
            />
          </div>
          <div>
            <Box variant="awsui-key-label">Player</Box>
            <Input
              onChange={({ detail }) => setValue(detail.value)}
              value={value}
              placeholder="Yosef Rombi"
            />
          </div>
        </ColumnLayout>
        <ColumnLayout columns={2}>
          <div>
            <Box variant="awsui-key-label">Height</Box>
            <Input
              onChange={({ detail }) => setValue(detail.value)}
              value={value}
              placeholder="8ft 0in"
            />
          </div>
          <div>
            <Box variant="awsui-key-label">Weight</Box>
            <Input
              onChange={({ detail }) => setValue(detail.value)}
              value={value}
              placeholder="300 lb"
            />
          </div>
        </ColumnLayout>
        <div>
          <Box variant="awsui-key-label">Appearance</Box>
          <Textarea
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            placeholder="Tall person"
          />
        </div>
        <div>
          <Box variant="awsui-key-label">Notes</Box>
          <Textarea
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            placeholder="Additional info"
          />
        </div>
      </ColumnLayout>
    </Container>
  );
}
