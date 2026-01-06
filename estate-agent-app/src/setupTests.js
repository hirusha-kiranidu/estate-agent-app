import "@testing-library/jest-dom";

// Mock import.meta.env for Jest (Vite compatibility)
global.importMeta = {
  env: {
    BASE_URL: "",
  },
};
