const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors()) //비워두면 모든 요청에 대해 허용

app.get('/', function (req, res) {
    res.send('/bear 곰사진 /panda 판다사진')
})


// /n을 <br/> 로 변경

app.get('/:id', function (req, res) {
    const q = req.params;
    if (q.id == "bear") {
        res.send("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Brown_bear_%28Ursus_arctos_arctos%29_running.jpg/375px-Brown_bear_%28Ursus_arctos_arctos%29_running.jpg'>");
    }else if (q.id == "panda") {
        res.send("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/A_Panda_eating.jpg/450px-A_Panda_eating.jpg'>");
    }

})

// //params은 콜론 뒤에 문자로 받는다.
// app.get('/user/:id', function (req, res) {
//     const q = req.params;
//     console.log(q);
//     res.json({'userid' : q.id});
//   })
// //query는 
//   app.get('/name/:id', function (req, res) {
//     const q = req.query;
//     console.log(q.q);
//     console.log(q.name);
//     res.json({'userid' : q.name});
//   })
//   app.get('/sound/:name', (req, res) => {
//     const { name } = req.params;
//     if(name == "dog"){
//         res.json({'sound':'왈왈'})
//     } else if(name=="cat"){
//         res.json({'sound':'야옹'})
//     } else if(name=="pig"){
//         res.json({'sound':'오잉크오잉크'})
//     } else {
//         res.json({'sound':'알 수 없음'})
//     }
//   })

app.listen(3000)