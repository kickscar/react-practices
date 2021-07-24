const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello Wolrd';
    return app;
}

document
    .getElementById('root')
    .appendChild(App());