import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default ({ user, children }) => (
  <div className='container'>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width' />
      <link rel='icon' sizes='192x192' href='/static/android-icon-192x192.png' />
      <link rel='apple-touch-icon' href='/static/apple-icon-152x152.png' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
    </Head>
    <Header user={user} />
    <div className='main'>
      {children}
    </div>
    <Footer />
    <style jsx global>
      {`
        body {
          background: white;
          color: black;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          text-align: center;
          margin: 0;
          padding: 0;
          height: 100%;
        }
        ::selection {
          background: black;
          color: white;
        }
        a {
          text-decoration: none;
        }
        h1 {
          font-weight: 400;
          font-size: 32px;
        }
        h2 {
          color: #909090;
          font-weight: normal;
        }
        .container {
          display: grid;
          grid-template-areas:
            "header header header"
            ". content ."
            "footer footer footer";
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
        }
        @media screen and (max-width: 800px) {
          .container {
            grid-template-columns: 3% 1fr 3%;
          }
        }
        .main {
          grid-area: content;
          width: 100%;
          height: 100%;
        }
        .main a {
          color: #bd10e0;
        }
      `}
    </style>
  </div>
)