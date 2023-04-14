import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository'

interface AuthenticateUserDTO {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  constructor(private UserRepository: IUserRepository) { }

  async execute(data: AuthenticateUserDTO): Promise<User> {
    const user = await this.UserRepository.findByEmail(data.email);

  

    if ( !user || user.password !== data.password) {
      throw new Error('Invalid credentials');
    } 

  

    return user;
  }
}
