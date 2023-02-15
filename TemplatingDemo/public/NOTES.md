#Serving static files as a response to ejs templates in views directory using express middleware:
- app.use(express.static('public'))

#Use the following for absolute path to run application from outside root directory
- app.use(express.static(path.join(__dirname, 'public')));

#When linking to the files you don't need to reference the public directory since it's implicitly 
#provided. I.E:
- <link rel='stylesheet' href='/app.css' >

