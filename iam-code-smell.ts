import { aws_iam as iam } from 'aws-cdk-lib'

new iam.PolicyStatement({
    effect: iam.Effect.ALLOW,
    actions: ["*"], // Sensitive
    resources: ["arn:aws:iam:::user/*"],
})
