import Koa from 'koa'

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    require('../webpack.config').default(app);
}


app.use(async ctx => {
    ctx.body = `<html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
        </head>
        <body>
            <div id="root"></div>
            <script type="application/javascript" src="/assets/bundle.js"></script>
        </body>
    </html>`;
});

const PORT = process.env.PORT || 3000;
app.listen(3000, ()=> {
    console.log('Server listening on: ' + PORT);
});

export default app;