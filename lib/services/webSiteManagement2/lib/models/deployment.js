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
 * Initializes a new instance of the Deployment class.
 * @constructor
 * User crendentials used for publishing activity.
 *
 * @member {string} [deploymentId] ID.
 *
 * @member {number} [status] Status.
 *
 * @member {string} [message] Message.
 *
 * @member {string} [author] Author.
 *
 * @member {string} [deployer] Deployer.
 *
 * @member {string} [authorEmail] Author email.
 *
 * @member {date} [startTime] Start time.
 *
 * @member {date} [endTime] End time.
 *
 * @member {boolean} [active] Active.
 *
 * @member {string} [details] Detail.
 *
 */
class Deployment extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Deployment
   *
   * @returns {object} metadata of Deployment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Deployment',
      type: {
        name: 'Composite',
        className: 'Deployment',
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
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          deploymentId: {
            required: false,
            serializedName: 'properties.id',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Number'
            }
          },
          message: {
            required: false,
            serializedName: 'properties.message',
            type: {
              name: 'String'
            }
          },
          author: {
            required: false,
            serializedName: 'properties.author',
            type: {
              name: 'String'
            }
          },
          deployer: {
            required: false,
            serializedName: 'properties.deployer',
            type: {
              name: 'String'
            }
          },
          authorEmail: {
            required: false,
            serializedName: 'properties.author_email',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.start_time',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'properties.end_time',
            type: {
              name: 'DateTime'
            }
          },
          active: {
            required: false,
            serializedName: 'properties.active',
            type: {
              name: 'Boolean'
            }
          },
          details: {
            required: false,
            serializedName: 'properties.details',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Deployment;
