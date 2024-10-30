import {
  Container,
  Header,
  ColumnLayout,
  Box,
  Textarea,
  Button,
  SpaceBetween,
  Icon
} from "@cloudscape-design/components";
import React from "react";

export default function ImportExportBlock() {
  const [value, setValue] = React.useState("");

  return (
    <Container header={<Header variant="h2"><Icon name="file" /> Import/Export Character</Header>}>
      <ColumnLayout columns={2} variant="text-grid">
        <div>
          <SpaceBetween direction="vertical" size="xs">
            <Box variant="awsui-key-label">Import from JSON</Box>
            <Textarea
              onChange={({ detail }) => setValue(detail.value)}
              value={value}
              placeholder="{}"
            />
            <Button>Import</Button>
          </SpaceBetween>
        </div>
        <div>
          <SpaceBetween direction="vertical" size="xs">
            <Box variant="awsui-key-label">Export to JSON</Box>
            <Textarea
              onChange={({ detail }) => setValue(detail.value)}
              value={value}
              placeholder="{}"
            />
            <Button>Generate</Button>
          </SpaceBetween>
        </div>
      </ColumnLayout>
    </Container>
  );
}
