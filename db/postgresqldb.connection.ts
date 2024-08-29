import { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_PORT, PG_USER } from "../config";
import {Sequelize} from "sequelize";

class DB {
  public db: Sequelize;
  constructor() {
    try {
      const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
        host: PG_HOST,
        dialect: "postgres",
        pool: { max: 5, min: 0, idle: 10000, acquire: 30000 },
        logging: false,
        port: PG_PORT,
      });
      this.db = sequelize;
    } catch (err) {
      console.log("err-->", err);
      process.exit();
    }
  }
}

const sequelizeDBConnection = new DB();
export default sequelizeDBConnection;
