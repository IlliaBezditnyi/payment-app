import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from "../../components/CustomButton";

const CELL_COUNT = 6;

const AuthCodeScreen = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handlePressSubmit = () => {
        console.log("inp", value)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{flex: 1}}>
                <View style={styles.root}>
                    <View>
                    <View style={{padding: "5%"}}>
                        <Text style={styles.title}>Completion</Text>
                        <Text style={styles.subTitle}>Please Enter the last pre Authorization Code</Text>
                    </View>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor/> : null)}
                            </Text>
                        )}
                    />
                    </View>
                    <CustomButton title="Continue" onPress={handlePressSubmit}
                                  disabled={value.length<6?true:false}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#f7f6f2'
    },
    title: {textAlign: 'center', fontSize: 32, fontWeight: "600", color: '#000'},
    subTitle: {textAlign: 'center', fontSize: 20, fontWeight: "400", color: '#000', marginTop: 20, lineHeight: 24},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 50,
        height: 50,
        lineHeight: 48,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#54DBC7',
    },
});
export default AuthCodeScreen;
