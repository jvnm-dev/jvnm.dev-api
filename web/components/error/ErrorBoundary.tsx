import React, { Component, ErrorInfo, MouseEvent } from 'react'
import { Container, Section, Title, Text } from '../common'
import { ErrorImage, ErrorDetailsSummary } from './'
import Link from 'next/link'

interface IErrorBoundaryState {
    error: Error | null
    errorInfo: ErrorInfo | null
    isDebug: boolean
    isMobile: boolean
}

export class ErrorBoundary extends Component<any, IErrorBoundaryState> {
    constructor(props: any) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null,
            isDebug: false,
            isMobile: window.innerWidth < 768,
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
            isDebug: window.location.href.indexOf('debug') !== -1,
        })
    }

    componentDidMount() {
        if (this.state.errorInfo) {
            localStorage.clear()
        }
    }

    refresh(e: MouseEvent) {
        e.preventDefault()
        window.location.reload()
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <Container>
                    <Section
                        column
                        horizontallyCentered
                        verticallyCentered
                        mobilePadding
                    >
                        <ErrorImage src='/error.svg' alt="Error" />
                        <Title>Oops!</Title>
                        <Text margin centered>
                            Something went wrong.{' '}
                            {this.state.isMobile && <br />}Try to{' '}
                            <a onClick={this.refresh}>
                                refresh the page
                            </a>
                            .<br />
                            If the problem persists,{' '}
                            {this.state.isMobile && <br />}
                            <a href="mailto:jasonvanmalder@gmail.com">
                                please contact me
                            </a>
                            .
                        </Text>
                        {this.state.isDebug && (
                            <details style={{ whiteSpace: 'pre-wrap' }}>
                                <ErrorDetailsSummary>
                                    <Text>Details</Text>
                                </ErrorDetailsSummary>
                                <pre>
                                    {this.state.error &&
                                        this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                    </Section>
                </Container>
            )
        }
        return this.props.children
    }
}
