import { maskNumber } from './form/mask-numbers.js'
import { schedulesDay, searchSchedules } from './schedules/load.js'

document.addEventListener("DOMContentLoaded", function(){
    schedulesDay()
    maskNumber()
    searchSchedules()
})