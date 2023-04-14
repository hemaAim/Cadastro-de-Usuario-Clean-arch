import { User } from "../entities/User";

import { IUserRepository } from "../repositories/IUserRepository";

export class ListAllUserUserCase {
  constructor(private UserRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.UserRepository.findAll();

    return users;
  }
}
