import { APP_NAME } from "../../common/constants";
import {
  BreadcrumbGroup,
  ContentLayout,
  SpaceBetween,
} from "@cloudscape-design/components";
import { useOnFollow } from "../../common/hooks/use-on-follow";
import BaseAppLayout from "../../components/base-app-layout";
import DashboardHeader from "./dashboard-header";
import ItemsTable from "./items-table";
import BasicDetailsBlock from "./basic-details-block";
import ImportExportBlock from "./import-export-block";
import AttributesBlock from "./attributes-block";

export default function DashboardPage() {
  const onFollow = useOnFollow();

  return (
    <BaseAppLayout
      breadcrumbs={
        <BreadcrumbGroup
          onFollow={onFollow}
          items={[
            {
              text: APP_NAME,
              href: "/",
            },
          ]}
        />
      }
      content={
        <ContentLayout header={<DashboardHeader />}>
          <SpaceBetween size="l">
            <ImportExportBlock />
            <BasicDetailsBlock />
            <AttributesBlock />
            <ItemsTable />
          </SpaceBetween>
        </ContentLayout>
      }
    />
  );
}
