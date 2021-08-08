import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

import { Navbar } from '../../components/common/navbar'
import { IThemeContainer } from '../../constants/themes'
import { Container, Section } from '../../components/common'
import { Footer } from '../../components/common/Footer'

const AdminDrawer = styled(Drawer).attrs({
    variant: 'permanent',
})`
    .MuiDrawer-paperAnchorDockedLeft {
        background-color: ${({ theme }: IThemeContainer) =>
            theme.constrastedBackground};
        transition: 0.2s;
    }
`

const AdminDrawerList = styled(List)`
    width: 300px;
    color: ${({ theme }: IThemeContainer) => theme.title.default};
    .MuiTypography-root {
        font-weight: bold !important;
    }
`

const AdminContentSide = styled.div`
    padding-left: 316px;
    padding-right: 16px;
`

const AdminContent = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    flex: 1;
`

const AdminDashboardSection = styled(Section)`
    flex: 1;
    padding: 0;
    height: calc(100vh - 100px);
`

export const DashboardTemplate = ({ children }: any) => {
    const router = useRouter()

    return (
        <>
            <AdminDrawer>
                <AdminDrawerList>
                    <ListItem button onClick={() => router.push('/')}>
                        <ListItemText primary="Back to landing" />
                    </ListItem>
                    {[
                        'Availability',
                        'Experiences',
                        'Technologies',
                        'Users',
                    ].map((text) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() =>
                                router.push(`/dashboard/${text.toLowerCase()}`)
                            }
                        >
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </AdminDrawerList>
            </AdminDrawer>
            <AdminContentSide>
                <Navbar dashboard />
                <Container>
                    <AdminDashboardSection first>
                        <AdminContent>{children}</AdminContent>
                    </AdminDashboardSection>
                    <Footer />
                </Container>
            </AdminContentSide>
        </>
    )
}
