import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
