import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import adminDashboardImage from '../../public/dashboard.svg'
import { DashboardTemplate } from '../../components/dashboard/DashboardTemplate'

const AdminDashboardImage = styled(Image)`
    width: 75%;
`

const AdminDashboardImageContainer = styled.div`
    position: relative;
    width: 50vw;
    height: 50vh;
    display: flex;
    align-self: center;
`

export const DashboardIndex = () => {
    return (
        <DashboardTemplate>
            <AdminDashboardImageContainer>
                <AdminDashboardImage
                    src={adminDashboardImage}
                    alt="dashboard"
                    loading="lazy"
                    decoding="async"
                    layout="fill"
                />
            </AdminDashboardImageContainer>
        </DashboardTemplate>
    )
}

export default DashboardIndex
