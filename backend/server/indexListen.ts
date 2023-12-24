import app from "./index";

const PORT = 3000;
const host = "0.0.0.0";
app.listen(PORT, host, () => {
  console.log(`lintening to port http://${host}:${PORT}`);
});
