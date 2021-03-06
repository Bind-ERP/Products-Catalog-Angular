/**
 * Bind ERP API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ODataQueryContext } from './oDataQueryContext';
import { OrderByClause } from './orderByClause';
import { OrderByNode } from './orderByNode';
import { OrderByQueryValidator } from './orderByQueryValidator';


export interface OrderByQueryOption {
    Context?: ODataQueryContext;
    OrderByNodes?: Array<OrderByNode>;
    RawValue?: string;
    Validator?: OrderByQueryValidator;
    OrderByClause?: OrderByClause;
}
