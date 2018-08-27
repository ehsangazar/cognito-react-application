const CognitoConfig = {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', 
    // REQUIRED - Amazon Cognito Region
    region: 'XX-XXXX-X', 
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'XX-XXXX-X_abcd1234',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: 'XX-XXXX-X_abcd1234', 
  }
}


export default CognitoConfig