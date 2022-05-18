module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  ignorePatterns: ["dist/*.*"],
  rules: {
    "no-console": "off",
    "no-alert": "off",
    "no-plusplus": "off",
    "no-unreachable": "off",
    "no-param-reassign": "off",
    "no-const-assign": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
};
