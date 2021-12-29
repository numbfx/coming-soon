import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import { ReactComponent as IconDiscord } from "./assets/icons/Discord-Logo-White.svg";
import { ReactComponent as IconMedium } from "./assets/icons/medium.svg";

import logo from "./assets/moonnoobs-logo.png";
import "./App.css";

class App extends React.Component {

  render = () => {

    return (
      <div className="card">
        <div className="header">
          <div className="logo">
          </div>
          <div className="social">
            <a
              href="https://discord.gg/PWzzDCdh4U"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDiscord className="icon" />
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://github.com/numbfx"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <p>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ fontFamily: "IBM Plex Sans", fontWeight: "bold", color: "#fff", fontSize: 45, lineHeight: 90 }}>Mo</Text>
              <Text style={{ fontFamily: "IBM Plex Sans", fontWeight: "bold", color: "#fff", fontSize: 26, lineHeight: 65 }}>o</Text>
              <Text style={{ fontFamily: "IBM Plex Sans", fontWeight: "bold", color: "#fff", fontSize: 45, lineHeight: 90 }}>nNoobs</Text>
            </View>
            </p>
            <p>
              The first decentralized reserve fund on the Aurora NEAR Network.
            </p>
            <p>
              Full (Community) DAO governance to help grow and support
              *adjective* NEAR projects.
            </p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Coming Soon</div>
          </a>
        </div>
        <div className="footer">
          <span>Copyright 2021-2022 Cloud-e Corporation, DBA MoonNoobs</span>
        </div>
      </div>
    );
  };
}

export default App;
