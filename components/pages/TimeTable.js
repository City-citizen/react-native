import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Table, Row } from "react-native-table-component";
import DatePicker from "react-native-datepicker";
import  RNPickerSelect from "react-native-picker-select";

import BottomTabNav from "../compent/BottomTabNav";
import Adimg from "../compent/Adimg";

export default function TimeTable() {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  
  const handleDayChange = (itemValue) => {
    setSelectedDay(itemValue)
    setText(itemValue);;
  };

  const [selectedDay, setSelectedDay] = useState("");
  const [writeMode, setWriteMode] = useState(false);
  const [writeMode2, setWriteMode2] = useState(false);

  const [monday, setMonday] = useState(["", "", "", "", "", "", "", "", ""]);
  const [tuesday, setTuesday] = useState(["", "", "", "", "", "", "", "", ""]);
  const [wednesday, setWednesday] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [thursday, setThursday] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [friday, setFriday] = useState(["", "", "", "", "", "", "", "", ""]);

  const [tableHead, setTableHead] = useState([
    "T / W",
    "월",
    "화",
    "수",
    "목",
    "금",
  ]);
  const [tableData, setTableData] = useState([
    ["9 AM", "", "", "", "", ""],
    ["10 AM", "", "", "", "", ""],
    ["11 AM", "", "", "", "", ""],
    ["12 AM", "", "", "", "", ""],
    ["1 PM", "", "", "", "", ""],
    ["2 PM", "", "", "", "", ""],
    ["3 PM", "", "", "", "", ""],
    ["4 PM", "", "", "", "", ""],
    ["5 PM", "", "", "", "", ""],
  ]);

  const updateTableData = () => {
    const newData = tableData.map((row) => {
      if (row[0] === date) {
        return [
          row[0],
          monday[0],
          tuesday[0],
          wednesday[0],
          thursday[0],
          friday[0],
        ];
      }
      return row;
    });
    setTableData(newData);
  };

  const deleteTableData = () => {
    const newData = tableData.map((row) => {
      if (row[0] === date) {
        switch (selectedDay) {
          case "월":
            row[1] = "";
            break;
          case "화":
            row[2] = "";
            break;
          case "수":
            row[3] = "";
            break;
          case "목":
            row[4] = "";
            break;
          case "금":
            row[5] = "";
            break;
          default:
            break;
        }
      }
      return row;
    });
    setTableData(newData);
  };

  if (writeMode) {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: -55,
            zIndex: -1,
          }}
          source={require("../img/backgroundimg.png")}
          resizeMode="cover"
        />

        <ScrollView style={styles.table}>
          <View style={styles.container}>
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "#292929" }}>
                  <Row
                    data={tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      style={[
                        styles.row,
                        index % 2 && { backgroundColor: "#f2f2f2" },
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>

                <View style={styles.timebox}>
                  <DatePicker
                    style={styles.datePicker}
                    date={date}
                    mode="time"
                    placeholder="Select time"
                    format="h A"
                    confirmBtnText="확인"
                    cancelBtnText="닫기"
                    onDateChange={(date) => setDate(date)}
                  />
                </View>

                <Text style={styles.label}>Monday</Text>
                <TextInput
                  style={styles.input}
                  placeholder="과목명/강의실"
                  placeholderTextColor="#CACACA"
                  onChangeText={(text) =>
                    setMonday((prevState) => [text, ...prevState.slice(1)])
                  }
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Tuesday</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    setTuesday((prevState) => [text, ...prevState.slice(1)])
                  }
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Wednesday</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    setWednesday((prevState) => [text, ...prevState.slice(1)])
                  }
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Thursday</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    setThursday((prevState) => [text, ...prevState.slice(1)])
                  }
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Friday</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    setFriday((prevState) => [text, ...prevState.slice(1)])
                  }
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={updateTableData}>
                <Text style={styles.buttonText}>시간표 추가</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => setWriteMode(false)}
              >
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
            <Adimg />
            <View style={styles.table}></View>
          </View>
        </ScrollView>
        <BottomTabNav />
      </View>
    );
  }

  if (writeMode2) {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: -55,
            zIndex: -1,
          }}
          source={require("../img/backgroundimg.png")}
          resizeMode="cover"
        />

        <ScrollView style={styles.table}>
          <View style={styles.container}>
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "#292929" }}>
                  <Row
                    data={tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      style={[
                        styles.row,
                        index % 2 && { backgroundColor: "#f2f2f2" },
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>

                <View style={styles.timebox}>
                  <DatePicker
                    style={styles.datePicker}
                    date={date}
                    mode="time"
                    placeholder="Select time"
                    format="h A"
                    confirmBtnText="확인"
                    cancelBtnText="닫기"
                    onDateChange={(date) => setDate(date)}
                  />
                </View>

               
                <RNPickerSelect style
                onValueChange={handleDayChange}
                
                placeholder={{
                  label: '요일을 선택하세요',
                  value: null,
              }}
                items={[
                    { label: '월', value: '월' },
                    { label: '화', value: '화' },
                    { label: '수', value: '수' },
                    { label: '목', value: '목' },
                    { label: '금', value: '금' },
                ]}
                style={pickerSelectStyles}
            />
          
            
                
              </View>

              <TouchableOpacity style={styles.button} onPress={deleteTableData}>
                <Text style={styles.buttonText}>시간표 삭제</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => setWriteMode2(false)}
              >
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
            <Adimg />
            <View style={styles.table}></View>
          </View>
        </ScrollView>
        <BottomTabNav />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: -55,
          zIndex: -1,
        }}
        source={require("../img/backgroundimg.png")}
        resizeMode="cover"
      />

      <ScrollView style={styles.table}>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.formGroup1}>
              <Table borderStyle={{ borderWidth: 1, borderColor: "#292929" }}>
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#f2f2f2" },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </View>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
              <View
                style={{
                  alignItems: "row",
                  flexDirection: "row",
                  marginVertical: 1,
                  justifyContent: "center",
                  bottom: 0,
                  zIndex: 100,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 30,
                    backgroundColor: "white",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#292929",
                    marginRight: 10,
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => setWriteMode(true)}>
                    <Text style={{ color: "#007AFF", fontSize: 20 }}> + </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 100,
                    height: 30,
                    backgroundColor: "white",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#292929",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity onPress={() => setWriteMode2(true)}>
                    <Text style={{ color: "#007AFF", fontSize: 20 }}> - </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <Adimg />
          <View style={styles.table}></View>
        </View>
      </ScrollView>
      <BottomTabNav />
    </View>
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      height: 40, 
      width: 210, 
      color: '#000000',
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 3,
      padding: 10,
      textAlign: "center",
      
  },
  inputAndroid: {
      fontSize: 16,
      height: 40, 
      width: 200, 
      color: '#000000',
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    padding: 20,
    marginBottom: 1,
    backgroundColor: "#ffff",
  },
  formGroup: {
    marginBottom: 10,
  },
  formGroup1: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  table: {
    width: "100%",
    paddingHorizontal: 0,

    marginBottom: 35,
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
    fontSize: 10,
    textAlign: "center",
  },
  row: {
    height: 70,
  },
  datePicker: {
    width: 250,
    marginBottom: 10,
  },

  timebox: {
    width: 200,
    marginTop: 30,
  },
});
