import {
  EuiButton,
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiText,
} from "@elastic/eui";
import { React, useState } from "react";
import "../imgs/pride.png";
import DetailsPanel from "./DetailsPanel";

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
          <EuiText>{selectedTab}</EuiText>
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
          <EuiText>{selectedTab}</EuiText>
        </>
      ),
    },
  ];

  const makeRainbowText = () => {
    const colors = [
      "#FF1616",
      "#F7B012",
      "#FFDE59",
      "#7ED957",
      "#38B6FF",
      "#CB6CE6",
      "#8C52FF",
      "#FF1616",
      "#F7B012",
      "#FFDE59",
      "#7ED957",
      "#38B6FF",
    ];
    const letters = "RAINBOWSTACK".split("");
    const rainbowedLetters = letters.map((letter, index) => {
      return (
        <span style={{ color: `${colors[index]}`, fontFamily: "Inter" }}>
          {letter}
        </span>
      );
    });
    return (
      <span>
        <strong>{rainbowedLetters} SUMMIT</strong>
      </span>
    );
  };

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <EuiPageHeader
            restrictWidth
            iconType="https://user-images.githubusercontent.com/16166290/180519614-5dcfa272-e38d-4228-964e-a1ddf9c85ede.png"
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
