import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar,
} from "@elastic/eui";
import React from "react";
import DetailsPanel from "./DetailsPanel";
import SideNav from "./SideNav";

const cta = <EuiButton fill>Add to Calendar</EuiButton>;

function MainPage({}) {
  return (
    <EuiPage paddingSize="none">
      <EuiPageSideBar paddingSize="l" sticky>
        <SideNav />
      </EuiPageSideBar>
      <EuiPageBody panelled>
        <EuiPageHeader
          restrictWidth
          iconType="logoElastic"
          pageTitle="Rainbowstack Summit"
          rightSideItems={[cta]}
          tabs={[{ label: "Tab 1", isSelected: true }, { label: "Tab 2" }]}
        />
        <EuiPageContent
          hasBorder={false}
          hasShadow={false}
          paddingSize="none"
          color="transparent"
          borderRadius="none"
        >
          <EuiPageContentBody restrictWidth>
            <DetailsPanel />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default MainPage;
