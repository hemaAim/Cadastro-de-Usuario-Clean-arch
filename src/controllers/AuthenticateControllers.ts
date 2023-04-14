import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../userCase/AuthenticateUserUserCase";


export class AuthenticateUserController {
  constructor(
    private readonly authenticateUserUseCase: AuthenticateUserUseCase
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const user = await this.authenticateUserUseCase.execute({
        email,
        password,
      });

      return response.json({ user, message: "Login successful" });
    } catch (error) {
      return response.status(400).json({
        message: "Unexpected error.",
      });
    }
  }
}
