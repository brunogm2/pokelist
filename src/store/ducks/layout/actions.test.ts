import { hideMessage, showMessage } from './index'

describe('Modal Actions', () => {
    describe('Actions Types', () => {
        test('Deve retornar a action type SHOW_MESSAGE', () =>{
            expect(showMessage.type).toEqual('SHOW_MESSAGE');
        });

        test('Deve retornar a action type HIDE_MESSAGE', () =>{
            expect(hideMessage.type).toEqual('HIDE_MESSAGE');
        });
    })

    describe('Actions Creators', () => {
        test('Deve retornar a action creator showMessage {type: showMessage}', ()=>{
            expect(showMessage()).toEqual({ type: 'SHOW_MESSAGE'});
        });
        
        test('Deve retornar a action creator hideMessage {type: hideMessage}', ()=>{
            expect(hideMessage()).toEqual({ type: 'HIDE_MESSAGE'});
        })
    })
})