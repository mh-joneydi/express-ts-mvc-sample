import * as shell from "shelljs";
// Copy all the view templates and assets in the public folder
shell.cp("-R", ["src/views", "src/public"], "build/");

// Remove unnecessary files
shell.rm(["build/public/js/*.ts", "build/public/js/*.json"]);