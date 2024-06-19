/*** IMPORT */
const request = require('supertest')
const app = require('../app.js')

describe('MAIN ROUTER ', () => {

    describe('TRY GET ', () => {
        it('Should return 200', async () => {
            const response = await request(app).get('/')
            expect(response.status).toBe(200)
        })

        it('Sould return 501', async () => {
            const response = await request(app).get('/fhbusdihfguidshgvfuyedbguv')
            expect(response.status).toBe(501)
        })
    })

    describe('TRY PUT', () => {
        it('Sould return 501', async () => {
            const response = await request(app).put('/')
            expect(response.status).toBe(501)
        })

        it('Sould return 501', async () => {
            const response = await request(app).put('/hghghjhjkhjkk')
            expect(response.status).toBe(501)
        })
    })
})