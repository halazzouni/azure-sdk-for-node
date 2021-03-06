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
 * Initializes a new instance of the PolicySetResult class.
 * @constructor
 * Result of a policy set evaluation.
 *
 * @member {boolean} [hasError] A value indicating whether this policy set
 * evaluation has discovered violations.
 *
 * @member {array} [policyViolations] The list of policy violations.
 *
 */
class PolicySetResult {
  constructor() {
  }

  /**
   * Defines the metadata of PolicySetResult
   *
   * @returns {object} metadata of PolicySetResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicySetResult',
      type: {
        name: 'Composite',
        className: 'PolicySetResult',
        modelProperties: {
          hasError: {
            required: false,
            serializedName: 'hasError',
            type: {
              name: 'Boolean'
            }
          },
          policyViolations: {
            required: false,
            serializedName: 'policyViolations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicyViolationElementType',
                  type: {
                    name: 'Composite',
                    className: 'PolicyViolation'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PolicySetResult;
