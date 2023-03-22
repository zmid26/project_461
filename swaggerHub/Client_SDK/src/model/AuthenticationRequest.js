/*
 * ECE 461 - Spring 2023 - Project 2
 * API for ECE 461/Spring 2023/Project 2: A Trustworthy Module Registry
 *
 * OpenAPI spec version: 2.0.0
 * Contact: davisjam@purdue.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {User} from './User';
import {UserAuthenticationInfo} from './UserAuthenticationInfo';

/**
 * The AuthenticationRequest model module.
 * @module model/AuthenticationRequest
 * @version 2.0.0
 */
export class AuthenticationRequest {
  /**
   * Constructs a new <code>AuthenticationRequest</code>.
   * @alias module:model/AuthenticationRequest
   * @class
   * @param user {module:model/User} 
   * @param secret {module:model/UserAuthenticationInfo} 
   */
  constructor(user, secret) {
    this.user = user;
    this.secret = secret;
  }

  /**
   * Constructs a <code>AuthenticationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationRequest} obj Optional instance to populate.
   * @return {module:model/AuthenticationRequest} The populated <code>AuthenticationRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthenticationRequest();
      if (data.hasOwnProperty('User'))
        obj.user = User.constructFromObject(data['User']);
      if (data.hasOwnProperty('Secret'))
        obj.secret = UserAuthenticationInfo.constructFromObject(data['Secret']);
    }
    return obj;
  }
}

/**
 * @member {module:model/User} user
 */
AuthenticationRequest.prototype.user = undefined;

/**
 * @member {module:model/UserAuthenticationInfo} secret
 */
AuthenticationRequest.prototype.secret = undefined;

