import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";

class SendButton extends Component {
  render() {
    return (
      <div>
        <IconButton
          aria-label="Send the message"
          style={{
            marginRight: "24px",
            marginLeft: "24px",
            backgroundColor: "#ffffff"
          }}
        >
          <ArrowUpward/>
        </IconButton>
      </div>
    );
  }
}

export default SendButton;
