import React from "react";
import { withRouter } from "react-router-dom";
import { Card, WingBlank, WhiteSpace, NavBar, Button } from "antd-mobile";

@withRouter
class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar mode="dark">React源码架构</NavBar>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header title={<h3>撒旦</h3>} />
            <Card.Body>
              <p>
                基于react,redux,create-react-app,react-app-rewired的多人协作版react的源码架构
              </p>
              <Button type="primary" onClick={() => this.props.history.push('search')}>开始尝试</Button>
              <WhiteSpace />
              <WhiteSpace />
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default ContactInfo;

// 1. construtor中, this.navigateTo = this.navigateTo.bind(this); //因此可省去
// 2.箭头函数自动绑定this到当前组件的作用域(create-react-app默认开启该语法);
//因此可以省去在constructor中给方法绑定this（代码量增多）
// navigateTo = () => {
//   this.props.history.push('search');
// }
// 3. 为了便于理解，写成上述代码的方式，直接在onlcick的函数中用箭头函数（每次render时，都需要重新绑定this到该实例，因此会影响性能）