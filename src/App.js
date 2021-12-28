import React from "react";
import { View, Text } from "react-native";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import logo from "./assets/moonnoobs-logo.png";
import "./App.css";

class App extends React.Component {



  render = () => {
    
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="social">
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
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
              href="https://github.com/arkn98/coming-soon"
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
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ fontSize: 20, lineHeight: 30 }}>Mo</Text>
              <Text style={{ fontSize: 11, lineHeight: 18 }}>o</Text>
              <Text style={{ fontSize: 20, lineHeight: 30 }}>nNoobs</Text>
            </View>
            <h1>Mo<Text style={{fontSize: 15, lineHeight: 18}}>o</Text>nNoobs</h1>
            <p>
              The first decentralized reserve fund on the Aurora NEAR Network.
            </p>
            <p>
              Full (Community) DAO governance to help grow and support
              *adjective* NEAR projects.
            </p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>Copyright Cloud-e Corporation, DBA MoonNoobs</span>
        </div>
      </div>
    );
  };
}

export default App;
