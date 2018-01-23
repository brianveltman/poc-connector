import React from 'react';
import { Tab } from 'semantic-ui-react';

class TabComponent extends React.Component {
  render() {
    return (
      <div>
        <Tab menu={{ pointing: true }} panes={this.props.data} />
      </div>
    );
  }
}

export default TabComponent;
