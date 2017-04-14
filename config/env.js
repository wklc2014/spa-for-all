module.exports = {
    '__DEV__': process.env.NODE_ENV === 'development',
    '__PROD__': process.env.NODE_ENV === 'production',
    '__TEST__': process.env.NODE_ENV === 'test'
}
