console.log('Was load...')

const users = [
    {name:'oleh', gender:'male',salary:2500},
    {name:'stas', gender:'male',salary:800},
    {name:'anna', gender:'female',salary:500},
    {name:'ihor', gender:'male',salary:2000},
    {name:'olha', gender:'female',salary:1000},
    {name:'serj', gender:'male',salary:1100},
    {name:'and', gender:'male',salary:430},
    {name:'pite', gender:'male',salary:2150},
];

const avg = (data,gender) => (({result,count})=>result/count)(( (data,gender) => data.reduce((acc, el) => gender?{result:gender==el.gender?acc.result+el.salary:acc.result,count:gender==el.gender?acc.count+1:acc.count}:{result:acc.result+el.salary,count:acc.count+1},{result:0, count:0}) )(data,gender))