import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";

export default class SearchableSectionList extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    searchAttribute: PropTypes.string.isRequired,
    ignoreCase: PropTypes.bool
  };

  static defaultProps = {
    searchAttribute: "",
    ignoreCase: true
  };

  render() {
    const { sections, searchAttribute, searchTerm, ignoreCase } = this.props;
    return (
      <SectionList
        {...this.props}
        sections={sections.filter(sectionData => {
          sectionData = sectionData.data;
          let searchData = sectionData;

          return searchData.some(data => {
            let searchDataItem = searchAttribute
              ? searchAttribute
                  .split(".")
                  .reduce((prevVal, currVal) => prevVal[currVal], data)
              : data;
            if (ignoreCase) {
              return searchDataItem
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            } else {
              return searchDataItem.includes(searchTerm);
            }
          });
        })}
      />
    );
  }
}
