
const getSerie = (fs) => (req, res) => {
    try {
        const { name, temp, epis } = req.params
        const stream = fs.createReadStream(`./src/database/series/${name}/${temp}/${epis}.mp4`)

        res.set('content-type', 'video/mp4')
        res.set('accept-ranges', 'bytes')
        res.set('Transfer-Encoding', 'chunked');

        stream.on('data', (chunk) => {

            res.write(chunk)
        })
        stream.on('end', () => {

            res.end()
        })

    } catch (error) {

    }
}


module.exports = {
    getSerie
}