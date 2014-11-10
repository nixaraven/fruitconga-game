//Variables Privadas
var cola_x = 60, cola_y = 30;
var delay = true;

//MUSICA
var bpm = 122;
var lastbeat = 60000/bpm;
var beat = (60000/bpm) * 2;
var offset;
var tolerance = 120;

function addInQueue(){
	var value = Math.random();
	var temp;
	var vel = 10;
	var difx = 50;
	if(value < .2){
		temp = game.add.sprite(cola_x + difx, cola_y, 'banana', 3);
		temp.animations.add('dance_banana', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
		temp.animations.play('dance_banana');
		cola.push(temp);
	}
	else if(value < .4){
		temp = game.add.sprite(cola_x + difx, cola_y, 'apple', 3);
		temp.animations.add('dance_apple', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
		temp.animations.play('dance_apple');
		cola.push(temp);
	}
	else if(value < .6){
		temp = game.add.sprite(cola_x + difx, cola_y, 'green_apple', 3);
		temp.animations.add('dance_green_apple', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
		temp.animations.play('dance_green_apple');
		cola.push(temp);
	}
	else if(value < .8){
		temp = game.add.sprite(cola_x + difx, cola_y, 'pina', 3);
		temp.animations.add('dance_pina', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
		temp.animations.play('dance_pina');
		cola.push(temp);
	}
	else{
		temp = game.add.sprite(cola_x + difx, cola_y, 'sandia', 3);
		temp.animations.add('dance_sandia', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
		temp.animations.play('dance_sandia');
		cola.push(temp);
	}
}

function QueueUpdate(queue){
	var flag = false;
	if(music.currentTime > lastbeat + beat){
		lastbeat += beat;
		for(i = 0; i < queue.length; i++){
	        if(queue[i].x > 600){
	        	queue[i].kill();
	        	flag = true;
	        }
	        else
	            queue[i].x += 40;
	    }
	    if(delay){
	    	addInQueue();
	    	delay = false;
	    }
	    else
	    	delay = true;
	    if(flag)
	    	queue.shift();
	}
}