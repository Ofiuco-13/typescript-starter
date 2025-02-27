import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: "2",
      name: "Alejandro",
    },
    {
      id: "3",
      name: "Emmanuel",
    },
  ]

  getUsers(): User[] {
    return this.users
  }

  getUser(id: string): User {
    const user = this.users.find((item) => item.id === id)
    if (!user) {
      throw new NotFoundException("User not found")
    }

    return user
  }

  createUser({ name }: CreateUserDto) {
    this.users.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      name,
    })
  }

  updateUser(id: string, { name }: UpdateUserDto) {
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
