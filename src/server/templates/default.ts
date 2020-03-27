const defaultTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title>React Parcel Express Typescript</title>
      {styles}
    </head>

    <body>
      <div id="root">{content}</div>
      <script id="root-state">
        window.__PRELOADED_STATE__ = {contentState}
        window.__initialI18nStore__ = {transStore}
        window.__initialLanguage__ = {transLang}
      </script>
      <script type="text/javascript" src="/client/{bundleName}"></script>
    </body>
  </html>
`;

export default defaultTemplate;
