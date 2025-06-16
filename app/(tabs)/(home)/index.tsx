import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Link
        href={{
          pathname: '/(tabs)/(home)/details/[id]',
          params: { id: 'bacon' },
        }}>
        View user details
      </Link>
      <Link href="/(tabs)/settings">Settings</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
