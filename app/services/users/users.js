(function() {
    'use strict';

    angular.module('api.users', [])
        .factory('Users', function() {
            var Users = {};
            var userList = [{
                id: '1',
                name: 'João',
                role: 'Programador',
                location: 'Pato Branco'
            }, {
                id: '2',
                name: 'Maria',
                role: 'Programador',
                location: 'Pato Branco'
            }, {
                id: '3',
                name: 'Ivan',
                role: 'Front-end',
                location: 'Pato Branco'
            }, {
                id: '4',
                name: 'Fernando',
                role: 'Designer',
                location: 'Curitiba'
            }];

            Users.all = function() {
                return userList;
            };

            Users.findById = function(id) {
                return userList.find(function(user) {
                    return user.id === id;
                });
            };

            return Users;
        });
})();
