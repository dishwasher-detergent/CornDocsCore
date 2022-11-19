var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/loader.ts
import slash from "slash";
import path from "path";
function loader(context, source) {
  return __async(this, null, function* () {
    const { corndocsConfig } = context.getOptions();
    console.log(corndocsConfig);
    const configImport = corndocsConfig ? `import __corndocs__ from '${slash(path.resolve(corndocsConfig))}'` : "";
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
  });
}
function syncLoader(source, callback) {
  loader(this, source).then((result) => callback(null, result)).catch((err) => callback(err));
}
export {
  syncLoader as default
};
