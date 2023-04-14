import { User } from '../entities/User'

import { IUserRepository } from '../repositories/IUserRepository'

interface AddUserDTO {
  name: string;
  email: string;
  password: string;
  id?: string
}
export class CreateUserUserCase {
  constructor(private UserRepository: IUserRepository) { }

  async execute(data: AddUserDTO): Promise<User> {
    const userAlreadyExists = await this.UserRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error("IUser already exist")
    }
    const user = new User(data)
    return await this.UserRepository.create(user)
  }
}