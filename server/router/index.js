const express = require('express');
const router = express.Router();

router.get('/products', function(req, res){
    let rows = []
    for(let i=0; i<8; i++){
        rows.push({
            id: 100000*Math.random().toString().slice(0,5),
            title: 'Flask Oil Burner',
            attachs: [
                'https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/v1/1332049/1_000000000587_tj9ff4.jpg',
                'https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/v1/1332049/2_000000000587_xbziqh.jpg',
                'https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/v1/1332049/3_000000000587_v6rhzz.jpg'
            ],
            price: 69,
            description: 'オーストラリアの有名デザインブランド「PAGE THIRTY THREE」のフラスコ型のアロマポットで日本未発売の商品です。', 
            total: 5
        })
    }
    res.send({
        success: true,
        rows
    })

    /*const sql = 'SELECT * FROM list';
    connect.query(sql, function(err, result){
        if(err){
            res.send({
                success: false,
                message: err.message,
                data: null
            });
        }else{
            res.send({
                success: true,
                data: result
            });
        }
    })*/
})

router.get('/products/:id', function(req, res){
    res.send({
        id: req.params.id,
        title: 'Flask Oil Burner',
        attachs: [
            'https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/v1/1332049/1_000000000587_tj9ff4.jpg',
            'https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/v1/1332049/2_000000000587_xbziqh.jpg',
            'https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/v1/1332049/3_000000000587_v6rhzz.jpg'
        ],
        price: 69,
        description: 'オーストラリアの有名デザインブランド「PAGE THIRTY THREE」のフラスコ型のアロマポットで日本未発売の商品です。', 
        total: 5
    })
})

module.exports = router;