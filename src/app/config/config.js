import production from "env/production.js"
import development from "env/development.js"

var configs = {
    "development": development,
    "production": production
}

var env = process.env.NODE_ENV || "development";

export default configs[env]
