import { AuthorizedRequest } from '@nodite-light/admin-auth/lib/interfaces/authorizedRequest';
import AppError from '@nodite-light/admin-core/lib/utils/appError';
import httpContext from 'express-http-context';
import httpStatus from 'http-status';
import lodash from 'lodash';
import { Op } from 'sequelize';

import { IPasswordReset, IUser } from '@/components/user/user.interface';
import { UserModel } from '@/components/user/user.model';

export class UserService {
  /**
   * Search users.
   * @param user
   * @returns
   */
  public async search(user?: IUser): Promise<IUser[]> {
    const where = {};

    if (user?.email) {
      lodash.set(where, 'email', { [Op.like]: `%${user?.email}%` });
    }

    const users = await UserModel.findAll({ where });

    return users.map((u) => u.toJSON<IUser>());
  }

  /**
   * Get by id.
   * @param id
   * @returns
   */
  public async get(id?: number): Promise<IUser> {
    const user = await UserModel.findOne({ where: { userId: id } });

    if (lodash.isEmpty(user)) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    return user.toJSON<IUser>();
  }

  /**
   * Get by Username.
   * @param username
   * @returns
   */
  public async getByUsername(username: string): Promise<IUser> {
    const user = await UserModel.findOne({ where: { username } });

    if (lodash.isEmpty(user)) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    return user.toJSON<IUser>();
  }

  /**
   * Get by Email.
   * @param email
   * @returns
   */
  public async getByEmail(email: string): Promise<IUser> {
    const user = await UserModel.findOne({ where: { email } });

    if (lodash.isEmpty(user)) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    return user.toJSON<IUser>();
  }

  /**
   * Create.
   * @param user
   * @returns
   */
  public async create(user: IUser): Promise<IUser> {
    const createdUser = await UserModel.create({ ...user });

    if (lodash.isEmpty(createdUser)) {
      throw new AppError(httpStatus.BAD_GATEWAY, 'User was not created!');
    }

    return createdUser.toJSON<IUser>();
  }

  /**
   * Update.
   * @param id
   * @param user
   * @returns
   */
  public async update(id: number, user: IUser): Promise<IUser> {
    if (user.password === '') {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Password cannot be empty string, please set null or remove it if you want to keep the old password',
      );
    }

    const storedUser = await UserModel.findOne({ where: { userId: id } });

    if (lodash.isEmpty(storedUser)) {
      throw new AppError(httpStatus.BAD_REQUEST, 'User was not created!');
    }

    if (storedUser.getDataValue('password') === user.password) {
      storedUser.skipBcryptPassword = true;
    } else {
      storedUser.skipBcryptPassword = false;
    }

    const updatedUser = await storedUser.update(user);

    return updatedUser.toJSON<IUser>();
  }

  /**
   * Reset password.
   * @param id
   * @param data
   * @returns
   */
  public async resetPassword(id: number, data: IPasswordReset): Promise<IUser> {
    return this.update(id, { password: data.password } as IUser);
  }

  /**
   * Delete.
   * @param id
   * @returns
   */
  public async delete(id: number): Promise<void> {
    if (this.isAdmin(id)) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Cannot delete admin user!');
    }

    const requester = httpContext.get('user') as AuthorizedRequest['user'];

    if (id === requester.userId) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Cannot delete yourself!');
    }

    const storedUser = await UserModel.findOne({ where: { userId: id } });

    if (storedUser.getDataValue('deleted') === 9) {
      throw new AppError(httpStatus.BAD_REQUEST, 'User is not allow delete!');
    }

    return storedUser.destroy();
  }

  /**
   * Is admin?
   * @param userId
   * @returns
   */
  public isAdmin(userId?: number): boolean {
    return userId === 1;
  }

  /**
   * Valid password.
   * @param user
   * @param rawPassword
   * @returns
   */
  public validPassword(rawPassword: string, encodedPassword: string): boolean {
    return UserModel.validPassword(rawPassword, encodedPassword);
  }
}

export default {};
