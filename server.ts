'use strict';

import * as Hapi from '@hapi/hapi';
import UserRoutes from './Routes/userRoute';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
            return '<h3>Hello!</h3>';
        }
    });

    server.route(UserRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
