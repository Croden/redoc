import { IMenuItem } from '../MenuStore';
import { GroupModel } from './Group.model';
import { SecurityRequirementModel } from './SecurityRequirement';
import { OpenAPIExternalDocumentation, OpenAPIServer, OpenAPIXCodeSample } from '../../types';
import { ContentItemModel, ExtendedOpenAPIOperation } from '../MenuBuilder';
import { OpenAPIParser } from '../OpenAPIParser';
import { RedocNormalizedOptions } from '../RedocNormalizedOptions';
import { CallbackModel } from './Callback';
import { FieldModel } from './Field';
import { MediaContentModel } from './MediaContent';
import { RequestBodyModel } from './RequestBody';
import { ResponseModel } from './Response';
export interface XPayloadSample {
    lang: 'payload';
    label: string;
    requestBodyContent: MediaContentModel;
    source: string;
}
export declare function isPayloadSample(sample: XPayloadSample | OpenAPIXCodeSample): sample is XPayloadSample;
/**
 * Operation model ready to be used by components
 */
export declare class OperationModel implements IMenuItem {
    private parser;
    private operationSpec;
    private options;
    id: string;
    absoluteIdx?: number;
    name: string;
    description?: string;
    type: "operation";
    parent?: GroupModel;
    externalDocs?: OpenAPIExternalDocumentation;
    items: ContentItemModel[];
    depth: number;
    ready?: boolean;
    active: boolean;
    expanded: boolean;
    pointer: string;
    operationId?: string;
    httpVerb: string;
    deprecated: boolean;
    path: string;
    servers: OpenAPIServer[];
    security: SecurityRequirementModel[];
    extensions: Dict<any>;
    isCallback: boolean;
    constructor(parser: OpenAPIParser, operationSpec: ExtendedOpenAPIOperation, parent: GroupModel | undefined, options: RedocNormalizedOptions, isCallback?: boolean);
    /**
     * set operation as active (used by side menu)
     */
    activate(): void;
    /**
     * set operation as inactive (used by side menu)
     */
    deactivate(): void;
    /**
     * Toggle expansion in middle panel (for callbacks, which are operations)
     */
    toggle(): void;
    expand(): void;
    collapse(): void;
    get requestBody(): RequestBodyModel | undefined;
    get codeSamples(): (OpenAPIXCodeSample | XPayloadSample)[];
    get parameters(): FieldModel[];
    get responses(): ResponseModel[];
    get callbacks(): CallbackModel[];
}
