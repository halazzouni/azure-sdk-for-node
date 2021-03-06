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

/**
 * @class
 * Initializes a new instance of the ProtectedItemResourceList class.
 * @constructor
 * The list of ProtectedItem resources.
 *
 */
class ProtectedItemResourceList extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProtectedItemResourceList
   *
   * @returns {object} metadata of ProtectedItemResourceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProtectedItemResourceList',
      type: {
        name: 'Composite',
        className: 'ProtectedItemResourceList',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProtectedItemResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProtectedItemResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ProtectedItemResourceList;
