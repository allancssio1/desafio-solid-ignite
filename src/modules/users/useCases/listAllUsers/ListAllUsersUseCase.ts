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
        throw new Error(
          "Usuário não encontrado ou não posssue permissão para esta ação",
        );

      if (!userPermited.admin)
        throw new Error(
          "Usuário não encontrado ou não posssue permissão para esta ação",
        );
    }
    const usersList = this.usersRepository.list();
    return usersList;
  }
}

export { ListAllUsersUseCase };
