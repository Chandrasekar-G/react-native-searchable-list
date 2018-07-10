import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList } from "react-native";

export default class SearchableSectionList extends Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    searchAttribute: PropTypes.string.isRequired,
    searchByTitle: PropTypes.string.bool,
    ignoreCase: PropTypes.bool
  };

  static defaultProps = {
    searchAttribute: "",
    searchByTitle: false,
    ignoreCase: true
  };

  render() {
    const { sections, searchAttribute, searchTerm, ignoreCase, searchByTitle } = this.props;
    return (
      <SectionList
        {...this.props}
        sections={sections.filter(sectionData => {
          sectionData = searchByTitle ? sectionData.title : sectionData.data;
          let searchData = sectionData;
          if(searchByTitle) {
            return searchData.includes(searchTerm);
          } else {
            return searchData.some(data => {
              let searchDataItem = searchAttribute
                ? searchAttribute
                    .split(".")
                    .reduce((prevVal, currVal) => prevVal[currVal], data)
                : data;
              if (ignoreCase) {
                if (
                  searchDataItem.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return data;
                }
              } else {
                if (searchDataItem.includes(searchTerm)) {
                  return data;
                }
              }
            });
          }
        })}
      />
    );
  }
}