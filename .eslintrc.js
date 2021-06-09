const RULES = {
  OFF: "off",
  WARNING: "warn",
  ERROR: "error",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/prop-types": RULES.OFF,
    "no-unused-vars": RULES.WARNING,
    camelcase: RULES.WARNING,
    "react/display-name": RULES.WARNING,
  },
  parser: "babel-eslint",
}
