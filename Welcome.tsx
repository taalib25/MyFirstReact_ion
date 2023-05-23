import { Text,View } from "react-native";

type WelcomeProp = {
    name : string,
    age : number
}

export default function Welcome(  props : WelcomeProp){
    return(
        <View>
            <Text>Hello {props.age}</Text>
            <Text>Hello {props.name}</Text>
        </View>
        )
        
    }