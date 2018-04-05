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
import { FilterQueryOption } from './filterQueryOption';
import { InlineCountQueryOption } from './inlineCountQueryOption';
import { ODataQueryContext } from './oDataQueryContext';
import { ODataQueryValidator } from './oDataQueryValidator';
import { ODataRawQueryOptions } from './oDataRawQueryOptions';
import { OrderByQueryOption } from './orderByQueryOption';
import { SelectExpandQueryOption } from './selectExpandQueryOption';
import { SkipQueryOption } from './skipQueryOption';
import { TopQueryOption } from './topQueryOption';


export interface ODataQueryOptionsLocation {
    IfMatch?: any;
    IfNoneMatch?: any;
    Context?: ODataQueryContext;
    Request?: any;
    RawValues?: ODataRawQueryOptions;
    SelectExpand?: SelectExpandQueryOption;
    Filter?: FilterQueryOption;
    OrderBy?: OrderByQueryOption;
    Skip?: SkipQueryOption;
    Top?: TopQueryOption;
    InlineCount?: InlineCountQueryOption;
    Validator?: ODataQueryValidator;
}
