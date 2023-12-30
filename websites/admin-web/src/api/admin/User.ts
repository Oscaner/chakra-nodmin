/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { RequestParams } from "@/types/request";
import { ContentType } from "@/types/request";
import { request } from "@/utils/request/index";
import type {
  IPasswordReset,
  IResponseIUser,
  IResponseIUserArray,
  IResponseVoid,
  IUser,
  OmitIUserUsernameOrPassword,
} from "./data-contracts";

/**
 * No description
 *
 * @tags User
 * @name adminUserList
 * @summary Get all users
 * @request GET:/user/list
 */
export const adminUserList = (
  query: {
    /** Status */
    status?: 0 | 1;
    /** Deleted */
    deleted?: 0 | 1 | 100;
    /** Create by */
    createBy?: string;
    /**
     * Create time
     * @format date-time
     */
    createTime?: string;
    /** Update by */
    updateBy?: string;
    /**
     * Update time
     * @format date-time
     */
    updateTime?: string;
    /**
     * User ID
     * @format double
     */
    userId: number;
    /** Username */
    username: string;
    /** Nickname */
    nickname: string;
    /** Email */
    email: string;
    /** Phone */
    phone: string;
    /** Sex */
    sex: 0 | 1;
    /** Avatar */
    avatar: string;
    /** Password */
    password: string;
  },
  params: RequestParams = {},
) =>
  request<IResponseIUserArray>({
    path: `/user/list`,
    method: "GET",
    query: query,
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserListSkipErrorHandler = (
  query: {
    /** Status */
    status?: 0 | 1;
    /** Deleted */
    deleted?: 0 | 1 | 100;
    /** Create by */
    createBy?: string;
    /**
     * Create time
     * @format date-time
     */
    createTime?: string;
    /** Update by */
    updateBy?: string;
    /**
     * Update time
     * @format date-time
     */
    updateTime?: string;
    /**
     * User ID
     * @format double
     */
    userId: number;
    /** Username */
    username: string;
    /** Nickname */
    nickname: string;
    /** Email */
    email: string;
    /** Phone */
    phone: string;
    /** Sex */
    sex: 0 | 1;
    /** Avatar */
    avatar: string;
    /** Password */
    password: string;
  },
  params: RequestParams = {},
) =>
  request<IResponseIUserArray>({
    path: `/user/list`,
    method: "GET",
    query: query,
    format: "json",
    skipErrorHandler: true,
    ...params,
  });

/**
 * No description
 *
 * @tags User
 * @name adminUserCurr
 * @summary Get current user
 * @request GET:/user
 */
export const adminUserCurr = (params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user`,
    method: "GET",
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserCurrSkipErrorHandler = (params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user`,
    method: "GET",
    format: "json",
    skipErrorHandler: true,
    ...params,
  });

/**
 * No description
 *
 * @tags User
 * @name adminUserCreate
 * @summary Create user
 * @request POST:/user
 */
export const adminUserCreate = (data: IUser, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user`,
    method: "POST",
    body: data,
    type: ContentType.Json,
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserCreateSkipErrorHandler = (data: IUser, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user`,
    method: "POST",
    body: data,
    type: ContentType.Json,
    format: "json",
    skipErrorHandler: true,
    ...params,
  });

/**
 * No description
 *
 * @tags User
 * @name adminUserGet
 * @summary Get user by id
 * @request GET:/user/{id}
 */
export const adminUserGet = (id: number, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user/${id}`,
    method: "GET",
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserGetSkipErrorHandler = (id: number, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user/${id}`,
    method: "GET",
    format: "json",
    skipErrorHandler: true,
    ...params,
  });

/**
 * No description
 *
 * @tags User
 * @name adminUserEdit
 * @summary Update user
 * @request PUT:/user/{id}
 */
export const adminUserEdit = (id: number, data: OmitIUserUsernameOrPassword, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user/${id}`,
    method: "PUT",
    body: data,
    type: ContentType.Json,
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserEditSkipErrorHandler = (
  id: number,
  data: OmitIUserUsernameOrPassword,
  params: RequestParams = {},
) =>
  request<IResponseIUser>({
    path: `/user/${id}`,
    method: "PUT",
    body: data,
    type: ContentType.Json,
    format: "json",
    skipErrorHandler: true,
    ...params,
  });

/**
 * No description
 *
 * @tags User
 * @name adminUserDelete
 * @summary Delete user
 * @request DELETE:/user/{id}
 */
export const adminUserDelete = (id: number, params: RequestParams = {}) =>
  request<IResponseVoid>({
    path: `/user/${id}`,
    method: "DELETE",
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserDeleteSkipErrorHandler = (id: number, params: RequestParams = {}) =>
  request<IResponseVoid>({
    path: `/user/${id}`,
    method: "DELETE",
    format: "json",
    skipErrorHandler: true,
    ...params,
  });

/**
 * No description
 *
 * @tags User
 * @name adminUserResetPassword
 * @summary Reset password
 * @request PUT:/user/{id}/password
 */
export const adminUserResetPassword = (id: number, data: IPasswordReset, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user/${id}/password`,
    method: "PUT",
    body: data,
    type: ContentType.Json,
    format: "json",
    skipErrorHandler: false,
    ...params,
  });
export const adminUserResetPasswordSkipErrorHandler = (id: number, data: IPasswordReset, params: RequestParams = {}) =>
  request<IResponseIUser>({
    path: `/user/${id}/password`,
    method: "PUT",
    body: data,
    type: ContentType.Json,
    format: "json",
    skipErrorHandler: true,
    ...params,
  });
