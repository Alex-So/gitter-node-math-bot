#Description
It is a simple math-bot for Gitter.im which understands next symbols: 0-9,+,-,/,*,(,).
Bot reads all messages and answers to those of them, which begin from 'calc' and after that containt math expression.
For example, on message "calc (1+3)/2" bot anwers with message "(1+3)/2=2".

#How to use
1.Regisret on Gitter.im

2.Install Node.js

3.Intall node-gitter module(https://github.com/gitterHQ/node-gitter)

4.Run in command line: "node cals.ls {room.name} {personal token on gitter.im}".

	For example: "node calc.js Alex-So/alexso-uwc15 5gydow0cj5ksbzkm36f0hzr31qfuk3fnj653zlc"
	You can see your token on page https://developer.gitter.im/apps (if you are not sign in you'll be redirect on 			https://developer.gitter.im/docs/welcome. Just click on "Sign in")
