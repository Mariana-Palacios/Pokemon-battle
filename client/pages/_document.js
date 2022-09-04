import Document, { Html, Head, Main, NextScript } from 'next/document'
// import Head from 'next/head';
// import icon from './static/pokeball.ico'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>pokemonBattle</title>
          <link rel="shortcut icon" href='./static/pokeball.ico'></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// export default MyDocument;