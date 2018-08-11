const map = new Map()
map.set('Hobby','Cycling')

const foods = {dinner:'Curry',lunch: 'Sandwich',breakfast:'Eggs'}

for(const [key,value] of map){
    console.log(`${key}=${value}`)
    console.log(foods)
}