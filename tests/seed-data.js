import axios from 'axios'
import patients from '../src/store/fixtures/default-patients'
import omit from 'lodash/omit'

/*eslint no-console: 0*/
const log = console.log

const api = axios.create({
  baseURL: 'http://localhost:8080/gskgateway.com/api'
})

const promises = patients.map(patient => api.post('/hcp/patient', omit(patient, ['id'])))

Promise.all(promises)
  .then(responses => log('Patient Data populated', responses.map(res => res.data.id)))
  .catch(err => log('Error', err))
