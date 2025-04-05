import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const taskModel = sequelize.define('Task',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    description: {
        type : DataTypes.TEXT,
    },
    finish :{
        type : DataTypes.BOOLEAN,
        defaultValue : false,
    },
    deadline : {
        type : DataTypes.DATE,
    }
})

export default taskModel;