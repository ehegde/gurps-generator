import { APP_NAME } from "../../common/constants";
import {
  BreadcrumbGroup,
  ContentLayout,
  SpaceBetween,
} from "@cloudscape-design/components";
import { useOnFollow } from "../../common/hooks/use-on-follow";
import BaseAppLayout from "../../components/base-app-layout";
import DashboardHeader from "./dashboard-header";
import BasicDetailsBlock from "./basic-details-block";
import ImportExportBlock from "./import-export-block";
import AttributesBlock from "./attributes-block";
import AdvantagesBlock from "./advantages-block";
import ReactionsBlock from "./reactions-block";
import SkillsBlock from "./skills-block";
import MeleeBlock from "./melee-block";
import ItemsBlock from "./items-block";
import ArmorBlock from "./armor-block";

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
            <AdvantagesBlock />
            <ReactionsBlock />
            <SkillsBlock />
            <MeleeBlock />
            <ItemsBlock />
            <ArmorBlock />
          </SpaceBetween>
        </ContentLayout>
      }
    />
  );
}
