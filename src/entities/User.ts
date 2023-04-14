import crypto from "crypto";

export class User {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly id: string;
  constructor(data: {
    name: string;
    email: string;
    password: string;
    id?: string;
  }) {
    this.id = data.id || crypto.randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
