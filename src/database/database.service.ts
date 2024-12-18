import { Injectable } from '@nestjs/common';

export interface UserEntityInterface {id:string, name: string, email: string, cep: string}
@Injectable()
export class DatabaseService {
   private db: Array<UserEntityInterface>
  
    constructor() {
        this.db = []
    }

    async create(data: Omit<UserEntityInterface, 'id'>): Promise<UserEntityInterface>{
        return new Promise((resolve, reject) => {
            if (this.db.find(item => item.email === data.email)) {
                return reject('Email já cadastrado')
            }
            const payload = {...data, id: this.createRandomId() }
            this.db.push(payload)
            resolve(payload)
        })
    }
    async listUsers(): Promise<UserEntityInterface[]> {
        return new Promise((resolve) => {
            resolve(this.db)
        })
    }


    private createRandomId() {
        return crypto.randomUUID()
    }

}
