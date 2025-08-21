import '@testing-library/jest-dom';

// Mock pour MapLibre GL
if (typeof window !== 'undefined' && !window.URL.createObjectURL) {
  window.URL.createObjectURL = () => '';
}

