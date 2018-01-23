import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import TabComponent from './TabComponent';

export class TabConnector extends Component {
  render() {
    const receivedData = [];
    this.props.tabData.map(element => {
      return receivedData.push({
        menuItem: element.tabtitle,
        render: () => <Tab.Pane>{element.tabcontent}</Tab.Pane>
      });
    });

    return <TabComponent data={receivedData} />;
  }
}