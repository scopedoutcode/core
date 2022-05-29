const chai = require('chai')
const chaiSpies = require('chai-spies')
const chaiHttp = require('chai-http')
const server = require("../../index")
const expect = chai.expect
const endpoints = require('../../static/endpoints')
chai.use(chaiHttp)
chai.use(chaiSpies)
const sinon = require('sinon')
const APIAction = require('../../api/actions')

describe ('Search Tradeable Symbols', function(){
    let sandbox
    beforeEach(function() {
        sandbox = sinon.createSandbox();
    })
    afterEach(function(){
        sandbox.restore()
    })
    it('Should fetch', done=>{
        const response = [{
            key: 'value'
        }]
        const getem = sandbox.stub(APIAction, 'fetchTradeableSymbolsFromSearch').callsFake(() => {
            return {
                data: response
            }
        })
        chai.request(server)
            .get(endpoints.SEARCH_TRADEABLE_SYMBOLS_ENDPOINT)
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(response)
                expect(getem.calledOnce).to.be.true
                done()
            })
        
    })
    it('Throw', done=>{
        const getem = sandbox.stub(APIAction, 'fetchTradeableSymbolsFromSearch').callsFake(() => {
            throw new Error()
        })
        chai.request(server)
            .get(endpoints.SEARCH_TRADEABLE_SYMBOLS_ENDPOINT)
            .end((err,res)=>{
                expect(res).to.have.status(500);
                expect(getem.calledOnce).to.be.true
                done()
            })
        
    })
})