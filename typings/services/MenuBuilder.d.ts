import { OpenAPIOperation, OpenAPIParameter, OpenAPISpec, OpenAPITag, Referenced, OpenAPIServer } from '../types';
import { GroupModel, OperationModel } from './models';
import { OpenAPIParser } from './OpenAPIParser';
import { RedocNormalizedOptions } from './RedocNormalizedOptions';
export declare type TagInfo = OpenAPITag & {
    operations: ExtendedOpenAPIOperation[];
    used?: boolean;
};
export declare type ExtendedOpenAPIOperation = {
    pointer: string;
    pathName: string;
    httpVerb: string;
    pathParameters: Array<Referenced<OpenAPIParameter>>;
    pathServers: Array<OpenAPIServer> | undefined;
} & OpenAPIOperation;
export declare type TagsInfoMap = Dict<TagInfo>;
export interface TagGroup {
    name: string;
    tags: string[];
}
export declare const GROUP_DEPTH = 0;
export declare type ContentItemModel = GroupModel | OperationModel;
export declare class MenuBuilder {
    /**
     * Builds page content structure based on tags
     */
    static buildStructure(parser: OpenAPIParser, options: RedocNormalizedOptions): ContentItemModel[];
    /**
     * extracts items from markdown description
     * @param description - markdown source
     */
    static addMarkdownItems(description: string, parent: GroupModel | undefined, initialDepth: number, options: RedocNormalizedOptions): ContentItemModel[];
    /**
     * Returns array of OperationsGroup items for the tag groups (x-tagGroups vendor extension)
     * @param tags value of `x-tagGroups` vendor extension
     */
    static getTagGroupsItems(parser: OpenAPIParser, parent: GroupModel | undefined, groups: TagGroup[], tags: TagsInfoMap, options: RedocNormalizedOptions): GroupModel[];
    /**
     * Returns array of OperationsGroup items for the tags of the group or for all tags
     * @param tagsMap tags info returned from `getTagsWithOperations`
     * @param parent parent item
     * @param group group which this tag belongs to. if not provided gets all tags
     */
    static getTagsItems(parser: OpenAPIParser, tagsMap: TagsInfoMap, parent: GroupModel | undefined, group: TagGroup | undefined, options: RedocNormalizedOptions): ContentItemModel[];
    /**
     * Returns array of Operation items for the tag
     * @param parent parent OperationsGroup
     * @param tag tag info returned from `getTagsWithOperations`
     * @param depth items depth
     */
    static getOperationsItems(parser: OpenAPIParser, parent: GroupModel | undefined, tag: TagInfo, depth: number, options: RedocNormalizedOptions): OperationModel[];
    /**
     * collects tags and maps each tag to list of operations belonging to this tag
     */
    static getTagsWithOperations(spec: OpenAPISpec): TagsInfoMap;
}
