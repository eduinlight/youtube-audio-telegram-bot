const chai = require('chai')
const toMP3 = require('../../src/lib/utils/toMP3')

const expect = chai.expect

describe('toMP3', function () {
  it('should correct the file name 1', function () {
    expect(toMP3(' POR QUÉ...-rIbRa0pwfhA.webm'))
      .to.equal('POR QUÉ...-rIbRa0pwfhA.mp3')
  })

  it('should correct the file name 2', function () {
    const value = '\n \n MIRA POR QUÉ...-rIbRa0pwfhA.webm\n\n'
    expect(toMP3(value))
      .to.equal('MIRA POR QUÉ...-rIbRa0pwfhA.mp3')
  })
})
