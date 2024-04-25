
const { PublishCommand, SNSClient } = require ("@aws-sdk/client-sns");
const snsClient = new SNSClient({});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
 var smsMessage = "OM Wealth: Your email address joesoap@absa.co.za is invalid. Please review and verify. Update via app, website, 0860123456 or emailupdates@omwealth.co.za";
 var EmailMessage = "OM Wealth: The following client/s email address is undeliverable. Please review and update the email address:" +
"Client No, Contract No, Client Full Name, Client Email, Client Cellphone" +
"Please review and verify/update via mobile app, Wealth website, 0860123456 or emailupdates@omwealth.co.za";
 var smsTopicArn = "arn:aws:sns:eu-west-1:654654411919:OMWEmailBounceSMS";
 var emailTopicArn = "arn:aws:sns:eu-west-1:654654411919:OMWBounceEmail";

  const response = await snsClient.send(
    new PublishCommand({
      Message: smsMessage,
      TopicArn: smsTopicArn,
    })
  );
  console.log(response);
  const Emailresponse = await snsClient.send(
    new PublishCommand({
      
      Subject: "Your client/s email address is undeliverable",
      Message: EmailMessage,
      TopicArn: emailTopicArn,
    })
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
  //return response;
//};

    
    var res ={
        "statusCode": 200,
        "headers": {
            "Content-Type": "/",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        "isBase64Encoded": false,
    };

res.body = response;
    console.log(res);
    return res;
}