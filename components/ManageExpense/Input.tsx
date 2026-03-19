import { TextInput, View, Text } from "react-native"


export interface InputProps {
    label: string
    textInputConfig: React.ComponentProps<typeof TextInput>
}

export const Input : React.FC<InputProps>  = (props: InputProps) => {

    return <View>
        <Text>{props.label}</Text>
        <TextInput  {...props.textInputConfig} />
    </View>
    
}