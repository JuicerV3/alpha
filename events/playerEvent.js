const { player } = require('..');

// player events
player.events.on('playerStart', (queue, track) => {
	queue.metadata.channel.send(`Started playing **${track.title}**!`);
});