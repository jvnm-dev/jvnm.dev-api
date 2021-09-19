import { Config } from './config'

export interface IEmailTemplateCoordinates {
    email: string
    name?: string
}

export interface IEmailTemplate {
    customID: string
    from: IEmailTemplateCoordinates
    subject: string
    HTMLPart: string
}

const templates: IEmailTemplate[] = [
    {
        customID: 'AuthenticationTemplate',
        from: {
            email: 'jasonvanmalder@gmail.com',
            name: 'jvnm-dev',
        },
        subject: 'Your authentication token',
        HTMLPart: `<h3>Hey!</h3><br />Here is your authentication token: <a href="${Config.getInstance().get(
            'URL'
        )}/auth/{{email}}/{{otp}}/{{source}}">click here</a>.`,
    },
]

export const getTemplate = (name: string) => {
    return templates.find(({ customID }) => customID === name)
}
