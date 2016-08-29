describe('Users factory', function() {
    var Users;
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
    var singleUser = {
        id: '2',
        name: 'Maria',
        role: 'Programador',
        location: 'Pato Branco'
    };

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    it('Deve existir', function() {
        expect(Users).toBeDefined();
    });

    describe('.all()', function() {
        it('Deve existir', function() {
            expect(Users.all).toBeDefined();
        });

        it('Deve retornar uma lista codificada de usuários', function() {
            expect(Users.all()).toEqual(userList);
        });
    });

    describe('.findById()', function() {
        it('Deve existir', function() {
            expect(Users.findById).toBeDefined();
        });

        it('Deve retornar um objeto de usuário, se existir', function() {
            expect(Users.findById('2')).toEqual(singleUser);
        });

        it('Deve retornar indefinido se o usuário não pode ser encontrado', function() {
            expect(Users.findById('ABC')).not.toBeDefined();
        });
    });
});
