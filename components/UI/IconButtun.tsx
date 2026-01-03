import { Ionicons } from "@expo/vector-icons";
import { Pressable, View , StyleSheet} from "react-native";


export interface IconButtonProps extends React.PropsWithChildren {
    name: any;
    size: number;
    color: string | undefined;
    onPress?: () => void;
}


export const IconButton: React.FC<IconButtonProps> = ({ name, size, color, onPress }) => {

    return <Pressable onPress={onPress} style={(pressed) => pressed ? styles.pressed : undefined}>
        <View style={styles.buttonContainer}>
            <Ionicons name={name} size={size} color={color} />
        </View>
    </Pressable>   
}

const styles  = StyleSheet.create({
    buttonContainer: {
        padding: 8,
        marginHorizontal: 8,
        marginVertical: 2,

    },
    pressed: {
        opacity: 0.75
    }
});