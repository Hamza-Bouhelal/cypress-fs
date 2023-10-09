import fs from "fs";

export type CreateDirOptions =
    | fs.Mode
    | (fs.MakeDirectoryOptions & {
        recursive?: false | undefined;
    });

export type DeleteDirOptions = fs.RmDirOptions;

export type ReadFileOptions = {
    encoding?: null | undefined;
    flag?: string | undefined;
};

export type ReadDirOptions =
    | BufferEncoding
    | {
        encoding: BufferEncoding | null;
        withFileTypes?: false | undefined;
        recursive?: boolean | undefined;
    };
