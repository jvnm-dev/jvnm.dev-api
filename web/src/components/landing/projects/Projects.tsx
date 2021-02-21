import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { fetchGet } from '../../../helpers/fetch'
import { Project } from '../'
import { Loader } from '../../common'
import {IProject, IProjectReducer, setProjects} from '../../../redux/slices/projects'

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
    const projects = useSelector(({ projects }: IProjectReducer) => projects)

    const getProjects = useCallback(async () => {
        const bitskyTeamResults: IProject[] | string = await fetchGet('https://api.github.com/orgs/bitsky-team/repos')
        const jvmResults: IProject[] | string = await fetchGet('https://api.github.com/users/jvnm-dev/repos')

        const projects = [...bitskyTeamResults, ...jvmResults].filter(p => {
            p = p as IProject
            return !p.fork && p?.license?.spdx_id
        })

        const isError = projects.filter(p => typeof p !== 'string').length === 0 // handle max rate error

        if (!isError) {
            dispatch(setProjects(projects))
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
        getProjects().catch(e => console.error(e))
    }, [getProjects])

    if (projects.length === 0) {
        return <Loader />
    }

    return (
        <ProjectsContainer>
            {projects.map(p => {
                return <Project key={p.id} data={{
                    name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
                    description: p.description,
                    language: p.language,
                    license: p?.license,
                    url: p.svn_url,
                }} />
            })}
        </ProjectsContainer>
    )
}