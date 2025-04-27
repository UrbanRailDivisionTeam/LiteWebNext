import { MongoClient } from 'mongodb'

const MONGODB_URI = 'mongodb://localhost:27017'
const MONGODB_DB = 'liteweb'

let cachedClient: MongoClient | null = null
let cachedDb: any = null

export async function connectToDatabase() {
    // 如果已经有缓存的连接，直接返回
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

    // 创建新的连接
    const client = await MongoClient.connect(MONGODB_URI)
    const db = client.db(MONGODB_DB)

    // 缓存连接
    cachedClient = client
    cachedDb = db

    return { client, db }
}