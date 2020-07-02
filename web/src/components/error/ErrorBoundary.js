import React, { Component } from 'react'

import errorImage from '../../assets/img/error.svg'
import {
  Container,
  Section,
  Title,
  Text,
} from '../common'
import { ErrorImage, ErrorDetailsSummary } from './'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
      isDebug: false,
      isMobile: window.innerWidth < 768,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      isDebug: window.location.search.indexOf('debug') !== -1,
    })
  }

  refresh(e) {
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
              <ErrorImage src={errorImage} alt="Error" />
              <Title>Oops!</Title>
              <Text margin centered>
                Something went wrong. {this.state.isMobile && <br />}Try to <a href='/' onClick={this.refresh}>refresh the page</a>.<br/>
                If the problem persists, {this.state.isMobile && <br />}<a href='mailto:jasonvanmalder@gmail.com'>please contact me</a>.
              </Text>
              {this.state.isDebug && (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  <ErrorDetailsSummary><Text>Details</Text></ErrorDetailsSummary>
                  <pre>
                    {this.state.error && this.state.error.toString()}
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
