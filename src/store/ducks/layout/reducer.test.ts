import reducer from './index'

describe('Modal reducer', () =>{
    test('Deve retornar o estado inicial!', () => {
        expect(reducer(undefined, {})).toEqual({ showMessage: false })
    });

    test('Deve retornar o estado com a props showMessage = true!', () => {
        expect(reducer(undefined, { type: 'SHOW_MESSAGE' })).toEqual({ showMessage: true })
    });

    test('Deve retornar o estado com a props showMessage = False!', () => {
        expect(reducer({showMessage: true}, { type: 'HIDE_MESSAGE' })).toEqual({ showMessage: false })
    });
})