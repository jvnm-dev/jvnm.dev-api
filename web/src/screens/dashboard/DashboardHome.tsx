import React, { Suspense } from 'react'
import styled from 'styled-components'

import { Navbar } from '../../components/common/navbar'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { IThemeContainer } from '../../constants/themes'
import adminDashboardImage from '../../assets/img/dashboard.svg'
import { Container, Loader, Section } from '../../components/common'
import {
    HashRouter,
    Route,
    Switch,
    useHistory,
    useRouteMatch,
} from 'react-router-dom'
import NotFound from '../common/NotFound'
import { DashboardAvailability } from './DashboardAvailability'
import { DashboardExperiences } from './DashboardExperiences'
import { DashboardTechnologies } from './DashboardTechnologies'
import { DashboardUsers } from './DashboardUsers'
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

const AdminDashboardImage = styled.img`
    width: 75%;
`

const AdminDashboardSection = styled(Section)`
    flex: 1;
    padding: 0;
    height: calc(100vh - 100px);
`

export const DashboardHome = () => {
    const { path, url } = useRouteMatch()
    const history = useHistory()

    return (
        <>
            <AdminDrawer>
                <AdminDrawerList>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemText primary="Landing" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/dashboard')}>
                        <ListItemText primary="Dashboard" />
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
                                history.push(`${url}/${text.toLowerCase()}`)
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
                        <AdminContent>
                            <Suspense fallback={<Loader full />}>
                                <HashRouter>
                                    <Switch>
                                        <Route
                                            path={`${path}/availability`}
                                            component={DashboardAvailability}
                                        />
                                        <Route
                                            path={`${path}/experiences`}
                                            component={DashboardExperiences}
                                        />
                                        <Route
                                            path={`${path}/technologies`}
                                            component={DashboardTechnologies}
                                        />
                                        <Route
                                            path={`${path}/users`}
                                            component={DashboardUsers}
                                        />
                                        <Route exact path={path}>
                                            <AdminDashboardImage
                                                src={adminDashboardImage}
                                                alt="dashboard"
                                            />
                                        </Route>
                                    </Switch>
                                </HashRouter>
                            </Suspense>
                        </AdminContent>
                    </AdminDashboardSection>
                    <Footer />
                </Container>
            </AdminContentSide>
        </>
    )
}

export default DashboardHome
