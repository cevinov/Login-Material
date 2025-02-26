import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: (route.name === 'index' || route.name === 'explore') ? { display: 'none' } : undefined,
        headerShown: !(route.name === 'index' || route.name === 'explore'),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
      {}
    </Tabs>
  );
}
