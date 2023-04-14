import { Router } from "express";
import express, { Express, Request, Response } from "express"; 

import { MongoDBUserRepository} from "../implementation/RepositoryImpl";

import {CreateUserController} from "../controllers/createUserControllers";
import { ListAllUserController } from "../controllers/ListAllUserControllers";
import {AuthenticateUserController} from "../controllers/AuthenticateControllers"

import { CreateUserUserCase } from "../userCase/CreateUserUserCase";
import {ListAllUserUserCase} from "../userCase/ListAllUserUserCase";
import { AuthenticateUserUseCase} from "../userCase/AuthenticateUserUserCase";

const router = Router();

const UserRepo = new MongoDBUserRepository();

const createUserUserCase = new CreateUserUserCase(UserRepo);
const createUserController = new CreateUserController(createUserUserCase);



const listAllUserUseCase = new ListAllUserUserCase(UserRepo) 
const listAllUserControllers = new ListAllUserController(listAllUserUseCase)

const authenticateUserUseCase = new AuthenticateUserUseCase(UserRepo) 
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)






router.post("/user", async (req: Request, res: Response) => {createUserController.execute(req, res);});

router.get("/user", async (req: Request, res: Response) => {listAllUserControllers.execute(req, res);});

router.post("/login", async (req: Request, res: Response) => {authenticateUserController.execute(req, res);});



export { router };
