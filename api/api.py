import time
from flask import Flask, jsonify, request

app = Flask(__name__)

users = {}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/signup' , methods=["GET" , "POST"])
def check_sign_up():
    error = ''
    try:
        if request.method == 'POST':
            data = request.get_json()
            attempted_username = data['userEmail']
            attempted_password = data['userPassword']
            print('[Sign up] Post request gets : ',attempted_username , attempted_password)
            if attempted_username in users.keys():
                #already used
                my_rep = {'response': False}           
            else:
                #register
                users[attempted_username]=attempted_password
                my_rep = {'response': True}           
    except Exception as e:
        my_rep = {'response': False}
	
    print(jsonify(my_rep))
    return jsonify(my_rep)
        
