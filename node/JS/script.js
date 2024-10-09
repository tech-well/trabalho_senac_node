const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, res.method);

    res.setHeader('Tipo-Conteudo', 'texto-html');

    let caminho = './node/views/';

    switch (req.url) {
        case '/':

            caminho += 'index.html'

            res.statusCode = 200
            break

        case '/quemsomos':

            caminho += 'quemSomos.html'
            res.statusCode = 200
            break

        case '/blog':

        caminho += 'blog.html'
        res.statusCode = 200
        break

        case '/catalogo':

        caminho += 'catalogo.html'
        res.statusCode = 200
        break
        
        case '/orcamento':

        caminho += 'orcamento.html'
        res.statusCode = 200
        break

        case '/portfolio':

        caminho += 'portfolio.html'
        res.statusCode = 200
        break

        default:

        caminho += 'error.html'
        res. statusCode = 404
    }




    fs.readFile(caminho, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
    
            res.end(data);
        }
    
    });
});

server.listen(3000, 'localhost', () => {
    console.log("Ouvindo requisição na porta 3000")
});


