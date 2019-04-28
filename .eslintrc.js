module.exports = {
  env: { node: true },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  parserOptions: { ecmaVersion: 2018, ecmaFeatures: { impliedStrict: true } },
  plugins: ["graphql", "node", "prettier"],
  rules: { "no-console": 0, "node/no-unpublished-require": 0 }
};
