# web starter kit

## Getting Started
### Prerequisites

```bash
$ yarn -v
1.7.0

$ node -v
v10.9.0
```

### Development

#### Setup
```bash
$ yarn
```

#### Debug
```bash
$ yarn

$ yarn start
```

### Deploy


##### Develop
###### Editor setup
https://github.com/styled-components/vscode-styled-components

##### Deploy
```bash
$ yarn deploy
or
$ yarn deploy --profile PROFILE_NAME
```

#### file size analyze
##### cmd
```bash
$ yarn size-analyze
```

##### web-view
uncomment `// new BundleAnalyzerPlugin()` in `webpack.config.(dev|prod).js`
```js
...
    plugins: [
        new BundleAnalyzerPlugin(), // <- uncomment
        new DefinePlugin(
            Object.entries(process.env)
                .map(x => ({["process.env." + x[0]]: JSON.stringify(x[1])}))
                .reduce((x, y) => Object.assign(x, y), {}),
        )
    ],
...
```

#### Generate Documents
```bash
$ yarn docs
```
