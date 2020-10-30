
 module.exports.run = (client) => {

	/* Does not run due to init() in main.js */

     if (client.config.dblToken && client.config.dblToken != '') {
        /*client.shard.fetchClientValues('guilds.cache.size')
            .then(results => {
                client.dbl.postStats(results.reduce((prev, memberCount) => prev + memberCount, 0));
            })

            */
        setInterval(function() {
            client.shard.broadcastEval('this.guilds.cache.size')
            //client.shard.fetchClientValues('guilds.cache.size')
                .then(results => {
                    client.dbl.postStats(results.reduce((prev, memberCount) => prev + memberCount, 0));
                })
        }, 1200000 ); // every 20 minutes
     }
    client.user.setActivity(client.config.prefix + 'help', { type: 'PLAYING' })
        .catch((err) => client.logger.error('', err));


 // client.logger.info('', `Logged in as ${client.user.tag} (ID: ${client.user.id})`)


 };
