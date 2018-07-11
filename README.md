# react-native-searchable-list

A powerful wrapper around React Native FlatList and SectionList to provide built in search feature.
`react-native-searchable-list` is designed to be simple yet a powerful wrapper around react native's FlatList and SectionList components to provide them with search functionality.

### Installation

```shell
npm i react-native-searchable-list --save
```

### 1. SearchableFlatList

#### API

| Props            | Description                           | Data Type                                                                         | isRequired               |
| ---------------- | ------------------------------------- | ----------------------------------------------------------------------------- | ------------------------ |
| `data`           | Data for the FlatList                    | `Array`                                                                | :white_check_mark:	       |
| `searchTerm`     | Searching Term being input by the user. Typically this will be a state variable bound to a text input                        | `String`                                                                      | :white_check_mark:	       |
| `searchAttribute` | Attribute to be searched in case of array of objects. This will be empty in case of a simple array data | `String`                                                                      | :x:      |
| `ignoreCase`           | Case sensitive / Case insensitive search. By default this will be set to true                       | `Boolean` | :x: |

By default the `SearchableFlatList` also inherits all the props of a React Native `FlatList`. You could use virtually any props you would with a FlatList.

#### Usage

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

#### Example

Github repo with the above examples - https://github.com/Chandrasekar-G/RNSearchableListDemo


##### 1. Simple Array Data

![Flat List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/FlatList-1.gif)

##### Usage
```js

this.state = {
      data: [ "Taj Mahal",   "Great Wall of China", "Machu Picchu", "Christ the Redeemer", "Chichen Itza", "Roman Colosseum", "Petra" ],
      searchTerm: "",
      searchAttribute: "",
      ignoreCase: true
    };
render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    <TextInput
      style={styles.search} placeholder={"Search Wonders"}
      onChangeText={searchTerm => this.setState({ searchTerm })} />

    <SearchableFlatList 
      style={styles.list} data={data}
      searchTerm={searchTerm} ignoreCase={ignoreCase} 
      renderItem={({ item }) => ( <Text style={styles.listItem}>{item}</Text> )}
      keyExtractor={item => item} />
}

```
##### 2. Array of Objects

![Flat List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/FlatList-2.gif)

##### Usage
```js

this.state = {
      data: [ { id: 1, name: "Taj Mahal", country: "India" },
              { id: 2, name: "Great Wall of China", country: "China" },
              { id: 3, name: "Machu Picchu", country: "Peru" }, 
              { id: 4, name: "Christ the Redeemer", country: "Brazil" },
              { id: 5, name: "Chichen Itza", country: "Mexico" },
              { id: 6, name: "Roman Colosseum", country: "Italy" },
              { id: 7, name: "Petra", country: "Jordan" } ],
      searchTerm: "",
      searchAttribute: "country",
      ignoreCase: true
    };

render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    <TextInput
      style={styles.search} placeholder={"Search Wonder Country"}
      onChangeText={searchTerm => this.setState({ searchTerm })} />

    <SearchableFlatList 
      style={styles.list} data={data} searchTerm={searchTerm}
      searchAttribute={searchAttribute} ignoreCase={ignoreCase}
      renderItem={({ item }) => ( <Text style={styles.listItem}>{item.name}</Text> )}
      keyExtractor={item => item.id} />
}

```

##### 3. Array of Complex Objects

![Flat List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/FlatList-3.gif)

##### Usage
```js

this.state = {
      data: [
        { id: 1, name: "Taj Mahal", address: {  continent: "Asia", country: "India" } },
        { id: 2, name: "Great Wall of China", address: { continent: "Asia", country: "China" } },
        { id: 3, name: "Machu Picchu", address: { continent: "South America", country: "Peru" } },
        { id: 4, name: "Christ the Redeemer", address: { continent: "South America", country: "Brazil" } },
        { id: 5, name: "Chichen Itza", address: { continent: "South America", country: "Mexico" } },
        { id: 6, name: "Roman Colosseum", address: { continent: "Europe", country: "Italy" } },
        { id: 7, name: "Petra", address: { continent: "Asia", country: "Jordan" } } ],
      searchTerm: "",
      searchAttribute: "address.continent",
      ignoreCase: true
    };

render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    <TextInput
      style={styles.search} placeholder={"Search Wonder Country"}
      onChangeText={searchTerm => this.setState({ searchTerm })} />
    
    <SearchableFlatList
      style={styles.list} data={data} 
      searchTerm={searchTerm} searchAttribute={searchAttribute} 
      ignoreCase={ignoreCase} 
      renderItem={({ item }) => ( <Text style={styles.listItem}>{item.name}</Text> )}
      keyExtractor={item => item.id} />
}
```

### 2. SearchableSectionList

#### API

| Props            | Description                           | Data Type                                                                         | isRequired               |
| ---------------- | ------------------------------------- | ----------------------------------------------------------------------------- | ------------------------ |
| `sections`           | Data for the SectionList                    | `Array`                                                                | :white_check_mark:	       |
| `searchTerm`     | Searching Term being input by the user. Typically this will be a state variable bound to a text input                        | `String`                                                                      | :white_check_mark:	       |
| `searchByTitle` | Search applies to the title instead of the data is set to true. By default this is set to false | `Boolean`                                                                      | :x:      |
| `searchAttribute` | Attribute to be searched in case of array of objects. This will be empty in case of a simple array data | `String`                                                                      | :x:      |
| `ignoreCase`           | Case sensitive / Case insensitive search. By default this will be set to true                       | `Boolean` | :x: |

By default the `SearchableSectionList` also inherits all the props of a React Native `SectionList`. You could use virtually any props you would with a `SectionList`.

#### Usage

```js
import { SearchableSectionList } from "react-native-searchable-list";

 <SearchableSectionList
          sections={this.state.flatListData}
          searchTerm={this.state.searchTerm}
          searchAttribute={this.state.searchAttribute}
          ignoreCase={true}
          searchByTitle={false}
          renderSectionHeader={({ section: { title } }) => ( <Text style={{ fontWeight: "bold" }}>{title}</Text> )}
          renderItem={({ item }) => ( <Text style={styles.listItem}>{item}</Text> )}
          keyExtractor={item => item}
        />
``` 

#### Example

Github repo with the above examples - https://github.com/Chandrasekar-G/RNSearchableListDemo


##### 1. Simple Array Data

![Section List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/SectionList-1.gif)

##### Usage
```js

this.state = {
      data: [ { title: "Asia", data: ["Taj Mahal", "Great Wall of China", "Petra"] },
              { title: "South America", data: ["Machu Picchu", "Christ the Redeemer", "Chichen Itza"] },
              { title: "Europe", data: ["Roman Colosseum"] } ],
      searchTerm: "",
      searchAttribute: "",
      searchByTitle: false,
      ignoreCase: true
    };

render() {
    const { data, searchTerm, searchByTitle, searchAttribute, ignoreCase } = this.state;
    <TextInput
      style={styles.search} placeholder={"Search Wonders"}
      onChangeText={searchTerm => this.setState({ searchTerm })} />

    <SearchableSectionList
        sections={data} searchTerm={searchTerm}
        ignoreCase={ignoreCase}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item}</Text>
        )}
        keyExtractor={item => item}
    />
}

```
##### 2. Array of Objects

![Section List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/SectionList-2.gif)

##### Usage
```js

this.state = {
      data: [ { title: "Asia", data: [ { id: 1, name: "Taj Mahal", address: { continent: "Asia", country: "India" } },
                                       { id: 2, name: "Great Wall of China", address: { continent: "Asia", country: "China" } },
                                       { id: 7, name: "Petra", address: { continent: "Asia", country: "Jordan" } } ] },
              { title: "South America", data: [ { id: 3, name: "Machu Picchu", address: { continent: "", country: "Peru" } },
                                                { id: 4, name: "Christ the Redeemer", address: { continent: "South America", country: "Brazil" } },
                                                { id: 5, name: "Chichen Itza", address: { continent: "South America", country: "Mexico" } } ] },
              { title: "Europe", data: [ { id: 6, name: "Roman Colosseum", address: { continent: "Europe", country: "Italy" } } ] } ],
      searchTerm: "",
      searchAttribute: "address.country",
      ignoreCase: true
    };

render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    <TextInput
      style={styles.search} placeholder={"Search Wonder Country"}
      onChangeText={searchTerm => this.setState({ searchTerm })} />

    <SearchableSectionList
      sections={data} searchTerm={searchTerm}
      searchAttribute={searchAttribute} searchByTitle={false}
      ignoreCase={ignoreCase}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <Text style={styles.listItem}>{item.name}</Text>
      )}
      keyExtractor={item => item.id}
    />
}

```

##### 3. Search By Title

![Section List](https://github.com/Chandrasekar-G/RNSearchableListDemo/blob/master/Assets/SectionList-3.gif)

##### Usage
```js

this.state = {
      data: [ { title: "Asia", data: ["Taj Mahal", "Great Wall of China", "Petra"] },
              { title: "South America", data: ["Machu Picchu", "Christ the Redeemer", "Chichen Itza"] },
              { title: "Europe", data: ["Roman Colosseum"] } ],
      searchTerm: "",
      searchAttribute: "",
      searchByTitle: true,
      ignoreCase: true
    };

render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    <TextInput
      style={styles.search} placeholder={"Search Wonder Country"}
      onChangeText={searchTerm => this.setState({ searchTerm })} />
    
    <SearchableSectionList
      sections={data} searchTerm={searchTerm}
      searchAttribute={searchAttribute} searchByTitle={searchByTitle}
      ignoreCase={ignoreCase}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <Text style={styles.listItem}>{item}</Text>
      )}
      keyExtractor={item => item}
    />
}
```





































