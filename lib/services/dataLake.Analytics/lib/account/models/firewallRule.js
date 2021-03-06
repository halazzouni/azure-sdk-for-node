/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the FirewallRule class.
 * @constructor
 * Data Lake Analytics firewall rule information
 *
 * @member {string} startIpAddress the start IP address for the firewall rule.
 * This can be either ipv4 or ipv6. Start and End should be in the same
 * protocol.
 *
 * @member {string} endIpAddress the end IP address for the firewall rule. This
 * can be either ipv4 or ipv6. Start and End should be in the same protocol.
 *
 */
class FirewallRule extends models['OptionalSubResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of FirewallRule
   *
   * @returns {object} metadata of FirewallRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FirewallRule',
      type: {
        name: 'Composite',
        className: 'FirewallRule',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          startIpAddress: {
            required: true,
            serializedName: 'properties.startIpAddress',
            type: {
              name: 'String'
            }
          },
          endIpAddress: {
            required: true,
            serializedName: 'properties.endIpAddress',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FirewallRule;
