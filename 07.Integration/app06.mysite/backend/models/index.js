const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

const User = require('./User')(sequelize);
const Guestbook = require('./Guestbook')(sequelize);
const Gallery = require('./Gallery')(sequelize);
const Site = require('./Site')(sequelize);
const Board = require('./Board')(sequelize);

User.hasMany(Board, {
    foreignKey: {
        name: 'userNo',
        allowNull: false,
        constraints: true,
        onDelete: 'CASCADE'
    }
});
Board.belongsTo(User);

User.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
});
Guestbook.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
});
Gallery.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
});
Site.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
});
Board.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
});

module.exports = { User, Guestbook, Gallery, Site, Board }
