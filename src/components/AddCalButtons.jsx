import { EuiButton } from "@elastic/eui";
import React from "react";

export const addCalButtons = (date) => {
  return (
    <EuiButton color="accent" fill iconType="calendar">
      Save the {date} session
    </EuiButton>
  );
};
