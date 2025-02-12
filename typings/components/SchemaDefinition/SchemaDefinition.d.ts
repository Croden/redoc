import * as React from 'react';
import { OpenAPIParser, RedocNormalizedOptions } from '../../services';
export interface ObjectDescriptionProps {
    schemaRef: string;
    exampleRef?: string;
    showReadOnly?: boolean;
    showWriteOnly?: boolean;
    parser: OpenAPIParser;
    options: RedocNormalizedOptions;
}
export declare class SchemaDefinition extends React.PureComponent<ObjectDescriptionProps> {
    private static getMediaType;
    private _mediaModel;
    private get mediaModel();
    render(): JSX.Element;
    private renderDropdown;
}
