import sqlite3

def add_customer(customer):
    conn = sqlite3.connect('clientes.db')
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, telefone TEXT, email TEXT, metal TEXT, observacao TEXT)")
    c.execute("INSERT INTO clientes (nome, sobrenome, telefone, email, metal, observacao) VALUES (?, ?, ?, ?, ?, ?)", 
              (customer['nome'], customer['sobrenome'], customer['telefone'], customer['email'], customer['metal'], customer['observacao']))
    conn.commit()
    conn.close()