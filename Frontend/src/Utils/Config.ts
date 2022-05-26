class Config {
}

class DevelopmentConfig extends Config {
    

    public findurl = 'http://localhost:3001/api/findurl/';

    
}

class ProductionConfig extends Config {
    
    public findurl = 'https://eran-vac.herokuapp.com/api/findurl/';

}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
