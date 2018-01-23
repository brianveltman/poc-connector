import React from 'react';
import { TabConnector } from './TabConnector';
import data from './DataAccesLayer';

class TabContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      tabData: []
    };
  }

  componentDidMount() {
    const content = [];

    data.map(tab => {
      return content.push({
        tabtitle: tab.tabtitle,
        tabcontent: tab.tabcontent
      });
    });

    this.setState({
      tabData: content
    });
  }

  render() {
    return (
      <div className="container">
        <TabConnector tabData={this.state.tabData} />
        {/* <Tab data={this.state.tabData} /> */}
      </div>
    );
  }
}

export default TabContainer;