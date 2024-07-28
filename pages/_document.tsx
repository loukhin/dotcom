import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script defer src="https://umami.loukhin.com/script.js" data-website-id="0e67edb6-f9c1-46d6-81c5-68ad3b82d872"></script>
      </Html>
    )
  }
}

export default MyDocument
