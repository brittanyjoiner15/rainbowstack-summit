import {
  EuiButton,
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
} from "@elastic/eui";
import { React, useState } from "react";
import { rainbowCluster } from "../data/ImageRefs";
import DetailsPanel from "./panels/DetailsPanel";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import { makeRainbowText } from "./RainbowLetters";

const cta = <EuiButton fill>Add to Calendar</EuiButton>;

function MainPage() {
  const [selectedTab, setSelectedTab] = useState("event");

  const onSelectedTabChanged = (id) => {
    setSelectedTab(id);
  };
  const showSelectedContent = (tab) => {
    switch (selectedTab) {
      case "event":
        return tabs[0].content;
      case "speakers":
        return tabs[1].content;
      case "talks":
        return tabs[2].content;
      default:
        return tabs[0].content;
    }
  };

  const tabs = [
    {
      id: "event",
      isSelected: selectedTab === "event",
      label: "Event Details",
      onClick: () => onSelectedTabChanged("event"),
      content: (
        <>
          <DetailsPanel />
        </>
      ),
    },
    {
      id: "speakers",
      isSelected: selectedTab === "speakers",
      label: "Speakers",
      onClick: () => onSelectedTabChanged("speakers"),
      content: (
        <>
          <SpeakersPanel />
        </>
      ),
    },
    {
      id: "talks",
      isSelected: selectedTab === "talks",
      label: "Talks",
      onClick: () => onSelectedTabChanged("talks"),
      content: (
        <>
          <TalksPanel />
        </>
      ),
    },
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <EuiPageHeader
            restrictWidth
            iconType={rainbowCluster}
            pageTitle={makeRainbowText()}
            rightSideItems={[cta]}
            tabs={tabs}
          />

          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
            verticalPosition="center"
            horizontalPosition="center"
          >
            <EuiPageContentBody>
              {showSelectedContent(selectedTab)}
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;

// TODO: Make a footer with
