import locationRoute from "./controllers/locationController.js";
import sensorRoute from "./controllers/sensorController.js";
import routesRoute from "./controllers/routesController.js";
import stoppingRoute from "./controllers/stoppingController.js";

const controller = {}
controller.start = (app)=>{
    app.use("/sensors",sensorRoute);
    app.use("/locations",locationRoute);
    app.use("/routes",routesRoute);
    app.use("/stoppings",stoppingRoute);

}
export default controller;