// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1540/providers/Microsoft.Cdn/profiles?api-version=2016-10-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile2130\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/profiles/cdnTestProfile2130\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"sku\":{\r\n        \"name\":\"Premium_Verizon\"\r\n      },\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '462',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a6c23079-1126-4112-a06d-6766da6de0fb',
  'x-ms-client-request-id': '2d12634e-e2d3-4e4e-a361-e0627108a27f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ec80e3ca-5479-4131-a154-8e97e607a2a4',
  'x-ms-routing-request-id': 'WESTUS2:20161027T225746Z:ec80e3ca-5479-4131-a154-8e97e607a2a4',
  date: 'Thu, 27 Oct 2016 22:57:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1540/providers/Microsoft.Cdn/profiles?api-version=2016-10-02')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile2130\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1540/providers/Microsoft.Cdn/profiles/cdnTestProfile2130\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"EastUs\",\"sku\":{\r\n        \"name\":\"Premium_Verizon\"\r\n      },\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '462',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a6c23079-1126-4112-a06d-6766da6de0fb',
  'x-ms-client-request-id': '2d12634e-e2d3-4e4e-a361-e0627108a27f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'ec80e3ca-5479-4131-a154-8e97e607a2a4',
  'x-ms-routing-request-id': 'WESTUS2:20161027T225746Z:ec80e3ca-5479-4131-a154-8e97e607a2a4',
  date: 'Thu, 27 Oct 2016 22:57:46 GMT',
  connection: 'close' });
 return result; }]];