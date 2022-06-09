from flask import Flask,jsonify,render_template
from flask import request
from flask_cors import *

app = Flask(__name__)

import json

app = Flask(__name__)
CORS(app,supports_credentials=True)
testInfo = {}


@app.route('/', methods=['GET', 'POST'])  # 路由
def test_post():
    testInfo['name'] = 'xiaoming'
    testInfo['age'] = '28'
    return json.dumps(testInfo)


@app.route('/11')
def hello_world():
    return 'Hello World!'


@app.route('/index', methods=['GET', 'POST'])
def index():
    c = request.get_data()
    c=c.decode()
    print(c)
    testInfo['name'] = 'xiaoming'
    testInfo['age'] = '28'
    return json.dumps(testInfo)


if __name__ == '__main__':
    app.run(host='127.0.0.1',
            port=7777,  # 端口
            debug=True
            )