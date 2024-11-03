import {
  SideNavigation,
  SideNavigationProps,
} from "@cloudscape-design/components";
import { useNavigationPanelState } from "../common/hooks/use-navigation-panel-state";
import { useState } from "react";
import { useOnFollow } from "../common/hooks/use-on-follow";
import { APP_NAME } from "../common/constants";
import { useLocation } from "react-router-dom";
import { Character } from "../common/types";

interface NavigationPanelProps {
  character: Character
}

export default function NavigationPanel(props: NavigationPanelProps) {
  const location = useLocation();
  const onFollow = useOnFollow();
  const [navigationPanelState, setNavigationPanelState] =
    useNavigationPanelState();

  const [items] = useState<SideNavigationProps.Item[]>(() => {
    const items: SideNavigationProps.Item[] = [
      {
        type: "section",
        text: "Character Creator",
        items: [
          { type: "link", text: "Import/Export Character", href: "/#import-export-block" },
          { type: "link", text: "Basic Details", href: "/#basic-details-block" },
          { type: "link", text: "Attributes", href: "/#attributes-block" },
          { type: "link", text: "Advantages, Disadvantages, Perks, Quirks", href: "/#advantages-block" },
          { type: "link", text: "Reactions", href: "/#reactions-block" },
          { type: "link", text: "Skills and Spells", href: "/#skills-block" },
          { type: "link", text: "Melee Weapons", href: "/#melee-block" },
          { type: "link", text: "Ranged Weapons", href: "/#ranged-block" },
          { type: "link", text: "Items", href: "/#items-block" },
          { type: "link", text: "Armor and Shields", href: "/#armor-block" },
        ],
      },
      {
        type: "section",
        text: "Character Sheet",
        items: [{ type: "link", text: "View Character Sheet", href: "/sheet" }],
      }
    ];

    return items;
  });

  const onChange = ({
    detail,
  }: {
    detail: SideNavigationProps.ChangeDetail;
  }) => {
    const sectionIndex = items.indexOf(detail.item);
    setNavigationPanelState({
      collapsedSections: {
        ...navigationPanelState.collapsedSections,
        [sectionIndex]: !detail.expanded,
      },
    });
  };

  return (
    <SideNavigation
      onFollow={onFollow}
      onChange={onChange}
      header={{ href: "/", text: `Total Points: ${0}` }}
      activeHref={location.pathname}
      items={items.map((value, idx) => {
        if (value.type === "section") {
          const collapsed =
            navigationPanelState.collapsedSections?.[idx] === true;
          value.defaultExpanded = !collapsed;
        }

        return value;
      })}
    />
  );
}
