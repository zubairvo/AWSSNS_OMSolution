import { PublishCommand } from "@aws-cdk/client-sns";
import { snsClient } from "./snsClient.js";

/**
* @param {string | Record<string, any>} message - The message to send. Can be a plain string or an object
*                                                 if you are using the `json` `MessageStructure`.
* @param {string} topicArn - The ARN of the topic to which you would like to publish.
*/
export const publish = async (
  message = "We noticed you haven't been receiving our correspondence. If you would like to receive updates on your investments," +
  "please update your information on our website or call an agent at 0800 00 000. If your details are correct, please ignore this SMS",
  topicArn = "arn:aws:sns:eu-west-1:654654411919:OMWEmailBounceSMS",
) => {
  const response = await snsClient.send(
    new PublishCommand({
      Message: message,
      TopicArn: topicArn,
    }),
  );
  console.log(response);
  // {
  //   '$metadata': {
  //     httpStatusCode: 200,
  //     requestId: 'e7f77526-e295-5325-9ee4-281a43ad1f05',
  //     extendedRequestId: undefined,
  //     cfId: undefined,
  //     attempts: 1,
  //     totalRetryDelay: 0
  //   },
  //   MessageId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  // }
  return response;
};

// // Load the AWS SDK for Node.js
// var AWS = require("aws-cdk-lib");
// // Set region
// // AWS.config.update({ region: "REGION" });

// // Create publish parameters
// var params = {
//   Message: "We noticed you haven't been receiving our correspondence. If you would like to receive updates on your investments," +
//   "please update your information on our website or call an agent at 0800 00 000. If your details are correct, please ignore this SMS", /* required */
//   TopicArn: "arn:aws:sns:eu-west-1:654654411919:OMWEmailBounceSMS",
// };

// var params = {
//   Message: 'STRING_VALUE', /* required */
//   MessageAttributes: {
//     '<String>': {
//       DataType: 'STRING_VALUE', /* required */
//       BinaryValue: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
//       StringValue: 'STRING_VALUE'
//     },
//     /* '<String>': ... */

// // Create promise and SNS service object
// var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
//   .publish(params)
//   .promise();

// // Handle promise's fulfilled/rejected states
// publishTextPromise
//   .then(function (data) {
//     console.log(
//       `Message ${params.Message} sent to the topic ${params.TopicArn}`
//     );
//     console.log("MessageID is " + data.MessageId);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });