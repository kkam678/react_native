module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        //TypeError: undefined is not an object (evaluating 'this._callListeners.bind')
        //에러 날때 '@babel/plugin-transform-flow-strip-types' 추가하여 해결함
        //react-native 의 babel 설정과 달라서 그럴수도 있는데 이럴때는 react-native run-android --reset-cache 캐시 삭제해줌
        ['babel-plugin-styled-components'],
        ['@babel/plugin-transform-flow-strip-types'],
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/plugin-proposal-class-properties", {"loose": true}]
    ]

};
