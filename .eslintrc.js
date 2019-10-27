module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "brace-style": ["error", "1tbs", {allowSingleLine: true}],
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
        "no-spaced-func":  "error",
        // 嵌套块深度
        "max-depth": [0, 4],
        //字符串最大长度
        "max-len": [0, 80, 4],
        //函数最多只能有3个参数
        "max-params": [0, 3],
        //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "new-cap": 2,
    }
};