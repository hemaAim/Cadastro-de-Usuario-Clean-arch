import { Request, Response } from "express";
import { ListAllUserUserCase } from "../userCase/ListAllUserUserCase";


export class ListAllUserController {
  constructor(private listAllUserUseCase: ListAllUserUserCase) {}

  public async execute(
    req: Request,
    res: Response
  ): Promise<Response> {
   

    try {
      const users = await this.listAllUserUseCase.execute();

      return res.json(users);
    } catch (erro) {
      return res.status(500).json({ message: `Internal server error ${this.listAllUserUseCase}` });
    }
  }
}

