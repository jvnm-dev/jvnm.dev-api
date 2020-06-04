import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'

import { fetchGet } from '../../../helpers/fetch'
import { Project } from '../'

export const ProjectsContainer = styled.div`
    display: flex;
    margin-top: 48px;
    width: 100%;
    flex-wrap: wrap;
`

export const Projects = () => {
    const [projects, setProjects] = useState(<Fragment />)

    const getProjects = async () => {
        const bitskyTeamProjects = Object.values(await fetchGet('https://api.github.com/orgs/bitsky-team/repos'))
                                         .filter(p => !p.fork)
        const jvmProjects = Object.values(await fetchGet('https://api.github.com/users/jvm-odoo/repos'))
                                  .filter(p => !p.fork)
        const newProjects = [...bitskyTeamProjects, ...jvmProjects].map(p => {
            console.log(p)
            const data = {
                name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
                description: p.description,
                language: p.language,
                license: p?.license.spdx_id,
                url: p.svn_url,
            }

            return <Project key={p.id} data={data} />
        })
        setProjects(newProjects)

    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <ProjectsContainer>
            {projects}
        </ProjectsContainer>
    )
}
