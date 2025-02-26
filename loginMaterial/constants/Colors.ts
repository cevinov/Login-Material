/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryBlue = '#1976D2'; // Primary blue color
const lightBlue = '#BBDEFB'; // Light blue for backgrounds
const darkBlue = '#0D47A1'; // Darker blue for text and accents

export const Colors = {
  light: {
    text: '#333333', // Dark gray for better readability
    background: '#FFFFFF', // White background
    tint: primaryBlue, // Primary blue as the tint color
    tabIconDefault: '#BDBDBD', // Light gray for default tab icons
    tabIconSelected: primaryBlue, // Primary blue for selected tab icons
    surface: lightBlue, // Light blue for surface elements
    primary: primaryBlue, // Primary blue for buttons and important elements
    secondary: '#03A9F4', // Secondary blue for less prominent elements
    accent: '#FF4081', // Pink accent color for contrast
    error: '#F44336', // Red for error states
  },
  dark: {
    text: '#FFFFFF',
    background: '#121212',
    tint: lightBlue,
    tabIconDefault: '#757575',
    tabIconSelected: lightBlue,
    surface: '#1E1E1E',
    primary: lightBlue,
    secondary: '#4FC3F7',
    accent: '#FF80AB',
    error: '#FF5252',
  },
};
