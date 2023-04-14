import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

import UserModel, { UserDocument } from "../models/UserModel";

export class MongoDBUserRepository implements IUserRepository {
  
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ email });
    if (user) {
      return new User({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
    return undefined;
  }

  async create(user: User): Promise<User> {
    const UserCreated = await UserModel.create(user);
    return UserCreated;
  }

  async findAll(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map((user: UserDocument) => {
      return new User({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    });
  }


}
