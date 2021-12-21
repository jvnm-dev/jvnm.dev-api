import { Controller, Get, Res } from '@nestjs/common'

@Controller()
export class AppController {
    constructor() {}

    @Get('/')
    async specialRewardForCuriousGuys(@Res() res): Promise<void> {
        res.send(`
            <!DOCTYPE html>
            <html>
              <head>
               <title>Wow... congrats</title>
               <style>
                body {
                  background-color: pink;
                  color: lightseagreen;
                  text-align: center;
                  font-weight: lighter;
                  font-family: sans-serif;
                }
                
                a {
                  font-size: 30px;
                  color: khaki;
                }
               </style>
              </head>
              <body>
                <h1>Congrats!</h1>
                <h2>You found my super secret place...</h2>
                
                <p>
                  Here is your <a href="https://www.youtube.com/watch?v=iik25wqIuFo">reward</a>.
                </p>
                
                <br />
                <br />
                <br />
                <p>With love,</p>
                <p>Jason Van Malder</p>
              </body>
            </html>
        `)
    }
}
