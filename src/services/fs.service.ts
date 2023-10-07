import fs from 'fs';
import { CreateDirOptions, DeleteDirOptions, ReadFileOptions } from '../types';

export const fileSystemMethods = {
    fsFileExists: (path: string) => {
        try {
            return fs.existsSync(path);
        } catch (err) {
            console.error(err);
        }
        return null;
    },
    fsReadFile({ path, options }: { path: string, options?: ReadFileOptions }) {
        try {
            return fs.readFileSync(path, options);
        } catch (err) {
            console.error(err);
        }
        return null;
    },
    fsWriteFile({ path, content, options }: { path: string, content: string, options?: fs.WriteFileOptions }) {
        try {
            fs.writeFileSync(path, content, options);
        }
        catch (err) {
            console.error(err);
        }
        return null;
    },

    fsDeleteFile: (path: string) => {
        try {
            fs.unlinkSync(path);
        }
        catch (err) {
            console.error(err);
        }
        return null;
    },
    fsCreateDirectory: ({ path, fileOptions }: { path: string, fileOptions?: CreateDirOptions }) => {
        try {
            fs.mkdirSync(path, fileOptions);
        }
        catch (err) {
            console.error(err);
        }
        return null;
    },
    fsDeleteDirectory: ({ path, fileOptions }: { path: string, fileOptions?: DeleteDirOptions }) => {
        try {
            fs.rmdirSync(path, fileOptions);
        }
        catch (err) {
            console.error(err);
        }
        return null;
    },
    fsCopyFile: ({ path, newPath, mode }: { path: string, newPath: string, mode?: number }) => {
        try {
            fs.copyFileSync(path, newPath, mode);
        } catch (err) {
            console.error(err);
        }
        return null;
    },
    fsChmod({ path, mode }: { path: string, mode: number }) {
        try {
            fs.chmodSync(path, mode);
        } catch {
            console.error(`File ${path} not found`);
        }
        return null;
    },
    fsAppendFile({ path, content, options }: { path: string, content: string, options?: fs.WriteFileOptions }) {
        try {
            fs.appendFileSync(path, content, options);
        } catch (err) {
            console.error(err);
        }
        return null;
    },
    fsRename({ path, newPath }: { path: string, newPath: string }) {
        try {
            fs.renameSync(path, newPath);
        } catch (err) {
            console.error(err);
        }
        return null;
    },
    fsDirExists(path: string) {
        try {
            return fs.existsSync(path);
        } catch (err) {
            console.error(err);
        }
        return null;
    }
}