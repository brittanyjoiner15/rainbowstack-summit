import {
  EuiButton,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import React from "react";

export default class SpeakerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideNavOpenOnMobile: false,
    };
  }

  renderContent = () => {
    return <EuiText>Oh look at this text</EuiText>;
  };
  renderButton = () => {
    return <EuiButton>Another button</EuiButton>;
  };

  render() {
    return (
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiPanel>
            <EuiEmptyPrompt
              title={<span>No spice</span>}
              body={this.renderContent()}
              actions={this.renderButton()}
            />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }
}
