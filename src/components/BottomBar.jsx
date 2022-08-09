import {
  EuiButton,
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiIcon,
} from "@elastic/eui";
import React from "react";

export default class Bottombar extends React.Component {
  render() {
    return (
      <>
        <EuiBottomBar position="static">
          <EuiFlexGroup direction="row" alignItems="center">
            <EuiFlexItem>
              <EuiText>
                <h4>Hosted by Elastic's Rainbowstack ERG </h4>
              </EuiText>
              <EuiText>Group for LGBTQIA+ members and allies</EuiText>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButton
                color="success"
                fill
                href="https://groups.google.com/a/elastic.co/g/rainbowstack"
                target={"_blank"}
              >
                Join the rainbowstack@ group
              </EuiButton>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButton
                color="primary"
                fill
                href="https://elastic.slack.com/archives/CGQUUPD8F"
                target={"_blank"}
              >
                Join the #erg-rainbow-stack channel
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      </>
    );
  }
}
