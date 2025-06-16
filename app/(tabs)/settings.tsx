import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
      <Image source={require('../../assets/images/adaptive-icon.png')} />
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UISlC-svKGxLkicDl4OczwkyidR3_wwv-Q&s' }} style={{ width: "100%", height: 500 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
