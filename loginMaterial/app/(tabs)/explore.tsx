import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useNavigation } from '@react-navigation/native';
import { useThemeColor } from '@/hooks/useThemeColor';

// Image gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Mountain Landscape',
    description: 'Beautiful mountain view with clear skies',
    tags: ['nature', 'mountains'],
    imageUrl: 'https://i.imgur.com/KIDU3Dlb.jpg',
  },
  {
    id: 2,
    title: 'Ocean Sunset',
    description: 'Stunning sunset over calm ocean waters',
    tags: ['ocean', 'sunset'],
    imageUrl: 'https://i.imgur.com/1gMQJb.jpg',
  },
  {
    id: 3,
    title: 'Forest Path',
    description: 'Serene walking path through a dense forest',
    tags: ['forest', 'path'],
    imageUrl: 'https://i.imgur.com/4olOnb.jpg',
  },
  {
    id: 4,
    title: 'City Skyline',
    description: 'Urban skyline with modern architecture',
    tags: ['city', 'architecture'],
    imageUrl: 'https://i.imgur.com/XukNxmFb.jpg',
  },
];

const ImageGalleryPage: React.FC = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const primaryColor = useThemeColor({}, 'primary');
  const surfaceColor = useThemeColor({}, 'surface');
  const accentColor = useThemeColor({}, 'accent');

  const handleLogout = () => {
    // You might want to clear any user data or tokens here
    navigation.navigate('index' as never);
  };
  const handleFavoriteToggle = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(itemId => itemId !== id));
      setNotificationMessage('Removed from favorites');
    } else {
      setFavorites([...favorites, id]);
      setNotificationMessage('Added to favorites');
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleShare = (title: string) => {
    setNotificationMessage(`Shared "${title}"`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style="auto" />
      <View style={[styles.appBar, { backgroundColor: primaryColor }]}>
        <Text style={[styles.appBarTitle, { color: 'black' }]}>My Gallery</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.headerSection, { backgroundColor: surfaceColor }]}>
          <Text style={[styles.headerTitle, { color: textColor }]}>Explore Our Collection</Text>
          <Text style={[styles.headerDescription, { color: textColor }]}>
            A curated selection of beautiful images from imgur.
          </Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: primaryColor }]}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Browse All</Text>
          </TouchableOpacity>
        </View>

        {/* Gallery Grid */}
        <View style={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <View key={item.id} style={[styles.galleryItem, { backgroundColor: surfaceColor }]}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.itemContent}>
                <Text style={[styles.itemTitle, { color: textColor }]}>{item.title}</Text>
                <Text style={[styles.itemDescription, { color: textColor }]}>{item.description}</Text>

                <View style={styles.tagsContainer}>
                  {item.tags.map((tag) => (
                    <View key={tag} style={[styles.tag, { backgroundColor: primaryColor + '20' }]}>
                      <Text style={[styles.tagText, { color: primaryColor }]}>{tag}</Text>
                    </View>
                  ))}
                </View>

                {/* Actions */}
                <View style={styles.actionsContainer}>
                  <TouchableOpacity 
                    onPress={() => handleFavoriteToggle(item.id)}
                    style={styles.iconButton}
                  >
                    <IconSymbol
                      name={favorites.includes(item.id) ? 'heart.fill' : 'heart'}
                      size={24}
                      color={favorites.includes(item.id) ? primaryColor : textColor}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity 
                    onPress={() => handleShare(item.title)}
                    style={styles.iconButton}
                  >
                    <IconSymbol
                      name="square.and.arrow.up"
                      size={24}
                      color={textColor}
                    />
                  </TouchableOpacity>

                  <View style={styles.spacer} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {showNotification && (
        <View style={[styles.notification, { backgroundColor: accentColor }]}>
          <Text style={styles.notificationText}>{notificationMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    elevation: 4,
  },
  appBarTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    padding: 8,
  },
  logoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollContent: {
    padding: 16,
  },
  headerSection: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  itemContent: {
    padding: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
  },
  spacer: {
    flex: 1,
  },
  notification: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ImageGalleryPage;