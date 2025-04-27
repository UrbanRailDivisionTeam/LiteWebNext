'use server'
import 'server-only'
import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('请在环境变量中设置 MONGODB_URI')
}

let cached = global as any

if (!cached.mongo) {
    cached.mongo = { conn: null, promise: null }
}

export default async function connect_db() {
    if (cached.mongo.conn) {
        return cached.mongo.conn
    }
    if (!cached.mongo.promise) {
        const opts = {
            // MongoDB客户端选项
        }
        cached.mongo.promise = MongoClient.connect(MONGODB_URI!, opts).then((client) => {
            return client
        })
    }
    try {
        cached.mongo.conn = await cached.mongo.promise
    } catch (e) {
        cached.mongo.promise = null
        throw e
    }
    return cached.mongo.conn
}

// 获取特定数据库的辅助函数
export function getDb(dbName?: string) {
    const client = cached.mongo.conn as MongoClient
    return client.db(dbName)
}