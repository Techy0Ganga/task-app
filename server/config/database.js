import { Sequelize } from "sequelize";
import "dotenv/config"

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: "postgres",
    logging : false,
});

 async function SQConnect(){
    try{
        await sequelize.authenticate();
        console.log("connection established with db");
    }catch(error){
        console.log("error occured")
        console.error(error)
    }
}

export default SQConnect;
export {sequelize}