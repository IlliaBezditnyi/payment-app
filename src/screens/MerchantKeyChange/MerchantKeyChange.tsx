import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Button, Image, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import CustomInput from "../../components/CustomInput";
import SelectButton from "../../components/SelectButton/SelectButton";
import Modal from "react-native-modal";
import BottomSheet, {BottomSheetFlatList, BottomSheetScrollView, BottomSheetView} from "@gorhom/bottom-sheet";

const MerchantKeyChange = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [keyValue, setKeyValue] = useState<string>(data[0])
    const [newKeyValue, setNewKeyValue] = useState<string>('')


    const handleNewKeyChange = (text: string) => {
        setNewKeyValue(text)
        if (text) {
            setKeyValue('')
        }

    }
    const keySelected = (item: string) => {
        setKeyValue(item)
        setNewKeyValue('')
        handleClosePress()
    }

    const handleSubmit = () => {
        newKeyValue ? console.log('manually key', newKeyValue) : console.log('key', keyValue)
    }
    const handleCancel = () => {
        // Keyboard.dismiss()
        console.log('cancel')
    }

//---modal---
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["70%", "70%", "70%"], []);
    // const handleSheetChange = useCallback((index: any) => {
    //     console.log("handleSheetChange", index);
    // }, []);
    const handleSnapPress = useCallback((index: any) => {
        sheetRef.current?.snapToIndex(index);
        setIsOpenModal(true)

    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
        Keyboard.dismiss()
        setIsOpenModal(false)
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => handleClosePress()}>
            <View style={{flex: 1}}>
                <View style={
                    [styles.root, {opacity: isOpenModal ? 0.1 : 1, backgroundColor: isOpenModal ? 'grey' : '#f7f6f2'}]
                }>
                    <View style={{gap: 20}}>
                        <View>
                            <Text style={{fontSize: 16, color: '#000', fontWeight: '500', marginBottom: 5}}>
                                Current key
                            </Text>
                            <Text style={styles.currentKeyField}>{keyValue}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 16, color: '#000', fontWeight: '500', marginBottom: 5}}>
                                Select a new key
                            </Text>
                            <Pressable style={styles.selectKeyButton}
                                       onPress={() => handleSnapPress(2)}
                            >
                                <View style={styles.container}>
                                    <Text style={styles.selectButtonTitle}>Select a new key from the database</Text>
                                </View>
                                <View>
                                    <Image source={require('../../../assets/images/chevron_right_icon.png')}/>
                                </View>
                            </Pressable>

                        </View>
                        <CustomInput
                            value={newKeyValue}
                            onChahge={(text: string) => handleNewKeyChange(text)}
                            inputName='Manually enter a new key'
                            placeholder=''
                            multiline
                            numberOfLines={3}
                            maxLength={1000}
                        />
                    </View>

                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.buttonCancel} onPress={handleCancel}>
                        <Text style={{
                            color: '#1F1F1F',
                            fontSize: 16,
                            fontWeight: '500'
                        }}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.buttonSubmit} onPress={handleSubmit}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '500'
                        }}>Continue</Text>
                    </Pressable>

                </View>
                <BottomSheet
                    ref={sheetRef}
                    index={1}
                    snapPoints={snapPoints}
                    // onChange={handleSheetChange}
                >
                    <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={{width: '100%', alignItems: 'center', marginVertical: 5}}>
                            <Text style={{fontSize: 16, color: '#000', fontWeight: '600', marginBottom: 10}}>
                                Select a new key from the database
                            </Text>
                        </View>
                        {data.map((item, index) => (
                            <Pressable onPress={() => keySelected(item)} key={index}>
                                <View style={styles.itemContainer}>
                                    <Text style={{maxWidth: '85%'}}>{item}</Text>
                                    <View
                                        style={keyValue === data[index] ? styles.activeSelectKeys : styles.selectKeys}></View>
                                </View>
                            </Pressable>))}
                    </BottomSheetScrollView>
                </BottomSheet>
            </View>

        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    container: {
        flexDirection: 'row',
        gap: 10
    },
    selectKeyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        borderRadius: 8,
    },
    selectButtonTitle: {
        fontSize: 14,
        fontWeight: "400",
        color: '#8E8E8E'
    },
    currentKeyField: {
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderStyle: 'solid',
        paddingHorizontal: 20,
        width: '100%',
        minHeight: 70,
    },
    contentContainer: {
        width: '100%'
    },

    itemContainer: {
        paddingHorizontal: 15,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 50,
        flexDirection: 'row',
        // backgroundColor: 'red',
        marginBottom: 15
    },

    containerModal: {
        flex: 1,
        zIndex: 100,
    },
    selectKeys: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9'
    },
    activeSelectKeys: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 7,
        borderColor: '#54DBC7'
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 15,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    buttonSubmit: {
        height: '100%',
        width: '48%',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderRadius: 8,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCancel: {
        height: '100%',
        width: '48%',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const data = ['sk1_rfQtfYrw0FSsmh7vP8TKhxY6sk_rfQtfYrw0FSsmh7vP8TKhxY6IN25Dz1d7I2BTUZROibUcSVlwgEDdRTRhHGQgHZ2IN25Dz1d7I2BTUZROibUcSVlwgEDdRTRhHGQgHZ2', 'sk2_rfQtfYrw0FSsmh7vP8TKhxY6IN25Dz1d7I2BTUZROibUcSVlwgEDdRTRhHGQgHZ2', 'sk3_rfQtfYrw0FSsmh7vP8TKhxYll6IN25Dz1d7I2BTUZROibUcSVlwgEDdRTRhHGQgHZ2']


export default MerchantKeyChange;
