import { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');

  const getRandomColor = (): string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  const changeColor = () => {
    setBgColor(getRandomColor());
  };

  return (
    <TouchableWithoutFeedback onPress={changeColor}>
      <ThemedView style={[styles.titleContainer, { backgroundColor: bgColor }]}>
        <ThemedText type="title">Hello there</ThemedText>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
