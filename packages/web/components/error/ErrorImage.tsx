import styled from 'styled-components'
import Image from 'next/image'

interface IErrorImageProps {
    src: string
    alt: string
}

export const ErrorImage = (props: IErrorImageProps) => (
    <Image {...props} layout="fill" priority={true} alt="Error" />
)

export const ErrorImageContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;

    @media only screen and (min-width: 1024px) {
        width: 500px;
        height: 500px;
    }
    @media only screen and (min-width: 1440px) {
        width: 750px;
        width: 750px;
    }
`
