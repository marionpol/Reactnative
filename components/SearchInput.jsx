import { View, Text, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)


  return (
        <View className="border-2 border-vblack-200 rounded-2xl focus:border-secondary items-center w-full h-16 px-4 bg-black-100 flex-row space-x-4">
            <TextInput
            className ="mt-0.5 text-white flex-1 font-pregular text-base"
            value={value}
            placeholder="Search for a video topic"
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
            />
            <TouchableOpacity>
                <Image
                className="w-5 h-5"
                resizeMode='contain'
                source={icons.search}
                />
            </TouchableOpacity>
        </View>
  )
}

export {SearchInput}