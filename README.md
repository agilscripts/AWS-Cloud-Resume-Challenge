# AWS Cloud Resume Challenge
![CloudChallenge copy](https://github.com/agilscripts/AWS-Cloud-Resume/assets/143922871/e6c029ad-0a35-4876-9536-95c2fc1dfc9e)

Welcome to my Cloud Resume Challenge project, showcasing my AWS skills to create a dynamic and secure resume website.

## Project Overview

This repository contains the code and configurations for my resume website, built with AWS services.

### Project Structure

- **backend**: Contains the AWS SAM (Serverless Application Model) template and Python code for the backend API.
- **frontend**: Holds the HTML, CSS, and JavaScript files for the resume website.

## Getting Started

Follow these steps to set up and deploy the project locally or in your AWS environment.

### Prerequisites

1. **AWS Account**: Ensure you have an AWS account to deploy the resources.

### Backend (AWS Lambda, API Gateway, DynamoDB)

1. **Install AWS CLI**: Make sure the AWS CLI is installed on your machine.

2. **Configure AWS Credentials**: Set up your AWS credentials using `aws configure`.

3. **Deploy Backend Resources**:
   ```bash
   cd backend
   sam build
   sam deploy --guided
# Frontend - AWS Cloud Resume Challenge

This directory contains the frontend code for my Cloud Resume Challenge project. The resume website is built using HTML, CSS, and JavaScript.

## Setup

Follow these steps to deploy the frontend code to an S3 bucket and enable automatic updates using GitHub Actions.

### Prerequisites

1. **AWS CLI**: Ensure the AWS CLI is installed on your machine.

### Deployment

1. **Create S3 Bucket for Website**:
   ```bash
   aws s3 mb s3://your-unique-s3-bucket-name
2. **Upload Website Files**


## Continuous Integration and Deployment (CI/CD)
**Backend CI/CD (GitHub Actions)**
Set up GitHub Actions workflow in .github/workflows/backend-ci-cd.yml.
On each push to the backend repository, GitHub Actions will run tests and deploy the backend resources.

## Frontend CI/CD (GitHub Actions)
Set up GitHub Actions workflow in .github/workflows/frontend-ci-cd.yml.
On each push to the frontend repository, GitHub Actions will update the S3 bucket.

## Additional Notes
This project follows Infrastructure as Code (IaC) principles using AWS SAM.
The visitor counter is implemented using JavaScript and interacts with DynamoDB through the API.
The project demonstrates best practices for deploying static websites and serverless APIs on AWS.
