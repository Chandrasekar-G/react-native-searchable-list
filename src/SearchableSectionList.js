import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";

export default class SearchableSectionList extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    searchAttribute: PropTypes.string.isRequired
  };

  render() {
    return (
      <SectionList
        {...this.props}
        sections={this.props.sections.filter(tempData => {
          tempData = tempData.data;
          return tempData.some(a => {
            return a.includes(this.props.searchTerm);
          });
        })}
      />
    );
  }
}