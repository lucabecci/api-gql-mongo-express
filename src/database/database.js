import mongoose from 'mongoose'

export async function connect() {
    try{
        await mongoose.connect('mongodb://localhost/mongogql', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log('DB is connected')
    }
    catch(e){
        console.log('DB IS NOT CONNECTED, TRY AGAIN', e)
    }
}