import * as api from './books'

describe('#API books endpoint', () => {
    it('should fetchBooks', async () => {        
        const data = await api.fetchBooks();        
        expect(typeof data).toBe('object');
    });

    it('should fetchBook', async () => { 
        const id = 'a99d2a9c-b869-4a4f-b4d4-021054802c1e'       
        const data = await api.fetchBook(id);        
        expect(typeof data).toBe('object');
    });
})  

