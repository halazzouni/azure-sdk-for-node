// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/IotHubKeys/iothubowner/listkeys?api-version=2016-02-03')
  .reply(200, "{\"keyName\":\"iothubowner\",\"primaryKey\":\"RcxxYTEL+CHreQ8oluqE57aRBRqbG/GRf7QNndO/Jjo=\",\"secondaryKey\":\"x3pvpuCNeD/D4/hX8fum2VShvNbYJ8nk3StCv4RRpZk=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ec0c448e-3128-4f04-ba51-e447c3931921',
  'x-ms-correlation-request-id': 'ec0c448e-3128-4f04-ba51-e447c3931921',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221330Z:ec0c448e-3128-4f04-ba51-e447c3931921',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/IotHubKeys/iothubowner/listkeys?api-version=2016-02-03')
  .reply(200, "{\"keyName\":\"iothubowner\",\"primaryKey\":\"RcxxYTEL+CHreQ8oluqE57aRBRqbG/GRf7QNndO/Jjo=\",\"secondaryKey\":\"x3pvpuCNeD/D4/hX8fum2VShvNbYJ8nk3StCv4RRpZk=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ec0c448e-3128-4f04-ba51-e447c3931921',
  'x-ms-correlation-request-id': 'ec0c448e-3128-4f04-ba51-e447c3931921',
  'x-ms-routing-request-id': 'CENTRALUS:20160920T221330Z:ec0c448e-3128-4f04-ba51-e447c3931921',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Sep 2016 22:13:29 GMT',
  connection: 'close' });
 return result; }]];