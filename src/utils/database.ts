import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "todo_db",
    "root",
    "123456",
    { 
        dialect: 'mysql',
        host: 'localhost',
    }
);

export default sequelize;