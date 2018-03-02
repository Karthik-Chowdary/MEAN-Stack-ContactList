# MEAN-Stack-ContactList
ContactList Application using MEAN (MongoDB, ExpressJS, AngularJS, NodeJS) 

<h2>Install Homebrew</h2>

<li><strong>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</strong>

<h2>Install MongoDB</h2>

<li>Open the Terminal app and type <strong>brew update</strong>.
<li>After updating Homebrew <strong>brew install mongodb</strong>
<li>After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running <strong>mkdir -p /data/db</strong>
<li>Make sure that the /data/db directory has the right permissions by running
<li><strong>sudo chown -R `id -un` /data/db</strong>
<li>Enter your password
<li>Run the Mongo daemon, in one of your terminal windows run <strong>mongod</strong>. This should start the Mongo server.
<li>Run the Mongo shell, with the Mongo daemon running in one terminal, type <strong>mongo</strong> in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.
<li>To exit the Mongo shell run <strong>quit()</strong>
<li>To stop the Mongo daemon hit <strong>ctrl-c</strong>
  
<h2>Install NodeJS

<li><strong>brew install node</strong>

Set path to /users/....../contactlist/

Intall these by typing in the terminal

<li><strong>npm init
<li><strong>npm install express --save
<li><strong>npm install mongoose cors body-parser --save
<li><strong>sudo npm install -g --force nodemon
<li><strong>nodemon

<h3> You are good to go
