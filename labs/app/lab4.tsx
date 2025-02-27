import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import vacationDestinations from "../constants/list_items";
import { Checkbox } from "react-native-paper";

export default function lab4() {

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedItems((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((item: number) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={vacationDestinations} keyExtractor={(item) => item.id.toString()}
       renderItem={({item}) => 
      <TouchableOpacity  onPress={() => toggleSelection(item.id)}>
        
      <View style={styles.item}>
        {/* <Checkbox
          status={selectedItems.includes(item.id) ? "checked" : "unchecked"}
          onPress={() => toggleSelection(item.id)} 
          color="green" 
          uncheckedColor="gray"
        /> */}
        {selectedItems.includes(item.id) ? <Text style={styles.checked}>{"\u2705"}</Text>:<View style={styles.square}/>}
        <View style={styles.itemContent}>
        <Text style={styles.Title}>{item.location}</Text>
        {/* <View style={styles.itemInfo}> */}
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.temp}>{item.average_yearly_temperature}</Text>
        </View>
        {/* </View> */}
      </View>
      </TouchableOpacity>
    }>

      </FlatList>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  list: {
    marginTop: 40,
  },
  square: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    marginRight: 10
  },
  checked: {
    marginRight: 10
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width:"100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  Title: {
    fontSize: 20,
    color: "#000",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginLeft: 10,
  },
  temp: {
    fontSize: 16,
    color: "gray",
    marginLeft: 10,
  },
});
