

enum Types { Mongodb }

interface IDB {
    dbType: Types
}

class Database implements IDB {
    dbType: Types

    constructor(db: Types) {
        this.dbType = db
    }

    async init() {

    }

    async get(collection: string, document: string) {

    }


}

export { Types, Database }