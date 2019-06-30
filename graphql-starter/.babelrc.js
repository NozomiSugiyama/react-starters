const config = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    // [
    //     "@babel/preset-env",
    //     {
    //         "targets": {
    //             "browsers": [
    //                 "last 1 version",
    //                 "> 5%",
    //                 "IE 11"
    //             ]
    //         },
    //         "modules": false
    //     }
    // ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    [
        "babel-plugin-styled-components",
        {
            "preprocess": true,
            "minify": true,
            "transpileTemplateLiterals": false
        }
    ]
  ]
};

module.exports = config;
