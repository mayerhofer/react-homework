module.exports = {
    setupTestFrameworkScriptFile: "./enzyme.config.js",
    moduleNameMapper: {
        "^config$": "<rootDir>/weppack.config.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/test/assetsTransformer.js",
        "\\.(css|less)$": "<rootDir>/src/test/assetsTransformer.js"
    },
    testMatch: [
        '**/*Test.(js|jsx)',
    ],
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/**/*.spec.{js,jsx}',
        '!src/index.jsx',
        '!src/index.js',
        '!src/test/**/*.*',
        '!**/*.{css,scss}',
        '!**/node_modules/**'
    ]
}
