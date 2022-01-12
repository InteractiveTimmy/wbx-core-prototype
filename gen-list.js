const json = {
  "devDependencies": {
    "@babel/core": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-typescript": "^7.16.5",
    "@commitlint/cli": "^15.0.0",
    "@commitlint/config-conventional": "^15.0.0",
    "@microsoft/api-documenter": "^7.13.77",
    "@microsoft/api-extractor": "^7.19.2",
    "@rollup/plugin-node-resolve": "^13.1.1",
    "@types/jest": "^27.0.3",
    "@typescript-eslint/eslint-plugin": "^5.7.0",
    "@typescript-eslint/parser": "^5.7.0",
    "babel-jest": "^27.4.5",
    // "concurrently": "^6.5.1",
    "eslint": "^8.4.1",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jest": "^25.3.0",
    // "eslint-plugin-tsdoc": "^0.2.14",
    "husky": "^7.0.4",
    "jest": "^27.4.5",
    "rimraf": "^3.0.2",
    "rollup": "^2.62.0",
    "rollup-plugin-dts": "^4.1.0",
    "rollup-plugin-terser": "^7.0.2",
    "typescript": "^4.5.4"
  }
};

console.log(Object.keys(json.devDependencies).join(' '));