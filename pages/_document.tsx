// personalizando nextJS
import Document, { Html, Head, Main, NextScript } from 'next/document'
//haciendo mas extendible el document de next
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


