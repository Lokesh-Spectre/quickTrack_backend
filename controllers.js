import locationRoute from "./controllers/locationController.js";
import sensorRoute from "./controllers/sensorController.js";
import routesRoute from "./controllers/routesController.js";
const controller = {}
controller.start = (app)=>{
    app.use("/sensors",sensorRoute);
    app.use("/locations",locationRoute);
    app.use("/routes",routesRoute);
}
export default controller;