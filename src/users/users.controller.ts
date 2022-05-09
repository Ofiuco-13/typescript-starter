import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getHello(@Query() filterQuery): User[] {
        const { searchTerm, orderBy } = filterQuery;
        return this.usersService.getUsers();
    }

    @Get(":id")
    getUser(@Param("id") id: string): User {
        return this.usersService.getUser(id)
    }

    @Post()
    createUser(@Body("name") name: string) {
        return this.usersService.createUser(name)
    }

    @Patch(":id")
    updateUser(@Param("id") id: string, @Body("name") name): User {
        return this.usersService.updateUser(id, name)
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string): void {
        return this.usersService.removeUser(id)
    }
}
