import { useQuery } from '@tanstack/react-query'
import { getRequest } from '../../utils/request'
import { useRouter } from 'next/router'
import React from 'react'

const Request = () => {
  const router = useRouter()
  // console.log(router?.query)

  const { data: request } = useQuery(['todos', router?.query], () =>
    getRequest(Number(router?.query.id)),
  )

  console.log(request)

  return (
    <div style={{ padding: 20 }}>
      <div>
        <h3>{request?.data.id}</h3>
        <p>
          Id product:{' '}
          <span style={{ fontWeight: 'bold' }}>{request?.data.id_product}</span>
        </p>
      </div>
    </div>
  )
}

export default Request
