/**
 * Created by pengchaoyang on 2018/3/14
 */
const Koa = require('koa')
const React = require('react')
const Demo = require('./demo')
const Html = require('./components/Html')
const Box = require('./components/Box')
const {renderToString} = require('react-dom/server')
const app = new Koa()
const initialData = {
    name: 'World'
}
app.use(async (ctx) => {
    // ctx.res.write('<html><body>')
    // ctx.res.write(renderToString(<demo/>))
    // // await pipe(stream, ctx.res, { end: false })
    // ctx.res.write('</body></html>')
    // ctx.res.end()
    let str = renderToString(
        <Html initialData={JSON.stringify(initialData)}>
        <Box {...initialData} name="World"/>
        </Html>
    )
    console.log(ctx)
    ctx.body = str

})

app.listen(3001)
console.log('[demo] start-quick is starting at port 3001')
