/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VirtualHardDisk class.
 * @constructor
 * Describes the uri of a disk.
 * @member {string} [uri] Gets or sets the virtual hard disk's uri. It should
 * be a valid Uri to a virtual hard disk.
 * 
 */
function VirtualHardDisk() {
}

/**
 * Defines the metadata of VirtualHardDisk
 *
 * @returns {object} metadata of VirtualHardDisk
 *
 */
VirtualHardDisk.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualHardDisk',
    type: {
      name: 'Composite',
      className: 'VirtualHardDisk',
      modelProperties: {
        uri: {
          required: false,
          serializedName: 'uri',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VirtualHardDisk;