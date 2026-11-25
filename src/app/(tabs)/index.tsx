import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';

export default function FoodFeedScreen() {
  const { profile } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Food Feed</Text>
        <Text style={styles.subtitle}>
          Welcome back{profile?.full_name ? `, ${profile.full_name}` : ''}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No meals in your feed yet</Text>
          <Text style={styles.emptyText}>
            Record a visit or takeout order in the Record tab, or add friends in the Friends tab to see their public visits here.
          </Text>
        </View>
      </ScrollView>
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
  content: { padding: 20 },
  emptyCard: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 20,
    gap: 8,
  },
  emptyTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  emptyText: { fontSize: 14, color: '#6B7280', lineHeight: 20 },
});