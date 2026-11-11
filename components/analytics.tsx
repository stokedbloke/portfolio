import Script from "next/script"

// Google tag, as issued for container GTM-M9L7S3LS.
const GTM_ID = "GTM-M9L7S3LS"

export function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
    </>
  )
}
