import React from "react";
import { withRouter } from "react-router-dom";
import { TabBar } from "antd-mobile";

import Match from "../match";
import Hospitals from "../hospitals";
import Item from "../item";

//可将路由参数传入到this.props中
@withRouter
class MainTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "match",
      hidden: false,
      fullScreen: true
    };
  }
  componentDidMount() {
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { tab = "" } = params;
    const tabs = ["match", "item"];
    if (!!tab && tabs.includes(tab)) {
      this.setState({ selectedTab: tab });
    }
  }

  renderContent(content) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center"
        }}
      >
        {content}
      </div>
    );
  }


  render() {
    //return后面加上括号的原因: babel在将.jsx编译为.js的过程中，自动在每行后面加; 因此会导致
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="物资对接"
            key="match"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/logo_gray.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/logo.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "match"}
            onPress={() => {
              this.setState({ selectedTab: "match" });
              // this.props.history.replace(`/match`);
            }}
          >
            {this.renderContent(<Match />)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/demandsMap_grey.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/demandsMap.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="ITEM测试"
            key="item"
            selected={this.state.selectedTab === "item"}
            onPress={() => {
              this.setState({selectedTab: "item"});
              //此处不能有下面这行代码: 
              // this.props.history.replace(`/item`);
            }}
          >
            {this.renderContent(<Hospitals />)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MainTabBar;
