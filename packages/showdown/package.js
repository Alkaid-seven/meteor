Package.describe({
  summary: "Moved to the 'markdown' package",
  version: '1.0.4-winr.2'
});

Package.onUse(function (api) {
  api.imply("markdown");
});
