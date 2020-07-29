import json

def lambda_handler(event, context):
    # TODO implement
    homepage = open("index.html","r")
    index = homepage.read()
    homepage.close()
    
    return {
        'statusCode': 200,
        'isBase64Encoded': False,
        'headers':{
            'Content-Type': 'text/html; charset=utf-8',
            },
        'body': f"{index}"
    }
