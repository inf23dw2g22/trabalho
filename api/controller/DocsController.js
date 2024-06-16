const swaggerJSDoc = require("swagger-jsdoc");

const dotenv = require("dotenv")
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, '../', `${process.env.NODE_ENV}.env`)
});

module.exports = {
    PORT: process.env.PORT || 5000,
    HOSTNAME: process.env.HOSTNAME || "errorhostname",
    ENV: process.env.ENV || "errorenvironment",
    PROTOCOL: process.env.PROTOCOL || "http",
}

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Trabalho - Desenvolvimento Web 2",
        version: "1.0.0",
        description: "Calendar Management API",
        contact: { name: "Grupo 22" }
    },
    servers: [
        {
            url: `${process.env.PROTOCOL}://${process.env.HOSTNAME}:${process.env.PORT}`,
            description: `${process.env.ENV} mode Server.`
        }
    ],
    components: {
        securitySchemes: {
            github_oauth: {
                type: "oauth2",
                description: "Github OAuth",
                flows: {
                    authorizationCode: {
                        authorizationUrl: " https://github.com/login/oauth/authorize",
                        tokenUrl: "https://github.com/login/oauth/access_token",
                        scopes: ["user:email"],
                    },
                },
            },
        },
    },
    security: [{ github_oauth: [] }],
};
const swaggeroptions = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"]
}

const swaggerspec = swaggerJSDoc(swaggeroptions);

module.exports = swaggerspec;