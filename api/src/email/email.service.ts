import mailjet from 'node-mailjet'

import { MAILJET } from '../config'
import {
  getTemplate,
  IEmailTemplate,
  IEmailTemplateCoordinates,
} from '../emailTemplates'

type EmailTemplateVariable = { [key: string]: string }

export class EmailService {
  private mailjetUtility

  constructor() {
    this.mailjetUtility = mailjet.connect(...(MAILJET ?? []))
  }

  async send(
    templateName: string,
    to: IEmailTemplateCoordinates,
    variables?: EmailTemplateVariable
  ) {
    const template: IEmailTemplate = { ...getTemplate(templateName) }

    const bodyVariables = template.HTMLPart.match(/{{[a-zA-Z]+?}}/g)

    ;(bodyVariables ?? []).forEach((bodyVariable) => {
      const variableName = bodyVariable
        .replace(/{/gi, ' ')
        .replace(/}/gi, ' ')
        .replace(/\s/gi, '')

      const value = variables[variableName]

      if (value) {
        template.HTMLPart = template.HTMLPart.replace(
          new RegExp(bodyVariable, 'gi'),
          value
        )
      }
    })

    const completeTemplate = {
      Messages: [
        {
          From: {
            Email: template.from.email,
            Name: template.from.name || 'User',
          },
          To: [
            {
              Email: to.email,
              Name: to.name || 'User',
            },
          ],
          Subject: template.subject,
          HTMLPart: template.HTMLPart,
          CustomID: template.customID,
        },
      ],
    }

    await this.mailjetUtility
      .post('send', { version: 'v3.1' })
      .request(completeTemplate)
  }
}
