const fs =  require('fs');


exports.getMenu = (req, res, next) => {
    try{
        if(fs.existsSync('./backend/json-mock/menu.json')){
            fs.promises.readFile('./backend/json-mock/menu.json')
            .then(menu => {
                let parsedMenu = JSON.parse(menu)
                res.status(200).json({
                    message: "Menu read correctly!",
                    updatedMenu: parsedMenu
                });
            })
            .catch(err => {
                console.log('Error read menu')
                res.status(500).json({
                    message: "Server error reading new menu",
                    err: err
                });
            })
        }
    }catch(err){
        console.log('Generic error', err)
        res.status(500).json({
            message: "Server error",
            err: err
        });
    }
}


exports.updateMenu = (req, res, next) => {
    try{
        if(fs.existsSync('./backend/json-mock/menu.json')){
            let newJson = JSON.stringify(req.body.menu, null, 4)
            fs.promises.writeFile('./backend/json-mock/menu.json', newJson)
            .then(response => {
                console.log('Correctly menu saved')
                fs.promises.readFile('./backend/json-mock/menu.json')
                .then(menu => {
                    let parsedMenu = JSON.parse(menu)
                    res.status(200).json({
                        message: "Menu update correctly!",
                        updatedMenu: parsedMenu
                    });
                })
                .catch(err => {
                    console.log('Error read menu')
                    res.status(500).json({
                        message: "Server error reading new menu",
                        err: err
                    });
                })
            }).catch(err => {
                console.log('Error save menu')
                res.status(500).json({
                    message: "Server error saving menu",
                    err: err
                });
            })
        }else{
            console.log('Json not found')
            res.status(404).json({
                message: "Json not found",
            });
        }
    }catch(err){
        console.log('Generic error', err)
        res.status(500).json({
            message: "Server error",
            err: err
        });
    }
}


exports.getOrders = (req, res, next) => {
    try{
        if(fs.existsSync('./backend/json-mock/orders.json')){
            fs.promises.readFile('./backend/json-mock/orders.json')
            .then(orders => {
                let parsedOrders = JSON.parse(orders)
                res.status(200).json({
                    message: "Orders read correctly!",
                    updatedOrders: parsedOrders
                });
            })
            .catch(err => {
                console.log('Error read orders')
                res.status(500).json({
                    message: "Server error reading new orders",
                    err: err
                });
            })
        }
    }catch(err){
        console.log('Generic error', err)
        res.status(500).json({
            message: "Server error",
            err: err
        });
    }
}

exports.submitOrder = (req, res, next) => {
    try{
        if(fs.existsSync('./backend/json-mock/orders.json')){
            fs.promises.readFile('./backend/json-mock/orders.json')
            .then(orders => {
                console.log('Correctly read ordes')
                let ordersParsed = JSON.parse(orders);
                ordersParsed.push(req.body.newOrder);
                let newOrderJson = JSON.stringify(ordersParsed, null, 4)
                fs.promises.writeFile('./backend/json-mock/orders.json', newOrderJson)
                .then(response => {
                    console.log('Correctly write ordes')
                    fs.promises.readFile('./backend/json-mock/orders.json')
                    .then(ordersUpdated => {
                        let jsonResponse = JSON.parse(ordersUpdated)
                        console.log('Correctly read new ordes array')
                        res.status(200).json({
                            message: "Menu update correctly!",
                            ordersUpdated: jsonResponse
                        });
                    })
                    .catch(err => {
                        console.log('Error read new ordes array')
                        res.status(500).json({
                            message: "Server error submit order",
                            err: err
                        });
                    })
                })
                .catch(err => {
                    console.log('Error update ordes')
                    res.status(500).json({
                        message: "Server error submit order",
                        err: err
                    });
                })
            })
            .catch(err => {
                console.log('Error read ordes')
                res.status(500).json({
                    message: "Server error submit order",
                    err: err
                });
            })
        }else{
            console.log('Json not found')
            res.status(404).json({
                message: "Json not found",
            });
        }
    }catch(err){
        console.log('Generic error', err)
        res.status(500).json({
            message: "Server error",
            err: err
        });
    }
}

exports.removeOrder = (req, res, next) => {
    try{
        if(fs.existsSync('./backend/json-mock/orders.json')){
            fs.promises.readFile('./backend/json-mock/orders.json')
            .then(orders => {
                console.log('Correctly read ordes')
                let ordersParsed = JSON.parse(orders);
                let index = ordersParsed.findIndex(el => el.id === parseInt(req.params.orderIdToRemove));
                if(index != -1){
                    ordersParsed.splice(index, 1);
                    let newOrderJson = JSON.stringify(ordersParsed, null, 4)
                    fs.promises.writeFile('./backend/json-mock/orders.json', newOrderJson)
                    .then(response => {
                        console.log('Correctly write ordes')
                        fs.promises.readFile('./backend/json-mock/orders.json')
                        .then(ordersUpdated => {
                            let jsonResponse = JSON.parse(ordersUpdated)
                            console.log('Correctly read new ordes array')
                            res.status(200).json({
                                message: "Menu update correctly!",
                                ordersUpdated: jsonResponse
                            });
                        })
                        .catch(err => {
                            console.log('Error read new ordes array')
                            res.status(500).json({
                                message: "Server error submit order",
                                err: err
                            });
                        })
                    })
                }else{
                    console.log('Order not found')
                    res.status(404).json({
                        message: "Order not found",
                    });
                }
            })
            .catch(err => {
                console.log('Error read ordes')
                res.status(500).json({
                    message: "Server error submit order",
                    err: err
                });
            })
        }else{
            console.log('Json not found')
            res.status(404).json({
                message: "Json not found",
            });
        }
    }catch(err){
        console.log('Generic error', err)
        res.status(500).json({
            message: "Server error",
            err: err
        });
    }
}


exports.setTimer = (req, res, next) => {
    try{
        if(fs.existsSync('./backend/json-mock/orders.json')){
            fs.promises.readFile('./backend/json-mock/orders.json')
            .then(orders => {
                console.log('Correctly read ordes')
                let ordersParsed = JSON.parse(orders);
                let index = ordersParsed.findIndex(el => el.id === req.body.orderId);
                if(index != -1){
                    ordersParsed[index].timer = req.body.timer;
                    ordersParsed[index].status = 'Progress';
                    let newOrderJson = JSON.stringify(ordersParsed, null, 4)
                    fs.promises.writeFile('./backend/json-mock/orders.json', newOrderJson)
                    .then(response => {
                        console.log('Correctly write ordes')
                        fs.promises.readFile('./backend/json-mock/orders.json')
                        .then(ordersUpdated => {
                            let jsonResponse = JSON.parse(ordersUpdated)
                            console.log('Correctly read new ordes array')
                            res.status(200).json({
                                message: "Menu update correctly!",
                                ordersUpdated: jsonResponse
                            });
                        })
                        .catch(err => {
                            console.log('Error read new ordes array')
                            res.status(500).json({
                                message: "Server error submit order",
                                err: err
                            });
                        })
                    })
                }else{
                    console.log('Error order not found')
                    res.status(404).json({
                        message: "Error order not found",
                        err: err
                    });
                }
            })
            .catch(err => {
                console.log('Error read ordes')
                res.status(500).json({
                    message: "Server error submit order",
                    err: err
                });
            })
        }else{
            console.log('Json not found')
            res.status(404).json({
                message: "Json not found",
            });
        }
    }catch(err){
        console.log('Generic error', err)
        res.status(500).json({
            message: "Server error",
            err: err
        });
    }
}