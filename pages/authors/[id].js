import React from 'react'
import Head from 'next/head'

import PropTypes from 'prop-types'

import authorsPageInitialPaths4f3ceResource from '../../resources/authors-page-initial-paths-4f3ce'
import authorsPageInitialProps52839Resource from '../../resources/authors-page-initial-props-52839'

const Authors = (props) => {
  return (
    <>
      <div className="authors-container">
        <Head>
          <title>Authors - Future Solutions Facilitator</title>
          <meta
            property="og:title"
            content="Authors - Future Solutions Facilitator"
          />
        </Head>
        <></>
      </div>
      <style jsx>
        {`
          .authors-container {
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

Authors.defaultProps = {
  authorsEntity: [],
}

Authors.propTypes = {
  authorsEntity: PropTypes.array,
}

export default Authors

export async function getStaticPaths() {
  const response = await authorsPageInitialPaths4f3ceResource({})
  return {
    paths: (response?.data || []).map((item) => {
      return {
        params: {
          id: (item?.id).toString(),
        },
      }
    }),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const response = await authorsPageInitialProps52839Resource({
    ...context?.params,
  })
  return {
    props: {
      authorsEntity: response?.data?.[0],
      ...response?.meta,
    },
    revalidate: 60,
  }
}
