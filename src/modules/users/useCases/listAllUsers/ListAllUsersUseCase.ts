import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    console.log("entrou no listAll");
    if (user_id) {
      console.log("entrou no userId");
      const userPermited = this.usersRepository.findById(user_id);

      if (!userPermited)
        throw new Error("error user not found ListAllUsersUseCase");

      if (!userPermited.admin) throw new Error("error ListAllUsersUseCase");
    }
    console.log("saindo no listAll");
    const usersList = this.usersRepository.list();
    return usersList;
  }
}

export { ListAllUsersUseCase };
