import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import React from "react";
import { addCalButtons } from "../AddCalButtons";
import { sessionOne, sessionTwo } from "../consts.js";

export default class DetailsPanel extends React.Component {
  renderHero = () => {
    return (
      <EuiImage
        size="original"
        alt="Rainbowstack Summit banner"
        src="https://user-images.githubusercontent.com/16166290/180572784-b68feda6-4179-46b9-bb69-e01ff65f16c8.png"
      />
    );
  };

  renderDescription = () => {
    return (
      <>
        <EuiPanel>
          <EuiText>
            <h3>
              The first ever event to bring Rainbowstack members together to
              share ideas, learn from each other, and have fun together!
            </h3>
          </EuiText>
        </EuiPanel>
      </>
    );
  };

  render() {
    return (
      <>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>{this.renderHero()}</EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup gutterSize="l">
          <EuiEmptyPrompt
            title={
              <span>
                Bringing Rainbowstack members together to share ideas, learn
                from each other, and have fun together!
              </span>
            }
            body={
              <EuiText>
                Two sessions with different talks at each one, so join both if
                you can!
              </EuiText>
            }
            actions={[
              addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
              addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
              // Maybe add a "send me a text to remind me button?"
            ]}
          />
        </EuiFlexGroup>
      </>
    );
  }
}
