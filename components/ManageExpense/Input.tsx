import { TextInput, View, Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constans/styles"


export interface InputProps {
    label: string
    textInputConfig?: React.ComponentProps<typeof TextInput>
    style?: any
    invalid?: boolean
}

export const Input : React.FC<InputProps>  = (props: InputProps) => {

    let inputStyles = [styles.input];
    if(props.textInputConfig?.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    if(props.invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return <View style={[styles.inputContainer, props.style]}>
        <Text style={[styles.label, props.invalid && styles.invalidLabel]}>{props.label}</Text>
        <TextInput style={inputStyles} 
            {...props.textInputConfig} />
    </View>
    
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
        marginHorizontal: 4,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 4,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500,
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50,
        color: GlobalStyles.colors.error500,
    }
});