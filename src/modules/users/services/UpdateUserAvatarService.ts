import path from 'path';
import fs from 'fs';

import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import uploadConfig from '../../../config/upload';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    if (user.avatar) {
      // path.join junta dois caminhos: o diretorio da uploadConfig e o user.avatar
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      // fs = file system do node
      // fs.promises = uso o filesystem como promise
      // fs.promises.stat = verifica o status do arquivo, mas SÓ se ele existir
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        // deleta o arquivo
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    // coloca o novo avatar no user
    user.avatar = avatarFilename;
    // salva o user no banco
    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
