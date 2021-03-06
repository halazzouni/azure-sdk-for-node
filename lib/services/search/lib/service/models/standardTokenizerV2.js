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
 * Initializes a new instance of the StandardTokenizerV2 class.
 * @constructor
 * Breaks text following the Unicode Text Segmentation rules. This tokenizer is
 * implemented using Apache Lucene.
 *
 * @member {number} [maxTokenLength] The maximum token length. Default is 255.
 * Tokens longer than the maximum length are split. The maximum token length
 * that can be used is 300 characters. Default value: 255 .
 *
 */
class StandardTokenizerV2 extends models['Tokenizer'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StandardTokenizerV2
   *
   * @returns {object} metadata of StandardTokenizerV2
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Azure.Search.StandardTokenizerV2',
      type: {
        name: 'Composite',
        className: 'StandardTokenizerV2',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          },
          maxTokenLength: {
            required: false,
            serializedName: 'maxTokenLength',
            defaultValue: 255,
            constraints: {
              InclusiveMaximum: 300
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = StandardTokenizerV2;
