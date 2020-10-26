import app from "./app";
import {connect} from './database/database'
// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;

async function main() {
    await app.listen(port)
    await connect()
    console.log('Server on port:', port)
}

main()