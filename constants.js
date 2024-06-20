const TARGET = "LOCAL" // LOCAL or PRO

const DB = {
    database: "quick_track",
    username: "root",
    pwd: TARGET === "PRO" ? "<doesnt work yet>" : "root",
    host: TARGET === "PRO" ? "<doesnt work yet>" : "127.0.0.1",
    port: 3306,
    dialect: "mysql",
};
const server ={
    PORT:3000
}
export default { DB,TARGET,server };
