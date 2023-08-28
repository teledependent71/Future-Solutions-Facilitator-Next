import React from 'react'
import Head from 'next/head'

import PropTypes from 'prop-types'

import booksPageInitialPathsF4fe8Resource from '../../resources/books-page-initial-paths-f4fe8'
import booksPageInitialProps8aa75Resource from '../../resources/books-page-initial-props-8aa75'

const Books11 = (props) => {
  return (
    <>
      <div className="books11-container">
        <Head>
          <title>Books1 - Future Solutions Facilitator</title>
          <meta
            property="og:title"
            content="Books1 - Future Solutions Facilitator"
          />
        </Head>
        <></>
      </div>
      <style jsx>
        {`
          .books11-container {
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

Books11.defaultProps = {
  booksEntity: [],
}

Books11.propTypes = {
  booksEntity: PropTypes.array,
}

export default Books11

export async function getStaticPaths() {
  const response = await booksPageInitialPathsF4fe8Resource({})
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
  const response = await booksPageInitialProps8aa75Resource({
    ...context?.params,
  })
  return {
    props: {
      booksEntity: response?.data?.[0],
      ...response?.meta,
    },
    revalidate: 60,
  }
}
