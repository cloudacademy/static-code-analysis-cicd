import production from "env/production.js"
import development from "env/development.js"

const configs = {
    "development": development,
    "production": production
}

const env = process.env.NODE_ENV || "development";

export default configs[env]
