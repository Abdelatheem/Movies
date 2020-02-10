import React, { Component } from 'react';
import { Text } from 'react-native';

class LeagueHeader extends Component {
  render() {
    return (
      <LeagueHeader>
          <Text style={styles.LeagueHeaderStyle}>
            {this.props.children}
          </Text>
      </LeagueHeader>
    );
  }
}

const styles = {
  LeagueHeaderStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#404449',
    color: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#FFFFFF',
    position: 'relative',
  },
};

export default LeagueHeader;
