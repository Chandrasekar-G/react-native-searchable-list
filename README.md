# react-native-searchable-list

A powerful wrapper around React Native FlatList and SectionList to provide built in search feature.

[![NPM](https://img.shields.io/npm/v/npm.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-searchable-list) [![NPM](https://img.shields.io/npm/dw/localeval.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-searchable-list)

[![NPM](https://nodei.co/npm/react-native-searchable-list.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-searchable-list/)

### Motivation

`react-native-searchable-list` is designed to be simple yet a powerful wrapper around react native's FlatList and SectionList components to provide them with search functionality.

### Installation

```
npm i react-native-searchable-list --save
```

### Usage

```
import { SearchableFlatList } from "react-native-searchable-list";

 <SearchableFlatList
          data={this.state.flatListData}
          searchTerm={this.state.searchTerm}
          searchAttribute={this.state.searchAttribute}
          ignoreCase={true}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
``` 