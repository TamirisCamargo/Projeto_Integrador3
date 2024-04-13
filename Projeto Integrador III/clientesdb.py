import sqlite3

conn = sqlite3.connect('clientes.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS clientes
             (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, telefone TEXT, email TEXT, metal TEXT, observacao TEXT)''')

conn.commit()
conn.close()