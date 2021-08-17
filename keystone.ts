import 'dotenv/config';

const databaseURL =
    process.config.DATABASE_URL || 'mongodb://localhost/store-database';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 30, // sec * min * hrs * days
    secret: process.config.COOKIE_SECRET,
};
