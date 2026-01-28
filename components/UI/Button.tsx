import { Pressable, View , Text, StyleSheet} from "react-native";
import { GlobalStyles } from "../../constans/styles";



export interface ButtonProps extends React.ComponentProps<any> {
    children?: React.ReactNode;
    onPress: () => void;
    mode?: 'flat' | undefined;
    style?: any;
}


export const Button : React.FC<ButtonProps> = ({ children, onPress, mode, style }) => {


    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
                <View style={[styles.button, mode === 'flat' && styles.flat]} >
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        marginHorizontal: 4,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.primary200,
    }
});