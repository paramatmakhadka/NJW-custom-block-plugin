export enum BlockMode {
    PREVIEW = 'preview',
    EDIT = 'edit',
}

export interface BlockAttribute {
    mode: BlockMode;
    title: string;
}