import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Badge,
  WhiteSpace,
  Card,
  NavBar,
  ListView,
} from "antd-mobile";

import { hospitalActions } from "../../redux/hospitals";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin-bottom: 10px;

  .card-action-icon {
    padding: 8px;
    font-size: 20px;
  }

  .am-card-footer {
    border-top: #eee 1px solid;
  }
`;

@withRouter
//该装饰器会自动将state和dispatch分别传入mapStateToProps和mapDispatchToProps
@connect(mapStateToProps, mapDispatchToProps)
class TabB extends React.Component {
  constructor(props) {
    super(props);

    //？
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource,
      hospitals: [],
      isLoading: false,
      hasNextPage: true,
      page: 0,
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.hospitals !== nextProps.hospitals) {
      return {
        dataSource: prevState.dataSource.cloneWithRows(nextProps.hospitals),
        hospitals: nextProps.hospitals,
        isLoading: false,
        hasNextPage: nextProps.hasNextPage
      };
    }
    return null;
  }

  reloadData() {
    let { page } = this.state;
    this.props.searchHospital(this.props.filter, page + 1, 10);
    this.setState({ page: page + 1 })
  }

  onEndReached = event => {
    if (!this.state.hasNextPage) {
      return;
    }
    if (this.state.isLoading) {
      return;
    }
    let { page } = this.state;
    this.props.searchHospital(this.props.filter, page + 1, 10);

    this.setState({ isLoading: true, page: page + 1 });
  };

  render() {
    const { hospitals } = this.props;

    const row = (rowData, sectionID, rowID) => {
      const hospital = hospitals[rowID];
      const onClick = () => this.props.history.push("/hospitals/" + hospital.id);
      return (
        <StyledCard>
          <Card.Header
            onClick={onClick}
            title={
              <span style={{ width: "100%", lineHeight: "30px" }}>
                <span
                  style={{
                    fontSize: "16px",
                    float: "left"
                  }}
                >
                  {hospital.hospital}
                </span>
                <span style={{ float: "right" }}>
                  <Badge text={hospital.province} />
                </span>
              </span>
            }
          />
        </StyledCard>
      );
    };

    return (
      <div>
        <NavBar>TabB:医院需求列表</NavBar>
        <WhiteSpace />
        <ListView
          dataSource={this.state.dataSource}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: "center" }}>
              {this.state.isLoading ? "加载中..." : "没有更多了"}
            </div>
          )}
          renderRow={row}
          className="list_view"
          pageSize={10}
          useBodyScroll
          onScroll={() => {}}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    );
  }
}

//将外部state对象的部分属性映射到UI组件的props对象;
//需要返回一个对象，其每一个键值对代表一个映射;
//mapStateToProps会自动订阅Store,当state更新的时候，就会自动执行，重新计算UI组件的参数
function mapStateToProps(state) {
  return {
    hospitals: state.hospitals.data,
    hasNextPage: state.hospitals.hasNextPage
  };
}

//react-redux中的connect将dispatch传入mapDispatchToProps
function mapDispatchToProps(dispatch) {
    //利用展开运算符，直接将dispatch注入到整个actionCreators对象中，对象中的每一个actionCreator都拥有了dispatch的默认入参
    //
    //bindActionCreators()将dispatch注入到actionCreators()中;
    //每个actionCreator（是一个函数）就拥有了dispatch参数;
    //每个actionCreator可利用dispatch将data派发给reducer;
    //reducer组合当前状态和新来的data，更新Store，触发UI更新.  
  return {
    ...bindActionCreators(hospitalActions, dispatch)
  };
}

export default TabB;
