const app = require("./src/app");
require("./src/database/connection");//realizo la conexion con la base de datos
app.listen(5000, () => {
  console.log("Server listen on port:5000");
});
