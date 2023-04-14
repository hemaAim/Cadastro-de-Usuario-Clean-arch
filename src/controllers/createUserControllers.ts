import { Request, Response } from "express";
import { CreateUserUserCase } from "../userCase/CreateUserUserCase";


export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUserCase) {}

  public async execute(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { name, email, password, id } = req.body;

    try { 

      const User = await this.createUserUseCase.execute({
        name,
        email,
        password, 
        id,
      });

      return res
        .status(201)
        .json({ User, message: "User create sucessful" });
    } catch (erro) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

