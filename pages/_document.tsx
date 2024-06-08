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
        <script defer src="https://umami.loukhin.com/script.js" data-website-id="17b351f1-0cda-4931-8f69-a89f55b616e9"></script>
      </Html>
    )
  }
}

export default MyDocument
