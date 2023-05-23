import { Text, View } from "react-native/types"

type PetQualityProps = {
    qualities : {
        qualOne : string,
        qual2 : string,
        qual3 : string,
        qual4 : string,
        age : number
    }[]
}

export const PetQualities = (props : PetQualityProps) => {
    return(
        <View>
            {props.qualities.map((e,i)=>{
                if (i === 0) return <Text>your pets quaolities are {e.qualOne}{e.qual2}{e.qual3}</Text>
            
                return <Text>hello</Text>
            })}

        </View>
    )
}