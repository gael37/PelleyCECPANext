import React from 'react'


interface Props {
  params: { id: number; certificateId: string }
}



const CertificatePage = ({ params: { id, certificateId } }: Props) => {
  return (
    <div>CertificatePage {id}-{certificateId}</div>
  )
}

export default CertificatePage