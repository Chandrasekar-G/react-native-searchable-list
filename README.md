# react-native-searchable-list

A powerful wrapper around React Native FlatList and SectionList to provide built in search feature.

[![NPM](https://img.shields.io/npm/v/npm.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-searchable-list) [![NPM](https://img.shields.io/npm/dw/localeval.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-searchable-list)

[![NPM](https://nodei.co/npm/react-native-searchable-list.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-searchable-list/)

### Motivation

`react-native-searchable-list` is designed to be simple yet a powerful wrapper around react native's FlatList and SectionList components to provide them with search functionality.

### Installation

```shell
npm i react-native-searchable-list --save
```

### Usage

```js
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

### Example

#### 1. SearchableFlatList

![Simple Flat List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/FlatList-1.gif)

##### Usage
```js

this.state = {
      data: [ "Taj Mahal",   "Great Wall of China", "Machu Picchu", "Christ the Redeemer", "Chichen Itza", "Roman Colosseum", "Petra" ],
      searchTerm: "",
      searchAttribute: "",
      ignoreCase: true
    };

<TextInput
  style={styles.search} placeholder={"Search Wonders"}
  onChangeText={searchTerm => this.setState({ searchTerm })} />

<SearchableFlatList 
  style={styles.list} data={data}
  searchTerm={searchTerm} ignoreCase={ignoreCase} 
  renderItem={({ item }) => ( <Text style={styles.listItem}>{item}</Text> )}
  keyExtractor={item => item} />

```
##### 1.1 Simple Array Data
##### 1.2 Array of Objects
##### 1.3 Array of Complex Objects







































