const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Board', {
        no: { 
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true 
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        contents: {
            field: 'contents',
            type: DataTypes.TEXT,
            allowNull: false
        },
        regDate: {
            field: 'reg_date',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        hit: {
            field: 'hit',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        groupNo: {
            field: 'group_no',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        orderNo: {
            field: 'order_no',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        depth: {
            field: 'depth',
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        underscored: true,    
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'board'
    });
}