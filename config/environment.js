const development = {
  name: "development",
  db_path: "mongodb://localhost/corner-tree-backend-assignment",
};

const production = {
  name: "production",
  db_path: `mongodb+srv://jevik-zayka-user:${process.env.password}@cluster0.cmbhb.mongodb.net/corner-tree-backend-assignment?retryWrites=true&w=majority`,
};

module.exports =
  eval(process.env.environment) == undefined
    ? development
    : eval(process.env.environment);
