import { cache } from "react";
import { TodosRepository } from "@/infrastructure/drizzle/todos-repository";
import { UsersRepository } from "@/infrastructure/drizzle/users-repository";
import { TodosRepositoryInterface } from "@/core/todos-repository.interface";
import { UsersRepositoryInterface } from "@/core/users-repository.interface";

type ServerContext = {
  TodosRepository: TodosRepositoryInterface;
  UsersRepository: UsersRepositoryInterface;
};

export const getServerContext = cache(
  (): ServerContext => ({
    TodosRepository: TodosRepository,
    UsersRepository: UsersRepository,
  }),
);
