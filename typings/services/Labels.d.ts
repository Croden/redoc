export interface LabelsConfig {
    enum: string;
    enumSingleValue: string;
    enumArray: string;
    default: string;
    deprecated: string;
    example: string;
    nullable: string;
    recursive: string;
    arrayOf: string;
}
export declare type LabelsConfigRaw = Partial<LabelsConfig>;
export declare function setRedocLabels(_labels?: LabelsConfigRaw): void;
export declare function l(key: keyof LabelsConfig, idx?: number): string;
