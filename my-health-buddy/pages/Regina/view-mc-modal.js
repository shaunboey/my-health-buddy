import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import { DataTable } from "react-native-paper";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ViewMCModal = (props) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalContent}>MC ID: {props.mcId}</Text>
            <Text style={styles.modalContent}>Clinic Visited: {props.clinic}</Text>
            <Text style={styles.modalContent}>Date Visted: {props.mcStart}</Text>
            <Text style={styles.modalContent}>MC Start Date: {props.mcStart}</Text>
            <Text style={styles.modalContent}>MC End Date: {props.mcEnd}</Text>
            <Text style={styles.modalContent}>MC Duration: {props.mcDuration}</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                props.setModalVisible(!props.modalVisible);
                console.log('Modal has been closed.')}
              }
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                console.log('Share button has been pressed.')}
              }
            >
              <Text style={styles.textStyle}>Share</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '80%',
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    marginTop: 0.05*windowHeight,
    height: 0.6*windowHeight,
    width: 0.75*windowWidth,
    justifyContent: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 0.03*windowHeight,
    width: 0.3*windowWidth,
    borderRadius: 25,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalContent: {
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default ViewMCModal;