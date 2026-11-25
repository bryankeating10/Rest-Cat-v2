import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BrowseScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Browse</Text>
        <Text style={styles.subtitle}>Discover nearby restaurants</Text>
      </View>

      <View style={styles.centerContainer}>
        <Ionicons name="compass-outline" size={44} color="#9CA3AF" />
        <Text style={styles.placeholderTitle}>Nearby Discovery Coming Soon</Text>
        <Text style={styles.placeholderText}>
          Search restaurants near your location and import them directly into your catalog.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: { fontSize: 26, fontWeight: '800', color: '#111827' },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 10,
  },
  placeholderTitle: { fontSize: 17, fontWeight: '700', color: '#111827' },
  placeholderText: { fontSize: 14, color: '#6B7280', textAlign: 'center', lineHeight: 20 },
});