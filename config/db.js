const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // these settings just stop some warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB