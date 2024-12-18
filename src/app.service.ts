import { Injectable } from '@nestjs/common';
import { DatabaseService, UserEntityInterface } from './database/database.service';
import { CreateUserDTO } from './dto/CreateUser.dto';



@Injectable()
export class AppService {

  private userRepository: any;
  constructor(private database: DatabaseService) {

  }
  getHello(): string {
    
    return 'Hello World!';
  }

  async createUser(data: CreateUserDTO): Promise<UserEntityInterface> {

      return await this.database.create(data)
  
  }

  async listUsers() {
    return await this.database.listUsers()
  }
}
