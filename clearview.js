function menu() {
    if (document.getElementById('banner').style.height == "200px" || !document.getElementById('banner').style.height){
        document.getElementById('banner').style.height = "100%"
        document.getElementById('sorting').style.opacity = '1'
        document.getElementById('sorting').style.cursor = 'pointer'
        document.getElementById('chaos').style.opacity = '1'
        document.getElementById('chaos').style.cursor = 'pointer'
        document.getElementById('banner').style.borderBottomLeftRadius = '0px'
        document.getElementById('banner').style.borderBottomRightRadius = '0px'
    }
    else{
        document.getElementById('banner').style.height = "200px"
        document.getElementById('sorting').style.opacity = '0'
        document.getElementById('sorting').style.cursor = 'default'
        document.getElementById('chaos').style.opacity = '0'
        document.getElementById('banner').style.borderBottomLeftRadius = '15px'
        document.getElementById('banner').style.borderBottomRightRadius = '15px'
    }
    
}

function sierpinskiTriangle(){

    let canvas = document.getElementById('c1')
    const width = 500
    const height = 450

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let z = Math.sqrt(3)
    let vertices = [[width/2, height - width * z/2],[0,height],[width,height]]

    ctx.fillRect(vertices[0][0], vertices[0][1],2,2)
    ctx.fillRect(vertices[1][0], vertices[1][1],2, 2)
    ctx.fillRect(vertices[2][0], vertices[2][1],2, 2)

    let x = Math.random() * width

    let y = x < width/2? height - z*x * Math.random(): 
    height - Math.random() * (-z * (x-width/2) + z*width/2)

    last = [x,y]

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function triangle() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 3)
            last[0] = (last[0] + vertices[choice][0]) / 2
            last[1] = (last[1] + vertices[choice][1]) / 2
        
    }

    async function main(){
        for (let i =0; i< 5000; i++){
            await triangle()
        }
    }

    main()
}

function chaosSquare(){

    let canvas = document.getElementById('c2')
    const width = 500
    const height = 500

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let vertices = [[0, 0],[0,height],[width,height], [width,0]]


    let x = Math.random() * width

    let y = Math.random() * length

    let last = [x,y]
    let lastVert;

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function square() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 4)
            while (lastVert == choice){
                choice = Math.floor(Math.random() * 4)
            }
            last[0] = (last[0] + vertices[choice][0]) / 2
            last[1] = (last[1] + vertices[choice][1]) / 2
            lastVert = choice
        
    }

    async function main(){
        for (let i =0; i< 10000; i++){
            await square()
        }
    }

    main()
}

function rotatedChaosSquare(){

    let canvas = document.getElementById('c3')
    const width = 500
    const height = 500

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let vertices = [[0, 0],[width,0],[width,height], [0,height]]


    let x = Math.random() * width

    let y = Math.random() * length

    let last = [x,y]
    let lastVert;

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function square() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 4)
            while (lastVert == (choice + 1) % 4){
                choice = Math.floor(Math.random() * 4)
            }
            last[0] = (last[0] + vertices[choice][0]) / 2
            last[1] = (last[1] + vertices[choice][1]) / 2
            lastVert = choice
        
    }

    async function main(){
        for (let i =0; i< 10000; i++){
            await square()
        }
    }

    main()
}

function VicsekSquare(){

    let canvas = document.getElementById('c4')
    const width = 500
    const height = 500

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let vertices = [[0, 0],[width,0],[width,height], [0,height], [width/2, height/2]]


    let x = Math.random() * width

    let y = Math.random() * length

    let last = [x,y]

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function square() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 5)
            last[0] = (last[0] + 2*vertices[choice][0]) / 3
            last[1] = (last[1] + 2*vertices[choice][1]) / 3
        
    }

    async function main(){
        for (let i =0; i< 10000; i++){
            await square()
        }
    }

    main()
}

function sierpinskiCarpet(){

    let canvas = document.getElementById('c5')
    const width = 500
    const height = 500

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let vertices = [[0, 0],[width,0],[width,height], [0,height], [0, height/2], [width/2,0], [width/2,height], [width, height/2]]


    let x = Math.random() * width

    let y = Math.random() * length

    let last = [x,y]

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function square() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 8)
            last[0] = (last[0] + 2*vertices[choice][0]) / 3
            last[1] = (last[1] + 2*vertices[choice][1]) / 3
        
    }

    async function main(){
        for (let i =0; i< 10000; i++){
            await square()
        }
    }

    main()
}

function circleChaosSquare(){

    let canvas = document.getElementById('c6')
    const width = 500
    const height = 500

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let vertices = [[0, 0],[width,0],[width,height], [0,height]]


    let x = Math.random() * width

    let y = Math.random() * length

    let last = [x,y]
    let lastVert;
    let last2Vert;

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function square() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 4)
            while (lastVert == last2Vert && (choice == (lastVert + 1) % 4 || lastVert == (choice + 1) % 4)){
                choice = Math.floor(Math.random() * 4)
            }
            last[0] = (last[0] + vertices[choice][0]) / 2
            last[1] = (last[1] + vertices[choice][1]) / 2
            last2Vert = lastVert
            lastVert = choice

        
    }

    async function main(){
        for (let i =0; i< 10000; i++){
            await square()
        }
    }

    main()
}

function crownChaosSquare(){

    let canvas = document.getElementById('c7')
    const width = 500
    const height = 500

    canvas.style.width = width + "px"
    canvas.style.height = height + "px"
    canvas.style.border = "1px solid"

    const scale = window.devicePixelRatio


    canvas.width = width * scale
    canvas.height = height * scale

    let ctx = canvas.getContext("2d")
    ctx.scale(scale,scale)

    let vertices = [[0, 0],[width,0],[width,height], [0,height]]


    let x = Math.random() * width

    let y = Math.random() * length

    let last = [x,y]
    let lastVert;

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function square() {
            await timer(1)
            ctx.fillRect(last[0], last[1], 2, 2)
            choice = Math.floor(Math.random() * 4)
            while (choice == (lastVert + 2 ) % 4){
                choice = Math.floor(Math.random() * 4)
            }
            last[0] = (last[0] + vertices[choice][0]) / 2
            last[1] = (last[1] + vertices[choice][1]) / 2
            lastVert = choice

        
    }

    async function main(){
        for (let i =0; i< 10000; i++){
            await square()
        }
    }

    main()
}


function mergesort(array){
    if (array.length == 1){
        return array
    }
    else{
        let q = Math.floor(array.length / 2);
        return merge(mergesort(array.slice(0,q)), mergesort(array.slice(q)))
        }
    

    function merge(arr1, arr2){
        let merged = []
        let i = 0;
        let j = 0;

        while (i < arr1.length && j < arr2.length){
            if (arr1[i] < arr2[j]){
                merged.push(arr1[i])
                i++
            }
            else{
                merged.push(arr2[j])
                j++
            }
        }

        while (i < arr1.length){
            merged.push(arr1[i])
            i++
        }
        while (j < arr2.length){
            merged.push(arr2[j])
            j++
        }
        return merged
    }
   
}

function heapsort(array){

    function leftchild(array,i){
        return array[2*i+1]
    }

    function rightchild(array,i){
        return array[2*i+2]
    }

    function maxHeapify(array,i, heapsize){
        let root = array[i]
        let largest = [i, array[i]]
        if (2*i + 1 < heapsize && leftchild(array,i) > array[i]){
            largest = [2*i + 1, leftchild(array,i)]
        }
        if (2*i + 2 < heapsize && rightchild(array,i) > largest[1]){
            largest = [2*i+ 2, rightchild(array,i)]
        }
        array[i] = largest[1]
        array[largest[0]] = root
        if (largest[0] != i){
            maxHeapify(array, largest[0], heapsize)
        }
    }

    function buildmaxheap(array, heapsize){
        for (let i = Math.floor(heapsize/2) - 1; i>-1; i--){
            maxHeapify(array, i, heapsize)
        }
    }

    buildmaxheap(array, array.length)
    
    for (let i = array.length - 1; i>0; i--){
        root = array[0]
        array[0] = array[i]
        array[i] = root
        maxHeapify(array, 0, i)
    }

    return array
}

function quicksort(array, p = 0, r = array.length-1){
    if (p<r){
        let q = partition(array, p, r)
        quicksort(array, p, q-1)
        quicksort(array, q + 1, r)
    }

    function partition(array, p, r){
        let temp; 
        let q = array[r]
        let i = p - 1
        for (let j = p; j<r; j++){
            if (array[j] <= q){
                i ++;
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
        array[r] = array[i+1]
        array[i+1] = q 
        
        return i+1
    }

    return array
}

function minimum(array){
    min = array[0]
    for (let i = 1; i<array.length; i++){
        if (array[i] < min){
            min = array[i]
        }
    }

    return min 
}

function orderStatistic(array, i, p=0, r = array.length-1){
    if (p == r){
        return array[p]
    }
    else{
        q = randomizedPartition(array, p, r)
        k = q - p 
        if (i - 1 == k){
            return array[q]
        }
        else if (i - 1 < k){
            return orderStatistic(array, i, p, q-1)
        }
        else{
            return orderStatistic(array, i - k - 1 , q+1, r)
        }

    }


    
}

function randomizedPartition(array, p = 0, r = array.length-1){
    let temp; 
    let randIndex = Math.floor(Math.random() * (r-p + 1)) + p
    temp = array[r]
    array[r] = array[randIndex]
    array[randIndex] = temp
    let q = array[r]
    let i = p - 1
    for (let j = p; j<r; j++){
        if (array[j] <= q){
            i ++;
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    array[r] = array[i+1]
    array[i+1] = q 
    return i+1
}

// sierpinskiTriangle()
// chaosSquare()
// rotatedChaosSquare()
// VicsekSquare()
// sierpinskiCarpet()
// circleChaosSquare()
// crownChaosSquare()


console.log(orderStatistic([9,8,7,6,5,4,3,2,1], 4))
