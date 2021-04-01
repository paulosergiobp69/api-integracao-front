import { http } from './config'

export default {

    listar:() => {
//        const token = localStorage.getItem('auth-token');
       // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEwLjE3NTo4MDAwXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjE3MzAzODMzLCJleHAiOjE2MTczMDc0MzMsIm5iZiI6MTYxNzMwMzgzMywianRpIjoiSm9Jd0c0d1lTTkN2SXNHQiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.D7rUKS82xYW_KeK8aXozzwI-L4EKIusJDvOFn7q4hj4';
/*
        const config = {
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          }
*/
        /*var config = {
            headers: { Authorization: "Bearer " + token }
        };*/        
//        return http.get('H100', { headers: { "Authorization": "Bearer "+token } })
        return http.get('H100')
//        return http.get('telefones')

    }
}