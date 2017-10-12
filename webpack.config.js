import webpack              from 'webpack';
import path                 from 'path';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

export default function(app) {
    const config = {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist'
        },
        entry: [
            'babel-polyfill',
            'webpack-hot-middleware/client',
            './src/index.js'
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/assets/"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [
                        'react-hot-loader/webpack',
                        'babel-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif|otf|ttf)$/,
                    use: [
                        {
                            loader: 'file-loader'
                        }

                    ]
                }
            ]
        },
        plugins: [
            // OccurenceOrderPlugin is needed for webpack 1.x only
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler));
}