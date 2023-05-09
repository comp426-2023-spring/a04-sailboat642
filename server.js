

const { parse } = require('path')

import('node-rpsls').then((module) => {
    const { rps, rpsls } = module
    const minimist = require('minimist')
    const express = require('express')
    const querystring = require('querystring')

    function parseBody(req, res, next) {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            if (data) {
                try {
                    // Try to parse as JSON
                    req.body = JSON.parse(data);
                    next();
                } catch (e) {
                    // If JSON parsing fails, parse as URL-encoded
                    req.body = require('querystring').parse(data);
                    next();
                }
            } else {
                req.body = {};
                next();
            }
        });
    }


    const rpsAcceptedShots = [
        'rock',
        'paper',
        'scissors'
    ]

    const rpslsAcceptedShots = [
        'rock',
        'paper',
        'scissors',
        'lizard',
        'spock'
    ]

    const rpsRouter = express.Router({ mergeParams: true })
        .get('/', (req, res) => {
            res.status(200).send(rps())
        })
        .all('/play/', (req, res) => {
            console.log(req.body)
            console.log(req.headers)
            let { shot } = req.body || {}
            shot = shot?.toLowerCase?.() || ''
            if (!shot) shot = rpsAcceptedShots[Math.floor(Math.random() * rpsAcceptedShots.length)]
            res.status(200).send(rps(shot))
        })
        .all("/play/:shot", (req, res) => {
            let { shot } = req.params
            shot = shot?.toLowerCase?.() || ''
            res.status(200).send(rps(shot))
        })
    const rpslsRouter = express.Router({ mergeParams: true })
        .get('/', (req, res) => {
            res.status(200).send(rps())
        })
        .all('/play/', (req, res) => {
            let { shot } = req.body || {}
            shot = shot?.toLowerCase?.() || ''
            if (!shot) shot = rpslsAcceptedShots[Math.floor(Math.random() * rpslsAcceptedShots.length)]
            res.status(200).send(rpsls(shot))
        })
        .all("/play/:shot", (req, res) => {
            let { shot } = req.params
            shot = shot?.toLowerCase?.() || ''
            res.status(200).send(rpsls(shot))
        })

    const appRouter = express.Router({ mergeParams: true })
        .get("/", (req, res) => {
            res.status(200).send('200 OK')
        })
        .use('/rps', rpsRouter)
        .use('/rpsls', rpslsRouter)

    const args = minimist(process.argv.slice(2));
    const PORT = args.port || 5001;

    const app = express()

    app.use((req, res, next) => {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            if (data) {
                try {
                    req.body = JSON.parse(data);
                    next();
                } catch (e) {
                    req.body = querystring.parse(data);
                    next();
                }
            } else {
                req.body = {};
                console.log("NO BODY")
                next();
            }
        });
    })

    app.use("/app", appRouter)

    app.use((req, res, next) => {
        console.log(req.url)
        res.status(404).send('404 NOT FOUND');
    });

    app.listen(PORT)

})