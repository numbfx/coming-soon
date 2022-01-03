import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import { ReactComponent as IconDiscord } from "./assets/icons/Discord-Logo-White.svg";
import { ReactComponent as IconMedium } from "./assets/icons/medium.svg";
import logo from "./assets/moonnoobs-logo-white.png";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo"></div>
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
              href="https://twitter.com/MoonNoobsDAO"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://medium.com/@MoonNoobsDAO"
              title="Medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMedium className="icon" />
            </a>
          </div>
        </div>
        <div className="content">

          <div className="title-holder">
            <p>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              ><div>
                <img src={logo} className="moonlogo" alt="Logo" />
                </div>
                <div>
                
                  <Text
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: 45,
                    }}
                  >
                    Mo
                  <Text
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: 26,
                      verticalAlign: "super"
                    }}
                  >
                    o
                  </Text>
                    nNoobs
                    {" "}
                    DAO
                    </Text>
                </div>
              </View>
            </p>
            <p>
              A Premiere Decentralized Reserve Fund on the Aurora NEAR
              Network.
            </p>
            <p>
              Growing and supporting cutting edge NEAR projects through DAO
              governance.
            </p>
          </div>
          <a
            href="https://medium.com/@MoonNoobsDAO/moonnoobs-dao-white-paper-38035e120417"
            title="Medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cta">White Paper</div>
          </a>
        </div>
        <div className="footer">
          <span>Copyright 2021-2022 MoonNoobs</span>
        </div>
      </div>
    );
  };
}

export default App;
