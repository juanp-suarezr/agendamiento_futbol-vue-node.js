require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },

    mysql: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        passwd: process.env.DB_PASS || '',
        database: process.env.DATABASE || 'agendamiento_futbol',
    },
}