import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import IconBack from '../../Assets/icons/IconBack';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@ui-kitten/components';
import QuizCard from '../../Components/MoodTrackerPanel/QuizCard';

const DailyQuizPage = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);
  const [selectedOption, setSelectedOption] = useState([null, null, null, null]);
  const [counter, setCounter] = useState(0);

  const handleSelectOption = (questionNumber, answer) => {
    let updatedSelectedOption = selectedOption;
    updatedSelectedOption[questionNumber] = answer;
    setSelectedOption(updatedSelectedOption);
    setCounter(counter + 1);
    console.log('selected options:', selectedOption);
  }

  const renderQuizPanel = () => {
    const questions = [
      'Bagaimana harimu hari ini?',
      'Seberapa puas kamu dengan bimbingan guru yang telah diberikan?',
      'Bagaimana relasimu dengan teman-teman di sekolah?',
      'Apakah perilakuku sudah mencerminkan apa yang ingin aku capai?'
    ]
    return questions.map((question, idx) => {
      return (
        <QuizCard
          question={question} 
          questionNumber={idx}
          selectedOption={selectedOption[idx]}
          handleSelectOption={handleSelectOption}
        />
      )
    })
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF'
        }}
      >
        <ScrollView style={{paddingHorizontal: 20}}>
          <View
            style={{
              flex: 1,
              marginTop: 50,
              marginBottom: 30,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity
              style={{marginRight: 16}}
              onPress={() => { navigation.goBack() }}
            >
              <IconBack/>
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Mood Tracker</Text>
            <Text style={{color: '#FFFFFF'}}>{counter}</Text>
          </View>
          {renderQuizPanel()}
          <Input
            multiline={true}
            textStyle={{ minHeight: 128 }}
            placeholder='Tulis refleksimu hari ini...'
            style={{
              marginTop: 20
            }}
          />
          <TouchableOpacity
            style={{
              marginTop: 20,
              width: '100%',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              backgroundColor: '#598BFF',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingTop: 16,
              paddingBottom: 16,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Bold',
                fontSize: 16,
                color: '#FFFFFF'
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={{height: 50}}></View>
      </SafeAreaView>
    )
  }
}

export default DailyQuizPage;