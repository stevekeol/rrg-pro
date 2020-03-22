import React from "react";
import { withRouter } from "react-router-dom";
import { TabBar } from "antd-mobile";

import TabA from "../tabA";
import TabB from "../tabB";

//可将路由参数传入到this.props中
@withRouter
//Home组件主要是提供多tabbar入口，无其它组件内容;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "tabA"
    };
  }
  componentDidMount() {}

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
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="TabA"
            key="tabA"
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
            selected={this.state.selectedTab === "tabA"}
            onPress={() => {
              this.setState({ selectedTab: "tabA" });
            }}
          >
            {this.renderContent(<TabA />)}
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
            title="TabB"
            key="item"
            selected={this.state.selectedTab === "tabB"}
            onPress={() => {
              this.setState({selectedTab: "tabB"});
              //此处不能有下面这行代码: 否则路由到item页面，而非在当前页面内嵌item，因而会不显示tabbar
              // this.props.history.replace(`/item`);
            }}
          >
            {this.renderContent(<TabB />)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;
