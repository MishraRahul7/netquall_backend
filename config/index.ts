import dotenv from "dotenv";
dotenv.config();
export const {
  PORT,
  PG_HOST,
  PG_USER,
  PG_DATABASE,
  PG_PASSWORD,
  PG_PORT,
}: any = process.env;
