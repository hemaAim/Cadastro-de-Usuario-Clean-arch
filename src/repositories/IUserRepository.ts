import {User} from '../entities/User' 
 

 export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
}