// client/src/utils/validation.js

// List of bad words in Spanish and English
const badWords = ['badword1', 'badword2', 'palabrota1', 'palabrota2'];

// List of admin or website related words
const reservedWords = ['admin', 'moderator', 'mercadotcg', 'support'];

export const validateUsername = (username) => {
  // Convert to lowercase for case-insensitive checking
  const lowercaseUsername = username.toLowerCase();

  // Check for bad words and reserved words
  if (badWords.some(word => lowercaseUsername.includes(word)) ||
      reservedWords.some(word => lowercaseUsername.includes(word))) {
    return false;
  }

  // Check for letter replacements (e.g., '@' for 'a', '1' for 'i')
  const normalizedUsername = lowercaseUsername
    .replace('@', 'a')
    .replace('1', 'i')
    .replace('0', 'o')
    .replace('$', 's');

  if (badWords.some(word => normalizedUsername.includes(word)) ||
      reservedWords.some(word => normalizedUsername.includes(word))) {
    return false;
  }

  // Additional checks (e.g., length, allowed characters) can be added here

  return true;
};

export const validateEmail = (email) => {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};