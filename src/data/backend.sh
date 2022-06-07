#!/bin/sh

# Backend shell script to retrieve and store data in data.json
# jq and crontab are requirements

source config.sh

access_token=$(curl -k -d "grant_type=password&username=$username" --data-urlencode "password=$password" -H "Authorization: Basic WFk4NTVsSEU5Y2ZHbkZvM0JyYjJLWXRXRzc0YTpGOXhsQkh4U3ZSdnRPTEEwR21tbmtzQzQ3NHdh"  https://gateway.api.cloud.wso2.com/token -v | jq -r .access_token) || exit

curl --location --request GET 'https://gateway.api.cloud.wso2.com/t/updateslive/update-manager/1.0.0/update' \
--header "Authorization: Bearer $access_token" > data.json