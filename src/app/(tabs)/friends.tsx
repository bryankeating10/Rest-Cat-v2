import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth, UserProfile } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

export default function FriendsScreen() {
  const { profile: currentUser } = useAuth();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<UserProfile[]>([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async (text: string) => {
    setQuery(text);
    const clean = text.trim().toLowerCase().replace(/^@/, '');

    if (clean.length < 2) {
      setResults([]);
      return;
    }

    setSearching(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .ilike('username', `%${clean}%`)
      .neq('id', currentUser?.id ?? '')
      .limit(20);

    setSearching(false);
    if (!error && data) {
      setResults(data as UserProfile[]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <Text style={styles.subtitle}>Find alpha testers by @username</Text>
      </View>

      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color="#9CA3AF" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search username..."
          placeholderTextColor="#9CA3AF"
          autoCapitalize="none"
          autoCorrect={false}
          value={query}
          onChangeText={handleSearch}
        />
      </View>

      {searching ? (
        <ActivityIndicator style={{ marginTop: 24 }} color="#111827" />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            query.trim().length >= 2 ? (
              <Text style={styles.emptyText}>No users found matching &ldquo;{query}&rdquo;.</Text>
            ) : (
              <Text style={styles.emptyText}>Type at least 2 characters to search usernames.</Text>
            )
          }
          renderItem={({ item }) => (
            <View style={styles.userRow}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitial}>
                  {item.full_name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.fullName}>{item.full_name}</Text>
                <Text style={styles.username}>@{item.username}</Text>
              </View>
            </View>
          )}
        />
      )}
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
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 15, color: '#111827' },
  listContent: { paddingHorizontal: 16, gap: 10 },
  emptyText: { textAlign: 'center', color: '#9CA3AF', marginTop: 24, fontSize: 14 },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 14,
    padding: 12,
    gap: 12,
  },
  avatarCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  fullName: { fontSize: 15, fontWeight: '700', color: '#111827' },
  username: { fontSize: 13, color: '#6B7280' },
});