var nock = require('nock');
var ip = '192.168.1.32';

var couchdb = nock('http://tumpangapi')
                .get('/users/1')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  rider: ["Chan", "Sonia"],
                  email: 'pedro.teixeira@gmail.com'
                 });

var logindb = nock(ip)
                .post('/login','userName=Dheeno&phoneNo=0123456789')
                 .reply(200,{
                  msg:null
                });