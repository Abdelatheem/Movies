import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from '../common/Styles';

class Tabs extends Component {
  selectStatus(status) {
    switch (status) {
      case 'Ongoing':
        Actions.ongoing({ title: this.props.category });
        break;
      case 'Upcoming':
        Actions.upcoming({ title: this.props.category });
        break;
      case 'Completed':
        Actions.completed({ title: this.props.category });
        break;
      default:
        Actions.ongoing({ title: this.props.category });
    }
  }

  render() {
    switch (this.props.selected) {
      case 'Ongoing':
        return (
          <View style={styles.tabBarStyle}>
            <View style={styles.navButtonSelectedStyle}>
              <Text style={styles.tabText}>Ongoing</Text>
            </View>
            <TouchableOpacity onPress={() => this.selectStatus('Upcoming')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectStatus('Completed')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Completed</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Upcoming':
        return (
          <View style={styles.tabBarStyle}>
            <TouchableOpacity onPress={() => this.selectStatus('Ongoing')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Ongoing</Text>
            </TouchableOpacity>
            <View style={styles.navButtonSelectedStyle}>
              <Text style={styles.tabText}>Upcoming</Text>
            </View>
            <TouchableOpacity onPress={() => this.selectStatus('Completed')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Completed</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Completed':
        return (
          <View style={styles.tabBarStyle}>
            <TouchableOpacity onPress={() => this.selectStatus('Ongoing')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectStatus('Upcoming')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Upcoming</Text>
            </TouchableOpacity>
            <View style={styles.navButtonSelectedStyle}>
              <Text style={styles.tabText}>Completed</Text>
            </View>
          </View>
        );
      default:
        return (
          <View style={styles.tabBarStyle}>
            <View style={styles.navButtonSelectedStyle}>
              <Text style={styles.tabText}>Ongoing</Text>
            </View>
            <TouchableOpacity onPress={() => this.selectStatus('Upcoming')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.selectStatus('Completed')} style={styles.navButtonStyle}>
              <Text style={styles.tabText}>Completed</Text>
            </TouchableOpacity>
          </View>
        );
    }
  }
}

const mapStateToProps = state => {
  return {
    category: state.events.category,
  };
};

export default connect(mapStateToProps, {})(Tabs);
