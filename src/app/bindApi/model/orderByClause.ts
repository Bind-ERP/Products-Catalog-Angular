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
import { IEdmTypeReference } from './iEdmTypeReference';
import { RangeVariable } from './rangeVariable';
import { SingleValueNode } from './singleValueNode';


export interface OrderByClause {
    ThenBy?: OrderByClause;
    Expression?: SingleValueNode;
    Direction?: OrderByClause.DirectionEnum;
    RangeVariable?: RangeVariable;
    ItemType?: IEdmTypeReference;
}
export namespace OrderByClause {
    export type DirectionEnum = 'Ascending' | 'Descending';
    export const DirectionEnum = {
        Ascending: 'Ascending' as DirectionEnum,
        Descending: 'Descending' as DirectionEnum
    }
}
