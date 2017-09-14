import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Select from './components/Select.vue'
import DataTable from './components/DataTable.vue'
import ChartComponent from './components/ChartComponent.vue'
import NavBar from './components/NavBar.vue'
import ReportItself from './components/Report.vue'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.component('select-report', Select)
Vue.component('data-table', DataTable)
Vue.component('chart-component', ChartComponent)
Vue.component('nav-bar', NavBar)
Vue.component('report-itself', ReportItself)


Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


var store = new Vuex.Store({
	state: {
		selected: '', 
	 	reports: [
			{value: "report1", text: 'image example', type: 'graph', image: 'http://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/s1600/status-report.png'},
			{value: "report2", text: 'hardcoded table example', type: 'table',
			data: {columns: ['', 'price', 'value', 'sold'], rows: [["client 1", '$20', '$50', "true"], ["client 2", '$30', '$40', "false"], ["client 3", '$60', '$150', "true"], ["client 4", '$250', '$30', "true"]]}},
		],
	},
	mutations: {
		updateSelection (state, value){
			window.windowmanager.messagebus.send('report-selected', value)
			state.selected = value
		},
		pushMocks (state,value){
			let [url, data] = value
			data = data.slice(0, 10)
			let useUrl = parseUrl(url)
			let newReport = {value: useUrl, text: "api consumed report", type: 'table', data: parseMocks(data)}
			Vue.set(state, 'reports', state.reports.concat(newReport))
		},
		pushJsonReport(state, value){
			let [url, data] = value
			let useUrl = parseUrl(url)
			let newReport = {value: useUrl, text: 'json consumed', type: "JSON", myData: data}
			Vue.set(state, 'reports', state.reports.concat(newReport))
		}
	},
	getters: {
		selectedReport: state => {
			return state.reports.filter(item=> item.value === state.selected)[0]
		},
		allReports: state => {
			return state.reports
		},
	}, 
	actions: {
		fetchMocks({commit}, url) {
			return new Promise((resolve, reject)=>{
				Vue.http.get(url)
				.then((response)=>{
					commit('pushMocks', [url, response.body])
					resolve()
				})
				.catch((error)=>{
					console.log(error.statusText)
				})
			})
		},
		fetchJson({commit}, url) {
			return new Promise((resolve, reject) =>{
				Vue.http.get(url)
				.then((response)=>{
					commit('pushJsonReport', [url, response.body])
					resolve()
				})
				.catch((error)=>{
					console.log(error)
				})

			})
		}

	}
})

var parseUrl = (url) =>{
	let urlIndex = url.lastIndexOf('/')
	console.log(url)
	return url.substr(urlIndex+1)
}
var parseMocks = (data)=>{
	let dataToPush = {}
		dataToPush.columns = Object.keys(data[0])
			dataToPush.columns.shift()
	let rowMap = data.map(item=>{
		return Object.values(item)
	})
		dataToPush.rows = rowMap
			dataToPush.rows.map(row=>{
				row.shift()
				return row
			})
	return dataToPush
}

export default store