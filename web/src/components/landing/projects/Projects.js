import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { fetchGet } from '../../../helpers/fetch'
import { Project } from '../'
import { setProjects } from '../../../redux/slices/projects'

export const ProjectsContainer = styled.div`
    display: flex;
    margin-top: 48px;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`

export const Projects = () => {
    const dispatch = useDispatch()
    const projects = useSelector(({ projects }) => projects)

    const getProjects = useCallback(async () => {
        const bitskyTeamProjects = Object.values(await fetchGet('https://api.github.com/orgs/bitsky-team/repos'))
                                         .filter(p => !p.fork)
        const jvmProjects = Object.values(await fetchGet('https://api.github.com/users/jvm-odoo/repos'))
                                  .filter(p => !p.fork)
        let loadedProjects = [...bitskyTeamProjects, ...jvmProjects]
        if (loadedProjects.filter(p => typeof p !== 'string').length > 0) { // handle max rate error
            dispatch(setProjects(loadedProjects))
        } else {
            dispatch(setProjects([{
                id: 'errorProject',
                name: 'Error',
                description: 'Impossible to load projects, please try to reload the page.',
                language: 'Error',
                license: 'Error',
                svn_url: window.location.href,
            }]))
        }
    }, [dispatch])

    useEffect(() => {
        getProjects()
    }, [getProjects])

    return (
        <ProjectsContainer>
            {projects.map(p => {
                return <Project key={p.id} data={{
                    name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
                    description: p.description,
                    language: p.language,
                    license: p?.license.spdx_id,
                    url: p.svn_url,
                }} />
            })}
        </ProjectsContainer>
    )
}
