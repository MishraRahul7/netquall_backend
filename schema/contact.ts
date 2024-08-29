import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize();

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
});

export default User;