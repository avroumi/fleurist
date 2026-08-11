import { app } from "./app.js";
const PORT = process.env.PORT || 3400;

app.listen(PORT, () => console.log("server run in port 3400"));
