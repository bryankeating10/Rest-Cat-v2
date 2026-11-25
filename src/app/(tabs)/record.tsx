import { Ionicons } from '@expo/vector-icons';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordHubScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Record</Text>
        <Text style={styles.subtitle}>Log a new dining experience</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => Alert.alert('Coming Next', 'Record a Visit form will wire up in Phase 3.')}
        >
          <View style={styles.iconBadge}>
            <Ionicons name="restaurant-outline" size={26} color="#111827" />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Record a Visit</Text>
            <Text style={styles.cardDesc}>
              Dine-in experience with atmosphere, service, and dish ratings.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => Alert.alert('Coming Next', 'Record Takeout form will wire up in Phase 3.')}
        >
          <View style={styles.iconBadge}>
            <Ionicons name="bag-handle-outline" size={26} color="#111827" />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Record Takeout / Delivery</Text>
            <Text style={styles.cardDesc}>
              At-home order with packaging quality and dish ratings.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
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
  content: { padding: 20, gap: 14 },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 18,
    gap: 14,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: { flex: 1, gap: 4 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: '#111827' },
  cardDesc: { fontSize: 13, color: '#6B7280', lineHeight: 18 },
});