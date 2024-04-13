from flask import Flask, request, jsonify
from database import add_customer

app = Flask(__name__)

@app.route('/')
def index():
    return "Página inicial do sistema de cadastro de clientes da Preferida Joias"

@app.route('/cadastro', methods=['POST'])
def cadastrar_cliente():
    data = request.json
    add_customer(data)
    return jsonify({"message": "Cliente cadastrado com sucesso!"})

if __name__ == '__main__':
    app.run(debug=True)