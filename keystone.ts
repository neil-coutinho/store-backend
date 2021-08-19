import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost/store-database';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 30, // sec * min * hrs * days
    secret: process.env.COOKIE_SECRET,
};

export default config({
    // @ts-ignore
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
    },
    lists: createSchema({}),
    ui: {
        isAccessAllowed: () => true, // change later
    },
});
