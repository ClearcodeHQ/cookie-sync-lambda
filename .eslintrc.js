module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  // "extends": "eslint:recommended",
  "rules": {
    "curly": [
      2,
      "all"
    ],
    "wrap-iife": [
      2,
      "inside"
    ],
    "no-cond-assign": [2],
    "no-console": [2],
    "no-extra-semi": [1],
    "no-constant-condition": [1],
    "no-extra-boolean-cast": [1],
    "no-func-assign": [1],
    "no-inner-declarations": [1],
    "no-dupe-keys": [1],
    "no-dupe-args": [1],
    "no-duplicate-case": [1],
    "no-debugger": [1],
    "block-scoped-var": [1],
    "no-empty-character-class": [1],
    "no-implied-eval": [1],
    "guard-for-in": [1],
    "no-unused-vars": [1],
    "no-lonely-if": [1],
    "no-irregular-whitespace": [1],
    "no-regex-spaces": [1],
    "no-unexpected-multiline": [1],
    "use-isnan": [1],
    "valid-typeof": [1],
    "no-extra-parens": ["warn", "all", { "conditionalAssign": false }],
    "keyword-spacing": [2],
    "no-implicit-coercion": [
      2,
      {
        "boolean": true,
        "string": true,
        "number": true
      }
    ],
    "no-empty": [
      2,
      {
        "allowEmptyCatch": true
      }
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "padded-blocks": [
      2,
      "never"
    ],
    "array-bracket-spacing": [
      2,
      "never",
      {
        "singleValue": true
      }
    ],
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      2,
      "never"
    ],
    "one-var": [
      2,
      "always"
    ],
    "quote-props": [
      2,
      "as-needed",
      {
        "keywords": true
      }
    ],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "space-unary-ops": [
      2,
      {
        "words": false,
        "nonwords": false
      }
    ],
    "space-infix-ops": 2,
    "camelcase": [
      2,
      {
        "properties": "never"
      }
    ],
    "no-with": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": 2,
    "quotes": [
      2,
      "single"
    ],
    "indent": [
      2,
      4,
      {
        "SwitchCase": 1
      }
    ],
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "comma-dangle": [
      2,
      "never"
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "max-len": [
      2,
      120
    ],
    "consistent-this": [
      2,
      "self"
    ],
    "dot-notation": 2,
    "yoda": [
      2,
      "never"
    ]
  }
};