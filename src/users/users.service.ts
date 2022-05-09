import { Injectable } from "@nestjs/common";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: "2",
      name: "Hello World from Nest.js",
    },
  ]

  getUsers(): User[] {
    return this.users
  }

  getUser(id: string): User {
    return this.users.find((item) => item.id === id)
  }

  createUser(name: string) {
    this.users.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      name,
    })
  }

  updateUser(id: string, name: string) {
    const user: User = this.getUser(id)
    user.name = name

    return user
  }

  removeUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id)
    if (index => 0) {
      this.users.splice(index, 1)
    }
  }

}
