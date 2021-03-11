import  './config/dotenvLoad.js';

import app from "./app/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on https://localhost:${PORT}`));
