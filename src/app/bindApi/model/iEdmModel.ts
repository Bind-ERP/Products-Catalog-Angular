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
import { IEdmDirectValueAnnotationsManager } from './iEdmDirectValueAnnotationsManager';
import { IEdmSchemaElement } from './iEdmSchemaElement';
import { IEdmVocabularyAnnotation } from './iEdmVocabularyAnnotation';


export interface IEdmModel {
    SchemaElements?: Array<IEdmSchemaElement>;
    VocabularyAnnotations?: Array<IEdmVocabularyAnnotation>;
    ReferencedModels?: Array<IEdmModel>;
    DirectValueAnnotationsManager?: IEdmDirectValueAnnotationsManager;
}
