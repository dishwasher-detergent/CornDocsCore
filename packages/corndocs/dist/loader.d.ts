import { LoaderContext } from 'webpack';

type Config = {
    corndocsConfig?: string;
};
interface LoaderOptions extends Config {
}

declare function syncLoader(this: LoaderContext<LoaderOptions>, source: string, callback: (err?: null | Error, content?: string | Buffer) => void): void;

export { syncLoader as default };
