import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

export default class SearchableFlatList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    searchAttribute: PropTypes.string,
    ignoreCase: PropTypes.bool
  };

  static defaultProps = {
    searchAttribute: "",
    ignoreCase: true
  };

  render() {
    const { data, searchAttribute, searchTerm, ignoreCase } = this.props;
    return (
      <FlatList
        {...this.props}
        data={data.filter(tempData => {
          let searchData = searchAttribute
            ? searchAttribute
                .split(".")
                .reduce((prevVal, currVal) => prevVal[currVal], tempData)
            : tempData;
          if (ignoreCase) {
            return searchData.toLowerCase().includes(searchTerm.toLowerCase());
          } else {
            return searchData.includes(searchTerm);
          }
        })}
      />
    );
  }
}
