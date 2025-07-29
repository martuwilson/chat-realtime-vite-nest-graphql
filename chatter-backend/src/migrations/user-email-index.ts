import { Db } from "mongodb";

module.exports = {
    async up(db: Db, client) {
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
    },

    async down(db, client) {
        // Add your rollback logic here
    }
};
