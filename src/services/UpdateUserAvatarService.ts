/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

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
    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
