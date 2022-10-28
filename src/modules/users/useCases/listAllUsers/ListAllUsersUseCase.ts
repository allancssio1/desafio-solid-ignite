import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (user_id) {
      const userPermited = this.usersRepository.findById(user_id);

      if (!userPermited)
        throw new Error("error user not found ListAllUsersUseCase");

      if (!userPermited.admin) throw new Error("error ListAllUsersUseCase");
    }
    const usersList = this.usersRepository.list();
    return usersList;
  }
}

export { ListAllUsersUseCase };
