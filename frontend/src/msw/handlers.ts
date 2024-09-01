import { http, HttpResponse } from 'msw'
import Data from '../Data/data.json'
export const handlers = [

  http.get('/api/cat-gifs', () => {
    return HttpResponse.json(Data)
  }),
 
]