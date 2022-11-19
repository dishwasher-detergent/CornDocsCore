import slash from "slash";
import path from "node:path";
import { LoaderContext } from "webpack";
import { LoaderOptions } from "./types";

async function loader(
  context: LoaderContext<LoaderOptions>,
  source: string
): Promise<string> {
  const { corndocsConfig } = context.getOptions();

  console.log(corndocsConfig);

  const configImport = corndocsConfig
    ? `import __corndocs__ from '${slash(path.resolve(corndocsConfig))}'`
    : "";

  const new_content = `
      ${configImport}

     function MyApp({ Component, pageProps }: AppProps) {
       return (
          <div class="test">
            <Component {...pageProps} />
          </div>
       );
     }

     export default MyApp;`;

  return `${new_content}`;
}

export default function syncLoader(
  this: LoaderContext<LoaderOptions>,
  source: string,
  callback: (err?: null | Error, content?: string | Buffer) => void
): void {
  loader(this, source)
    .then((result) => callback(null, result))
    .catch((err) => callback(err));
}
