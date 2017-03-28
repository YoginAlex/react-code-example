module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules" : {
        "indent": 0,
        "no-console": 0,
        "no-alert": 0,
        "no-trailing-spaces": 0,
        "no-unused-vars": 1,

        "no-param-reassign": 0,

        "react/no-multi-comp": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "react/forbid-prop-types": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "react/require-default-props": 0,
        "react/no-array-index-key": 0,
        "react/jsx-wrap-multilines": 0,

        "import/default": 0,
        "import/no-duplicates": 0,
        "import/named": 0,
        "import/namespace": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 2
    },
    "globals": {
        "__DEVELOPMENT__": true,
        "__CLIENT__": true,
        "__PRODUCTION__": true,
        "__SERVER__": true,
        "__DISABLE_SSR__": true,
        "__DEVTOOLS__": true,
        "__ROOT_FOLDER__": true,
        "configuration": true,
        "socket": true,
        "documents": true
    }
};