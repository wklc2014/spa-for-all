const env = process.env.NODE_ENV === 'development' ? 'dev' : 'pord';

export const mock = env === 'dev' || false;

export default env;