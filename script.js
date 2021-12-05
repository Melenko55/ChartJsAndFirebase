import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js"
import {getDatabase, ref, set, child, get, update, remove, push} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js"
        
const firebaseConfig = {
    apiKey: "AIzaSyCVatz8s881PSZCmTV1c16ovJxswTlFlWQ",
    authDomain: "homeautomation-f8784.firebaseapp.com",
    databaseURL: "https://homeautomation-f8784-default-rtdb.firebaseio.com",
    projectId: "homeautomation-f8784",
    storageBucket: "homeautomation-f8784.appspot.com",
    messagingSenderId: "737790294120",
    appId: "1:737790294120:web:6c3a0108dcf48f8cb9e3dd",
    measurementId: "G-D0T0FXBSM4"
}

        const app = initializeApp(firebaseConfig);
        const db = getDatabase()

        //Refs
        const namebox = document.getElementById('Namebox')
        const tempbox = document.getElementById('Tempbox')
        const insBtn = document.getElementById('Insbtn')
        const updateBtn = document.getElementById('Updatebtn')
        const CHART = document.getElementById('lineChart')
        let lineChart
        let labels = []
        let defaultData = []
        


        function insertData() {
            let today = new Date()
            let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
            set(push(ref(db, `Temperature/${namebox.value}/data`)), {
                temp: tempbox.value,
                time: time
            }).then( () => {
                if (lineChart) {
                    lineChart.data.datasets[0].data.push(tempbox.value)
                    lineChart.data.labels.push(time)
                    lineChart.update()
                }
                
                alert('data stored suc')
            }).catch( (e) => {
                alert('Error ' + e)
            })
        }

        function selectData() {
            const dbref = ref(db) 
            get(child(dbref, `Temperature/${namebox.value}/data`)).then((snapshot) => {
                if (snapshot.exists()) {
                    labels = []
                    defaultData = []
                    const data =  snapshot.val()
                    Object.values(data).forEach(({temp, time}) => {
                        labels.push(time)
                        defaultData.push(temp)
                    })
                    if (!lineChart) {
                        drawChart()
                    }
                } else {
                    alert("no data found")
                }
            }).catch( (err) => {
                alert(`Error: ${err}`)
            })
        }

        function drawChart() {
            lineChart = new Chart(CHART, {
            type: 'rad',
            data: {
                labels: labels,
                datasets: [
                    {   
                        label: 'Temp1',
                        data: defaultData,
                        borderColor: 'rgba(0, 255, 100, 0.5)',
                        backgroundColor: 'rgba(0, 100, 50, 0.2)',
                        fill: true,
                    }
                ]
            },
            options: {
                responsive: false,
                onClick: (e) => {
                    console.log(e);
                }
            }
        })
        }
        
        /*function updateData() {
            update(ref(db, 'Temperature/' + rollbox.value), {
                NameOfStd: namebox.value,
                Section: secbox.value,
                Gender: genbox.value
            }).then( () => {
                alert('data update suc')
            }).catch( (e) => {
                alert('Error ' + e)
            })
        }

        function removeData() {
            remove(ref(db, 'Temperature/' + rollbox.value)).then( () => {
                alert('data remove suc')
            }).catch( (e) => {
                alert('Error ' + e)
            })
        }*/

        insBtn.addEventListener('click', insertData)
        updateBtn.addEventListener('click', selectData)
        // selBtn.addEventListener('click', selectData)
        // updBtn.addEventListener('click', updateData)
        // delBtn.addEventListener('click', removeData)