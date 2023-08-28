import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Solutions Facilitator</title>
          <meta
            property="og:title"
            content="test-page - Future Solutions Facilitator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_9tslf) => (
            <>
              <h1>{context_9tslf?.name}</h1>
            </>
          )}
          initialData={props.context9tslfProp}
          persistDataDuringLoading={true}
          key={props?.context9tslfProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const context9tslfProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      context9tslfProp: context9tslfProp?.data?.[0],
    },
  }
}
