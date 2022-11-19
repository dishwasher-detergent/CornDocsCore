module.exports = function (code) {
  const callback = this.async();
  // Note that `import()` caches, so this should be fast enough.
  import("./dist/loader.mjs").then((mod) =>
    mod.default.call(this, code, callback)
  );
};
