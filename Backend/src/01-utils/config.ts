class Config {

}

class DevelopmentConfig extends Config {
    public isdevelopment = true;
    public mysql = { host: "localhost", user: "root", password: "", database: "vacationspro" };
}

class ProductionConfig extends Config {
    public isdevelopment = false;
    public mysql = { host: "eu-cdbr-west-02.cleardb.net", user: "b3dfcfbe23cebd", password: "da6ad677", database: "heroku_d3392d6a574871b" };
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;
