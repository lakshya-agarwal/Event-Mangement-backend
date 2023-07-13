const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@eventcluster.yiuodsp.mongodb.net/eventManagement?retryWrites=true&w=majority";
module.exports = {
    connect: async() => {
        try {
            const connect =  await mongoose.connect(uri);
            console.log('Connected to MongoDB1',connect.connection.host,connect.connection.name);
        } catch (error) {
            console.log(error);
            process.exit(1)
        }
    }
  };