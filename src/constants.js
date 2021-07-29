const prod = {
    url: {
     apiUrl: 'https://stonks-python-api.herokuapp.com'
    }
};
   
const dev = {
    url: {
        apiUrl: 'http://localhost:5000'
    }
};

const Config = process.env.NODE_ENV === 'development' ? dev : prod;
export { Config }