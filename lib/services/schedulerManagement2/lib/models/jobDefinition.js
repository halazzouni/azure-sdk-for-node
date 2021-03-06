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
 * Initializes a new instance of the JobDefinition class.
 * @constructor
 * @member {string} [id] Gets the job resource identifier.
 *
 * @member {string} [type] Gets the job resource type.
 *
 * @member {string} [name] Gets the job resource name.
 *
 * @member {object} [properties] Gets or sets the job properties.
 *
 * @member {date} [properties.startTime] Gets or sets the job start time.
 *
 * @member {object} [properties.action] Gets or sets the job action.
 *
 * @member {string} [properties.action.type] Gets or sets the job action type.
 * Possible values include: 'Http', 'Https', 'StorageQueue', 'ServiceBusQueue',
 * 'ServiceBusTopic'
 *
 * @member {object} [properties.action.request] Gets or sets the http requests.
 *
 * @member {object} [properties.action.request.authentication] Gets or sets the
 * authentication method of the request.
 *
 * @member {string} [properties.action.request.authentication.type] Gets or
 * sets the HTTP authentication type. Possible values include: 'NotSpecified',
 * 'ClientCertificate', 'ActiveDirectoryOAuth', 'Basic'
 *
 * @member {string} [properties.action.request.uri] Gets or sets the URI of the
 * request.
 *
 * @member {string} [properties.action.request.method] Gets or sets the method
 * of the request.
 *
 * @member {string} [properties.action.request.body] Gets or sets the request
 * body.
 *
 * @member {object} [properties.action.request.headers] Gets or sets the
 * headers.
 *
 * @member {object} [properties.action.queueMessage] Gets or sets the storage
 * queue message.
 *
 * @member {string} [properties.action.queueMessage.storageAccount] Gets or
 * sets the storage account name.
 *
 * @member {string} [properties.action.queueMessage.queueName] Gets or sets the
 * queue name.
 *
 * @member {string} [properties.action.queueMessage.sasToken] Gets or sets the
 * SAS key.
 *
 * @member {string} [properties.action.queueMessage.message] Gets or sets the
 * message.
 *
 * @member {object} [properties.action.serviceBusQueueMessage] Gets or sets the
 * service bus queue message.
 *
 * @member {string} [properties.action.serviceBusQueueMessage.queueName] Gets
 * or sets the queue name.
 *
 * @member {object} [properties.action.serviceBusTopicMessage] Gets or sets the
 * service bus topic message.
 *
 * @member {string} [properties.action.serviceBusTopicMessage.topicPath] Gets
 * or sets the topic path.
 *
 * @member {object} [properties.action.retryPolicy] Gets or sets the retry
 * policy.
 *
 * @member {string} [properties.action.retryPolicy.retryType] Gets or sets the
 * retry strategy to be used. Possible values include: 'None', 'Fixed'
 *
 * @member {moment.duration} [properties.action.retryPolicy.retryInterval] Gets
 * or sets the retry interval between retries, specify duration in ISO 8601
 * format.
 *
 * @member {number} [properties.action.retryPolicy.retryCount] Gets or sets the
 * number of times a retry should be attempted.
 *
 * @member {object} [properties.action.errorAction] Gets or sets the error
 * action.
 *
 * @member {string} [properties.action.errorAction.type] Gets or sets the job
 * error action type. Possible values include: 'Http', 'Https', 'StorageQueue',
 * 'ServiceBusQueue', 'ServiceBusTopic'
 *
 * @member {object} [properties.action.errorAction.request] Gets or sets the
 * http requests.
 *
 * @member {object} [properties.action.errorAction.request.authentication] Gets
 * or sets the authentication method of the request.
 *
 * @member {string} [properties.action.errorAction.request.authentication.type]
 * Gets or sets the HTTP authentication type. Possible values include:
 * 'NotSpecified', 'ClientCertificate', 'ActiveDirectoryOAuth', 'Basic'
 *
 * @member {string} [properties.action.errorAction.request.uri] Gets or sets
 * the URI of the request.
 *
 * @member {string} [properties.action.errorAction.request.method] Gets or sets
 * the method of the request.
 *
 * @member {string} [properties.action.errorAction.request.body] Gets or sets
 * the request body.
 *
 * @member {object} [properties.action.errorAction.request.headers] Gets or
 * sets the headers.
 *
 * @member {object} [properties.action.errorAction.queueMessage] Gets or sets
 * the storage queue message.
 *
 * @member {string} [properties.action.errorAction.queueMessage.storageAccount]
 * Gets or sets the storage account name.
 *
 * @member {string} [properties.action.errorAction.queueMessage.queueName] Gets
 * or sets the queue name.
 *
 * @member {string} [properties.action.errorAction.queueMessage.sasToken] Gets
 * or sets the SAS key.
 *
 * @member {string} [properties.action.errorAction.queueMessage.message] Gets
 * or sets the message.
 *
 * @member {object} [properties.action.errorAction.serviceBusQueueMessage] Gets
 * or sets the service bus queue message.
 *
 * @member {string}
 * [properties.action.errorAction.serviceBusQueueMessage.queueName] Gets or
 * sets the queue name.
 *
 * @member {object} [properties.action.errorAction.serviceBusTopicMessage] Gets
 * or sets the service bus topic message.
 *
 * @member {string}
 * [properties.action.errorAction.serviceBusTopicMessage.topicPath] Gets or
 * sets the topic path.
 *
 * @member {object} [properties.action.errorAction.retryPolicy] Gets or sets
 * the retry policy.
 *
 * @member {string} [properties.action.errorAction.retryPolicy.retryType] Gets
 * or sets the retry strategy to be used. Possible values include: 'None',
 * 'Fixed'
 *
 * @member {moment.duration}
 * [properties.action.errorAction.retryPolicy.retryInterval] Gets or sets the
 * retry interval between retries, specify duration in ISO 8601 format.
 *
 * @member {number} [properties.action.errorAction.retryPolicy.retryCount] Gets
 * or sets the number of times a retry should be attempted.
 *
 * @member {object} [properties.recurrence] Gets or sets the job recurrence.
 *
 * @member {string} [properties.recurrence.frequency] Gets or sets the
 * frequency of recurrence (second, minute, hour, day, week, month). Possible
 * values include: 'Minute', 'Hour', 'Day', 'Week', 'Month'
 *
 * @member {number} [properties.recurrence.interval] Gets or sets the interval
 * between retries.
 *
 * @member {number} [properties.recurrence.count] Gets or sets the maximum
 * number of times that the job should run.
 *
 * @member {date} [properties.recurrence.endTime] Gets or sets the time at
 * which the job will complete.
 *
 * @member {object} [properties.recurrence.schedule]
 *
 * @member {array} [properties.recurrence.schedule.weekDays] Gets or sets the
 * days of the week that the job should execute on.
 *
 * @member {array} [properties.recurrence.schedule.hours] Gets or sets the
 * hours of the day that the job should execute at.
 *
 * @member {array} [properties.recurrence.schedule.minutes] Gets or sets the
 * minutes of the hour that the job should execute at.
 *
 * @member {array} [properties.recurrence.schedule.monthDays] Gets or sets the
 * days of the month that the job should execute on. Must be between 1 and 31.
 *
 * @member {array} [properties.recurrence.schedule.monthlyOccurrences] Gets or
 * sets the occurrences of days within a month.
 *
 * @member {string} [properties.state] Gets or set the job state. Possible
 * values include: 'Enabled', 'Disabled', 'Faulted', 'Completed'
 *
 * @member {object} [properties.status] Gets the job status.
 *
 * @member {number} [properties.status.executionCount] Gets the number of times
 * this job has executed.
 *
 * @member {number} [properties.status.failureCount] Gets the number of times
 * this job has failed.
 *
 * @member {number} [properties.status.faultedCount] Gets the number of faulted
 * occurrences (occurrences that were retried and failed as many times as the
 * retry policy states).
 *
 * @member {date} [properties.status.lastExecutionTime] Gets the time the last
 * occurrence executed in ISO-8601 format.  Could be empty if job has not run
 * yet.
 *
 * @member {date} [properties.status.nextExecutionTime] Gets the time of the
 * next occurrence in ISO-8601 format. Could be empty if the job is completed.
 *
 */
class JobDefinition {
  constructor() {
  }

  /**
   * Defines the metadata of JobDefinition
   *
   * @returns {object} metadata of JobDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobDefinition',
      type: {
        name: 'Composite',
        className: 'JobDefinition',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'JobProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = JobDefinition;
